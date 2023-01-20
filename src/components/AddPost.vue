<template>
  <div class='w-[800px] mx-auto'>
   <form @submit.prevent='onSubmit' >
   <div class='flex flex-col'>

   <h1 class='text-4xl text-center mt-3'>Add your post</h1>
    <input type="text" v-model="postData.title" placeholder='Basliq daxil edin' class='w-full my-3 h-[50px] border border-solid border-[black-300] p-2' />
    <textarea v-model='postData.text' cols='10' rows='10' class='border border-solid border-[black-300] mt-5 p-2' placeholder='About your post'></textarea>
    <select v-model='postData.option' class='my-3 h-[50px] border border-solid border-[black-300] p-2'>
    <option value='technology' >Technology</option>
       <option value='game'>Game</option>
          <option value='news'>News</option>
             <option value='travel'>Travel</option>
    </select>
        <input type='file' @change='getImage($event)' />
    <button type='submit' class='full h-[40px] bg-blue-500 text-white text-2xl mt-4 leading-[40px] text-center'>Add</button>
   </div>
   </form>

  </div>
</template>

<script>

export default {
  computed: {

    getPost(){
  return this.$store.getters.getPosts
}
  },
  data() {
    return {
      postData:{
        title: "",
        image:'',
        text:'',
        option:''
      }
    };
  },
  methods: {
    onSubmit() {
   if(this.postData.title!='' && this.postData.image!='' && this.postData.text!='' && this.postData.option!=''){
    this.$store.dispatch('addPost', {...this.postData, id:new Date().getTime()})
    this.$router.push('/')
    this.postData={}
   }
   else{
    alert('Xahis olunur bos xanalari doldurun')
   }
    },

    getImage(event){
      let image=event.target.files[0]
            this.postData.image = URL.createObjectURL(image);
            

    }
  },
};
</script>
