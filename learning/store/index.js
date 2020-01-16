import axios from "axios";

export const state = () => ({
    posts: {}
});

//getters
export const getters = {
    posts(state) {
        return state.posts
    }
}

//mutations
export const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts
    }
}

//actions
export const actions = {
    async nuxtServerInit({ commit }) {
        let { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        commit("SET_POSTS", data)
    },
    setPosts({ commit }, posts) {
        commit("SET_POSTS", posts)
    }
}