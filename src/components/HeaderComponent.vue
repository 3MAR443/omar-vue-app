<template>
  <MDBNavbar
    class=""
    light
    style="background-color: #e3f2fd"
    expand="md"
    container="md"
  >
    <MDBNavbarBrand href="#">Navbar</MDBNavbarBrand>
    <MDBNavbarToggler
      @click="collapse1 = !collapse1"
      target="g1"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="gi">
      <MDBNavbarNav justifyAround class="">
        <MDBNavbarItem to="/" active-class="active"> Home </MDBNavbarItem>
        <MDBNavbarItem to="/store" active-class="active"> Store </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
</template>
<script>
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
export default {
  name: "HeaderComponent",
  components: {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,

    MDBCollapse,
  },
  setup() {
    const collapse1 = ref(false);

    return {
      collapse1,
    };
  },
};
</script>
<style scoped>
</style>