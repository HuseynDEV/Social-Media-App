<template>
  <div class="flex items-center justify-center w-full h-screen">
    <div class="w-[400px] bg-blue-500 p-[20px] mt-[30px]">
      <h1 class="text-center text-[40px] font-bold  text-white">Form</h1>
      <div class="flex flex-col ">
        <label for="email" class="text-white text-lg mb-1">Email</label>
        <input
          @input="$v.userData.email.$touch()"
          v-model="userData.email"
          class="h-[40px] px-[10px] outline-none"
          type="text"
          id="email"
          placeholder="Please enter your email"
        />
        <small v-if="!$v.userData.email.required" class="text-red-600 text-sm"
          >Xahis olunur bos qoymayin</small
        >
        <small v-if="!$v.userData.email.email" class="text-red-600 text-sm"
          >Xahis olunur duzgun formatda yazin</small
        >
      </div>
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
      <div></div>
      <div class="flex flex-col my-3">
        <label for="password" class="text-white text-lg mb-1">Password</label>
        <input
        @input='$v.userData.password.$touch()'
          v-model="userData.password"
          class="h-[40px] px-[10px] outline-none"
          type="password"
          id="password"
          placeholder="Please enter your password"
        />
     <small v-if="!$v.userData.password.required" class="text-red-600 text-sm"
          >Xahis olunur kodunuz daxil edin</small
        >
         <small v-if="!$v.userData.password.minLength" class="text-red-600 text-sm"
          >Kodunuz qisadir {{$v.userData.password.$params.minLength.min}} </small
        >
         <small v-if="!$v.userData.password.maxLength" class="text-red-600 text-sm"
          >Kodunuz uzundur {{$v.userData.password.$params.maxLength.max}} </small
        >
      </div>
      <div class="flex flex-col my-3">
        <label for="password2" class="text-white text-lg mb-1">Password</label>
        <input
          v-model="userData.password2"
          class="h-[40px] px-[10px] outline-none"
          type="password"
          id="password2"
          placeholder="PLease repeat your password"
        />
        <small v-if="!$v.userData.password2.required" class="text-red-600 text-sm"
          >Xahis olunur kodunuz daxil edin</small
        >
         <small v-if="!$v.userData.password2.minLength" class="text-red-600 text-sm"
          >Kodunuz qisadir {{$v.userData.password2.$params.minLength.min}} </small
        >
         <small v-if="!$v.userData.password2.maxLength" class="text-red-600 text-sm"
          >Kodunuz uzundur {{$v.userData.password2.$params.maxLength.max}} </small
        >
        <small v-if="!$v.userData.password2.sameAs" class="text-red-600 text-sm"
          >Kodunuz eyni deyil </small
        >
      </div>
      <div>
        <input
        @input='$v.image.$touch()'
          type="file"
          aceept="image/png, image/jpeg"
          @change="onChange($event)"
        />
        <small v-if='!$v.userData.image.required' class='text-red-600 text-sm block'>Xahis olunur bir sekil secesiniz</small>
      </div>
      <button type='submit' class='w-full h-[40px] text-center leading-[40px] bg-white  mt-3' @click='sendUserData' :disabled='$v.$invalid'>Qeydiyyati tamamla</button>
    </div>



  </div>
</template>

<script>
import { required, email, maxLength, minLength, sameAs } from "vuelidate/lib/validators";

export default {



  data() {
    return {
      userData: {
        email: "",
        name: "",
        password: "",
        password2: "",
        image: "",
      },

    };
  },

  validations: {
    userData: {
      email: {
        required,
        email,
      },
      name: {
        required,
      },
      password:{
        required,
        minLength:minLength(6),
        maxLength:maxLength(12)
      },
       password2:{
        required,
        minLength:minLength(6),
        maxLength:maxLength(12),
        sameAs:sameAs('password')
      },
      image:{
        required
      }
    },
  },

  methods: {
    onChange(item) {
      let image = item.target.files[0];
      this.userData.image = URL.createObjectURL(image);
    },
    sendUserData(){
            this.$store.dispatch('sendUserData', this.userData)
            // console.log(this.userData)
            // this.$router.push('/')
    },

  },
};
</script>

<style scoped></style>
