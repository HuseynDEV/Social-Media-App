<template>
  <div class="w-[600px] mx-auto h-[200px]">
   <div
      v-for="item in posts"
      :key="item"
      class="border-solid border-[black-300] border-2 p-3 my-3"
    >
      <h1 class="text-2xl mb-2">{{ item.title }}</h1>
      <div>{{ item.text }}</div>
      <div
        class="p-[5px] w-[100px] bg-blue-500 my-[10px] text-white text-center"
      >
        {{ item.option }}
      </div>
      <img :src="item.image" class="w-[600px] mx-auto" />

      <div class="flex items-center gap-x-2 justify-evenly mt-5">
        <i class="fa-regular fa-heart text-xl text-red-600"></i>
        <i class="fa-solid fa-share text-xl text-blue-600"></i>
        <i class="fa-regular fa-comment text-xl"></i>
      </div>
    </div>
    <div
      v-for="item in getPosts"
      :key="item.id"
      class="border-solid border-[black-300] border-2 p-3 my-3"
    >
      <h1 class="text-2xl mb-2">{{ item.title }}</h1>
      <!-- <div>{{ item.text }}</div> -->
      <div
        class="p-[5px] w-[100px] bg-blue-500 my-[10px] text-white text-center"
      >
        {{ item.option }}
      </div>
      <img :src="item.image" class="w-[600px] mx-auto" />
      <button @click='sendData(item.id)' class='px-4 py-2 bg-blue-500 text-white mt-2'>Daha Etrafli melumat ucun daxil olun</button>

      <div class="flex items-center gap-x-2 justify-evenly mt-5">
        <i class="fa-regular fa-heart text-xl text-red-600"></i>
        <i class="fa-solid fa-share text-xl text-blue-600"></i>
        <i class="fa-regular fa-comment text-xl"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { posts } from "../data";
import { mapGetters } from "vuex";
export default {

  data() {
    return {
      posts: posts,
    };
  },
  computed: {
    ...mapGetters(["getPosts"]),
  },
  methods:{
    sendData(item){
        this.$store.dispatch('sendOnePost', item)
    }
  }
};
</script>

<style scoped></style>
