<template>
  <div
    class="p-5 text-center bg-image"
    style="
      background-image: url('./pexels-felix-mittermeier-956981.jpg');
      height: 400px;
    "
  >
    <div class="mask" style="background-color: rgba(0, 0, 0, 0.6)">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white">
          <h1 class="mb-3">welcome to omer store</h1>
          <h4 class="mb-3">Subheading</h4>
        </div>
      </div>
    </div>
  </div>
  <MDBContainer>
    <MDBCarousel
      :controls="false"
      v-model="carousel1"
      :items="items1"
      tag="router-link"
      to="/store"
      interval="1000"
      captionsClass=" carousel-caption d-none d-md-block"
      fade
    />
  </MDBContainer>
</template>

<script>
// @ is an alias to /src
import { MDBCarousel, MDBContainer } from "mdb-vue-ui-kit";
import { ref } from "vue";
export default {
  name: "HomePage",
  components: {
    MDBCarousel,
    MDBContainer,
  },
  data() {
    return {
      g: "./phones/c4.webp",
    };
  },
  setup() {
    const items1 = [
      {
        src: "",
        alt: "",

        label: "popular items",
      },
      {
        src: "https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp",
        alt: "...",
        label: "popular items",
      },
      {
        src: "https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp",
        alt: "...",
        label: "popular items",
      },
    ];
    const carousel1 = ref(0);
    return {
      items1,
      carousel1,
    };
  },
};
</script>

<style >
</style>