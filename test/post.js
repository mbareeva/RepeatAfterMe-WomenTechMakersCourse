import test from "ava";
import request from "supertest";
import app from "../app";

test("Get list of posts", async t => {
  const postToCreate = {  topic: "Indonesian surroundings Render", description: "couple of weeks in Bali" };

  const creation = await request(app)
    .post("/posts")
    .send(postToCreate);

  const res = await request(app).get("/posts/all-list");

  t.is(res.status, 200);
  t.true(Array.isArray(res.body), "Body should be an array");
  t.true(res.body.length > 0);
});

test("Create new post", async t => {
  t.plan(3);
  const postToCreate = { topic: "Indonesian surroundings Render", description: "couple of weeks in Bali" };

  const res = await request(app)
     .post("/posts")
     .send(postToCreate);

  t.is(res.status, 200);
  t.is(res.body.topic, postToCreate.topic);
  t.is(res.body.description, postToCreate.description);
});

test("Fetch a post", async t => {
  t.plan(2);
  const postToCreate = { topic: "Indonesian surroundings Render", description: "couple of weeks in Bali" };

  const postCreated = (await request(app)
    .post("/posts")
    .send(postToCreate)).body;

  const fetchRes = await request(app).get(
    `/person/${postCreated._id}/json`
  );

  const postFetched = fetchRes.body;

  t.is(fetchRes.status, 200);
  t.deepEqual(postFetched, postCreated);
});

test("Delete a post", async t => {
  t.plan(3);

  const posts = (await request(app)
    .post("/posts")
    .send({ topic: "Indonesian surroundings Render", description: "couple of weeks in Bali" })).body;

  const del = await request(app).delete(`/posts/${posts._id}`);

  t.is(del.status, 200);
  t.is(del.text, "ok!");

  const fetch = await request(app).get(`/posts/${posts._id}/json`);

  t.is(fetch.status, 404);
});