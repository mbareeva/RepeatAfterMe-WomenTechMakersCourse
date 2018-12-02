import axios from 'axios';

const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
const REQUEST_METUP_SUCCESS = 'REQUEST_METUP_SUCCESS';

const state = {
  data: [],
  post: {}
};

const mutations = {
  [REQUEST_SUCCESS](state, data) {
    state.data = data;
  },
  [REQUEST_METUP_SUCCESS](state, data) {
    state.post = data;
  }
};

const actions = {
  async fetchPosts({ commit }) {
    const res = await axios.get('http://localhost:3000/posts/all');
    commit(REQUEST_SUCCESS, res.data);
  },
  async fetchPost({ commit }, id) {
    const res = await axios.get(`http://localhost:3000/posts/${id}/json`);
    commit(REQUEST_METUP_SUCCESS, res.data)
  }
};

export default {
  state,
  mutations,
  actions,
};