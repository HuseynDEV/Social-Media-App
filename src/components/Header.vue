<template>
  <div class="">
    <div class="w-full h-[60px] bg-blue-500 px-4">
      <ul class="flex items-center justify-between h-full text-xl text-white">
        <div class="flex items-center gap-x-6">
          <router-link tag="li" to="/"> <a>Posts</a> </router-link>
          <router-link tag="li" to="/register"> <a>Register</a> </router-link>
          <router-link v-if='getUser'  to="/add"> <a>AddPost</a> </router-link>
           <router-link tag="li" to="/login"> <a>Login</a> </router-link>
        </div>
        <div v-if='getUser' class="flex items-center gap-x-4">
          <h3>{{getUser.name}}</h3>
          <img
            class="w-[30px] h-[30px] rounded-[50%] object-cover"
            :src='getUser.image'
          />
          <div @click='Logout'>Logout</div>
        </div>

      </ul>
    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
computed:{
  ...mapGetters(['getUser', 'getLogin'])

},

methods:{
  Logout(){
this.$store.dispatch('Logout')
this.$router.push('/login')
location.reload()
  }
}
};
</script>

<style scoped></style>
