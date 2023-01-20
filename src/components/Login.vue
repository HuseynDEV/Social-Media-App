<template>
  <div class="flex items-center justify-center w-full h-screen">
    <form @submit.prevent="onSubmit()">
      <div class="w-[400px] bg-blue-500 p-[20px]">
        <h1 class="text-center text-[40px] font-bold text-white">Login</h1>
        <div class="flex flex-col my-3">
          <label for="name" class="text-white text-lg mb-1">Name</label>
          <input
            @blur="$v.userData.name.$touch()"
            v-model="userData.name"
            class="h-[40px] px-[10px] outline-none"
            type="text"
            id="name"
            placeholder="Please enter your name"
          />
          <small v-if="!$v.userData.name.required" class="text-red-600 text-sm"
            >Xahis olunur adiniz daxil edin</small
          >
        </div>

        <div class="flex flex-col my-3">
          <label for="password" class="text-white text-lg mb-1">Password</label>
          <input
            @input="$v.userData.password.$touch()"
            v-model="userData.password"
            class="h-[40px] px-[10px] outline-none"
            type="password"
            id="password"
            placeholder="Please enter your password"
          />
          <small
            v-if="!$v.userData.password.required"
            class="text-red-600 text-sm"
            >Xahis olunur kodunuz daxil edin</small
          >
        </div>

        <button
          type="submit"
          class="w-full h-[40px] text-center leading-[40px] bg-white mt-3"
          :disabled="$v.$invalid"
        >
          Qeydiyyati tamamla
        </button>
<div class='hidden'>{{getAllUser}}</div>
      </div>
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getLogin", "getAllUser"]),
  },

  data() {
    return {
      userData: {
        name: "",
        password: "",
      },
    };
  },

  validations: {
    userData: {
      name: {
        required,
      },
      password: {
        required,
      },
    },
  },

  methods: {
    onSubmit() {
      this.$store.dispatch("Login", this.userData);
    },
  },
};
</script>

<style scoped></style>
