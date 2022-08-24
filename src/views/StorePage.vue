<template>
  <MDBContainer fluid>
    <MDBRow>
      <!-- accordion -->
      <MDBCol lg="3" md="4" sm="12">
        <MDBAccordion v-model="activeItem">
          <MDBAccordionItem
            headerClasses=""
            headerTitle="Prices"
            collapseId="collapseOne"
          >
            <MDBListGroup class="" light>
              <MDBListGroupItem
                tag="a"
                :class="
                  $store.state.min == 0 && $store.state.max == 9999999
                    ? 'active'
                    : ''
                "
                @click="
                  $store.state.min = 0;
                  $store.state.max = 9999999;
                "
                href="#"
                ripple
                noBorder
                spacing
                action
                >All</MDBListGroupItem
              >
              <MDBListGroupItem
                tag="a"
                :class="
                  $store.state.min == 0 && $store.state.max == 40000
                    ? 'active'
                    : ''
                "
                @click="
                  $store.state.min = 0;
                  $store.state.max = 40000;
                "
                href="#"
                ripple
                noBorder
                spacing
                action
                >0 - 40,000</MDBListGroupItem
              >
              <MDBListGroupItem
                tag="a"
                :class="$store.state.min == 40000 ? 'active' : ''"
                @click="
                  $store.state.min = 40000;
                  $store.state.max = 80000;
                "
                href="#"
                ripple
                noBorder
                spacing
                action
                >40,000 - 80,000</MDBListGroupItem
              >
              <MDBListGroupItem
                tag="a"
                :class="$store.state.min == 80000 ? 'active' : ''"
                @click="
                  $store.state.min = 80000;
                  $store.state.max = 120000;
                "
                href="#"
                ripple
                noBorder
                spacing
                action
                >80,000 - 120,000</MDBListGroupItem
              >
              <MDBListGroupItem
                tag="a"
                :class="$store.state.min == 120000 ? 'active' : ''"
                @click="
                  $store.state.min = 120000;
                  $store.state.max = 9999999;
                "
                href="#"
                ripple
                noBorder
                spacing
                action
                >Above 120,000</MDBListGroupItem
              >
            </MDBListGroup>
          </MDBAccordionItem>
          <MDBAccordionItem headerTitle="Company" collapseId="collapseTwo">
            <MDBListGroup light>
              <MDBListGroupItem
                :class="$store.state.selectedCompany == '' ? 'active' : ''"
                @click="$store.state.selectedCompany = ''"
                tag="a"
                href="#!"
                ripple
                noBorder
                spacing
                action
                >All</MDBListGroupItem
              >
              <MDBListGroupItem
                :class="
                  $store.state.selectedCompany == 'Samsung' ? 'active' : ''
                "
                @click="$store.state.selectedCompany = 'Samsung'"
                tag="a"
                href="#"
                ripple
                noBorder
                spacing
                action
                >Samsung</MDBListGroupItem
              >
              <MDBListGroupItem
                :class="$store.state.selectedCompany == 'Apple' ? 'active' : ''"
                @click="$store.state.selectedCompany = 'Apple'"
                tag="a"
                href="#"
                ripple
                noBorder
                spacing
                action
                >Apple</MDBListGroupItem
              >
              <MDBListGroupItem
                :class="
                  $store.state.selectedCompany == 'Huawei' ? 'active' : ''
                "
                @click="$store.state.selectedCompany = 'Huawei'"
                tag="a"
                href="#"
                ripple
                noBorder
                spacing
                action
                >Huawei</MDBListGroupItem
              >
            </MDBListGroup>
          </MDBAccordionItem>
          <MDBAccordionItem headerTitle="Likes" collapseId="collapseThree">
            <MDBListGroup light>
              <MDBListGroupItem
                :class="$store.state.selectedCompany == '' ? 'active' : ''"
                @click="$store.state.selectedCompany = ''"
                tag="a"
                href="#"
                ripple
                noBorder
                spacing
                action
                >normal</MDBListGroupItem
              >
              <MDBListGroupItem tag="a" href="#" ripple noBorder spacing action
                >most popular</MDBListGroupItem
              >
              <MDBListGroupItem tag="a" href="#" ripple noBorder spacing action
                >least popular</MDBListGroupItem
              >
            </MDBListGroup>
          </MDBAccordionItem>
        </MDBAccordion></MDBCol
      >
      <!-- accordion end -->

      <!-- product grid -->
      <MDBCol lg="9" md="8" sm="12">
        <MDBRow>
          <MDBCol
            v-for="(phone, index) in $store.getters.filteredPhones"
            :key="index"
            class=""
            lg="4"
            md="6"
            sm="12"
          >
            <MDBCard text="center">
              <MDBCardImg :src="'./' + phone.img" top alt="..." />
              <MDBCardBody>
                <MDBCardTitle> {{ phone.name }} </MDBCardTitle>
                <MDBCardText>
                  <h3 class="text-secondary">{{ phone.price + count }}</h3>
                  <MDBBadge color="danger">
                    {{ phone.likes + " likes" }}
                  </MDBBadge>
                </MDBCardText>
                <MDBBtn
                  tag="a"
                  @click="$store.commit('gg', index)"
                  class="rounded-pill"
                  href="#!"
                  color="primary"
                  >buy</MDBBtn
                >
                <MDBBtn tag="a" class="rounded-pill" href="#!" color="danger">
                  <MDBIcon icon="heart"> </MDBIcon>
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
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
  MDBAccordion,
  MDBAccordionItem,
  MDBListGroup,
  MDBListGroupItem,
  MDBIcon,
  MDBBadge,
} from "mdb-vue-ui-kit";

import { ref } from "vue";

export default {
  data() {
    return {
      count: 1,
    };
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
    MDBAccordion,
    MDBAccordionItem,
    MDBListGroup,
    MDBListGroupItem,
    MDBIcon,
    MDBBadge,
  },
  setup() {
    const activeItem = ref("collapseOne");
    return {
      activeItem,
    };
  },
};
</script>

<style>
</style>