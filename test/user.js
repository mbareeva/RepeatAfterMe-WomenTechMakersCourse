import test from "ava";
import request from "supertest";
import app from "../app";

test("Get list of users", async t => {
  const contributorToCreate = {
    name: "Testing Session",
    email: "example@google.com",
    posts: []
  };

  const creation = await request(app)
    .post("/contributors")
    .send(contributorToCreate);

  const res = await request(app).get("/contributors/all");

  t.is(res.status, 200);
  t.true(Array.isArray(res.body), "Body should be an array");
  t.true(res.body.length > 0);
});

test("Create new user", async t => {
  t.plan(4);
  const contributorToCreate = {
    name: "Testing Session",
    email: "example@google.com",
    posts: []
  };

  const res = await request(app)
    .post("/contributors")
    .send(contributorToCreate);

  t.is(res.status, 200);
  t.is(res.body.name, contributorToCreate.name);
  t.is(res.body.email, contributorToCreate.email);
  t.deepEqual(res.body.posts, contributorToCreate.posts);
});

test("Fetch a user", async t => {
  t.plan(2);
  const contributorToCreate = {
    name: "Testing Session",
    location: "example@google.com",
    posts: []
  };

  const contributorCreated = (await request(app)
    .post("/contributors")
    .send(contributorToCreate)).body;

  const fetchRes = await request(app).get(`/contributors/${contributorCreated._id}/json`);

  const contributorFetched = fetchRes.body;

  t.is(fetchRes.status, 200);
  t.deepEqual(contributorFetched, contributorCreated);
});

test("Delete a contributor", async t => {
  t.plan(3);

  const contributorToCreate = {
    name: "Testing Session",
    email: "example@google.com",
    posts: []
  };

  const contributors = (await request(app)
    .post("/contributors")
    .send(contributorToCreate)).body;

  const del = await request(app).delete(`/contributors/${contributors._id}`);

  t.is(del.status, 200);
  t.is(del.text, "ok!");

  const fetch = await request(app).get(`/contributors/${contributors._id}/json`);

  t.is(fetch.status, 404);
});

test('Post can be made by a contributor(user)', async t => {
  const post1 = { topic: 'My trip', description: "how I travelled the world" };

  const contributorPhil = { name: 'Phil',
  email: 'example@google.com',
  posts: []
};

  const createdPost = (await request(app)
  .post("/posts")
  .send(post1)).body

  const contributorCreateRes = await request(app)
  .post("/contributors")
  .send(contributorPhil)

  const createdContributor = contributorCreateRes.body

  const addPostRes = await request(app)
  .post(`/contributors/${createdPost._id}/addPost`)
  .send( {postId : createdPost._id} )

  t.is(addPostRes.status, 200)

  const contributorAltered = addPostRes.body

  t.is(contributorAltered.posts[0]._id, createdPost._id)

  t.deepEqual(contributorAltered.posts[0], createdPost)

  t.notDeepEqual(contributorAltered, createdContributor)
})
