import test from "ava";
import request from "supertest";
import app from "../app";

test("Index page should be rendered", async t => {
    const res = await request(app).get("/");

    t.is(res.status, 200);
    t.true(res.text.includes('hello there 👋'));
});


test("List of post view render", async t => {
  const postToCreate = { topic: "Indonesian surroundings Render", description: "couple of weeks in Bali" };

  const creation = await request(app)
    .post("/posts")
    .send(postsToCreate);

  const res = await request(app).get("/posts/all-list");

  t.is(res.status, 200);
  t.true(res.text.includes('Indonesian surroundings Render'));
});

test("Post detail view render", async t => {
  const postToCreate = { topic: "Indonesian surroundings Render", description: "couple of weeks in Bali" };

  const createdPost = (await request(app)
    .post("/posts")
    .send(postToCreate)).body;

  const res = await request(app).get(`/posts/${createdPost._id}`);

  t.is(res.status, 200);
  t.true(res.text.includes('Indonesian surroundings Detail Render'));
});

test("List of contributor view render", async t => {
    const contributorToCreate = {
        name: 'Phil Render',
        email: 'bbb@example.com',
        posts: []
    };

    const creation = await request(app)
      .post("/contributors")
      .send(contributorToCreate);

    const res = await request(app).get("/contributors/all-list");

    t.is(res.status, 200);
    t.true(res.text.includes('Phil Render'));
  });

  test("Contributor detail render", async t => {
    const contributorToCreate = {
        name: 'Phil Testing Detail Render',
        email: 'bbb@example.com',
        posts: []
    };

    const createdContributor = (await request(app)
      .post("/contributors")
      .send(contributorToCreate)).body;

    const res = await request(app).get(`/contributors/${createdContributor._id}`);

    t.is(res.status, 200);
    t.true(res.text.includes('Phil Testing Detail Render'));
  });
Terms