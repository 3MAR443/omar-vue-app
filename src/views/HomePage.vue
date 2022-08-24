<template>
  <div class="my-5">
    <MDBContainer>
      <MDBRow class="justify-content-center">
        <MDBCol>
          <router-link to="/store">
            <MDBCarousel
              :controls="false"
              v-model="carousel1"
              :items="items1"
              captionsClass=" carousel-caption d-none d-md-block"
              fade
            />
          </router-link>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </div>
</template>

<script>
// @ is an alias to /src
import { MDBCol, MDBCarousel, MDBRow, MDBContainer } from "mdb-vue-ui-kit";
import { ref } from "vue";
export default {
  name: "HomePage",
  components: {
    MDBCarousel,
    MDBCol,
    MDBRow,
    MDBContainer,
  },
  setup() {
    const items1 = [
      {
        src: "https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp",
        alt: "",
        to: "/store",
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