<template>
  <div class='w-[900px] mx-auto'>
    <div
      class="border-solid border-[black-300] border-2 p-3 my-3"
    >
      <div>
        <h1 class="text-2xl mb-2">{{ getOnePost.title }}</h1>

        <div
          class="p-[5px] w-[100px] bg-blue-500 my-[10px] text-white text-center"
        >
          {{ getOnePost.option }}
        </div>
        <img :src="getOnePost.image" class="w-full mx-auto" />

<h1 class='text-3xl font-bold mt-4 mb-2'>Haqqinda</h1>
<hr>
             <div class='ml-3'>{{ getOnePost.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {

  computed: {
...mapGetters(['getOnePost'])
  },

};
</script>

<style></style>
