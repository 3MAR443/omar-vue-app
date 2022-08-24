<template>
  <MDBContainer>
    <MDBRow class="">
      <MDBCol
        v-for="phone in $store.state.Phones"
        :key="phone"
        class=""
        lg="4"
        md="6"
      >
        <MDBCard text="center">
          <MDBCardImg :src="'./' + phone.img" top alt="..." />
          <MDBCardBody>
            <MDBCardTitle> {{ phone.name }} </MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
            <MDBBtn tag="a" class="rounded-pill" href="#!" color="primary"
              >buy</MDBBtn
            >
            <MDBBtn tag="a" class="rounded-pill" href="#!" color="success"
              >vote</MDBBtn
            >
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script>
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImg,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBContainer,
} from "mdb-vue-ui-kit";

export default {
  data() {
    return {};
  },
  components: {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImg,
    MDBBtn,
    MDBCol,
    MDBRow,
    MDBContainer,
  },
};
</script>

<style>
</style>