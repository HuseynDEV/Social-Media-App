import Vue from "vue";
import Vuex from "vuex";
import { router } from "@/router";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    posts: [],
    onePost: "",
    user: "",
    loginUserData: "",
    allUserData: "",
  },
  getters: {
    getUser(state) {
      return (state.user = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : "");
    },
    getPosts(state) {
      return (state.posts = localStorage.getItem("posts")
        ? JSON.parse(localStorage.getItem("posts"))
        : []);
    },
    getLogin(state) {
      return (state.loginUserData = localStorage.getItem("loginUser")
        ? JSON.parse(localStorage.getItem("loginUser"))
        : "");
    },
    getAllUser(state) {
      return (state.allUserData = localStorage.getItem("AllData")
        ? JSON.parse(localStorage.getItem("AllData"))
        : "");
    },

    getOnePost(state) {
      return (state.onePost = localStorage.getItem("OnePost")
        ? JSON.parse(localStorage.getItem("OnePost"))
        : "");
    },
  },

  mutations: {
    addUser(state, payload) {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(state.user));
      state.loginUserData = payload;
      localStorage.setItem("loginUser", JSON.stringify(state.loginUserData));
    },
    addPostData(state, payload) {
      state.posts.push(payload);
      localStorage.setItem("posts", JSON.stringify(state.posts));
    },
    LogoutUser(state) {
      state.user = "";
      localStorage.removeItem("user");
    },
    allUserData(state, payload) {
      state.allUserData = payload;
      localStorage.setItem("AllData", JSON.stringify(payload));
    },
    sendPost(state,payload) {
state.posts.filter((item) => {
     if(item.id===payload){
      state.onePost=item
      localStorage.setItem('OnePost', JSON.stringify(item))

     }
      });
    },
  },
  actions: {
    sendUserData({ commit }, payload) {
      router.replace("/");
      commit("addUser", payload);
      commit("allUserData", payload);
      location.reload();
    },

    addPost({ commit }, payload) {
      commit("addPostData", payload);
    },
    Logout({ commit }) {
      commit("LogoutUser");
    },

    Login({ dispatch, state }, payload) {
      if (
        payload.name == state.allUserData.name &&
        payload.password == state.allUserData.password
      ) {
        dispatch("sendUserData", { ...state.allUserData });
      }
    },

    sendOnePost({ commit }, payload) {
      commit("sendPost", payload);
      router.replace(`/post/${payload}`);
      location.reload()

    },
  },
});
