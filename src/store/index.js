import { createStore } from 'vuex'

export default createStore({
  state: {
    min: 0,
    max: 9999999,
    selectedCompany: '',

    Phones: [


      {
        "name": "Samsung Galaxy A80",
        "img": "phones/e1.png",
        "price": 85000,
        "company": "Samsung",
        "condition": "New",
        "likes": "26"
      },
      {
        "name": "Huawei Mate 30",
        "img": "phones/e2.jpg",
        "price": 45000,
        "company": "Huawei",
        "condition": "New",
        "likes": "40"
      },
      {
        "name": "Iphone 11",
        "img": "phones/e3.jpg",
        "price": 90000,
        "company": "Apple",
        "condition": "New",
        "likes": "10"
      },
      {
        "name": "Samsung Note20",
        "img": "phones/e4.png",
        "price": 90000,
        "company": "Samsung",
        "condition": "New",
        "likes": "10"
      },
      {
        "name": "Huawei MateX",
        "img": "phones/e5.jpg",
        "price": 750000,
        "company": "Huawei",
        "condition": "New",
        "likes": "10"
      },
      {
        "name": "Iphone12",
        "img": "phones/e6.jpg",
        "price": 99500,
        "company": "Apple",
        "condition": "New",
        "likes": "10"
      },
      {
        "name": "Samsung Galaxy Fold2",
        "img": "phones/e7.jpg",
        "price": 80000,
        "company": "Samsung",
        "condition": "New",
        "likes": "10"
      },
      {
        "name": "Huawei p40",
        "img": "phones/e8.jpg",
        "price": 60000,
        "company": "Huawei",
        "condition": "New",
        "likes": "10"
      },
      {
        "name": "Iphone7",
        "img": "phones/m1.jpg",
        "price": 25000,
        "company": "Apple",
        "condition": "New",
        "likes": "10"
      },
      {
        "name": "Iphone Mini",
        "img": "phones/m2.jpg",
        "price": 16000,
        "company": "Apple",
        "condition": "New",
        "likes": "10"
      },
      {
        "name": "Samsung Galaxy S9",
        "img": "phones/m3.jpg",
        "price": 37000,
        "company": "Samsung",
        "condition": "New",
        "likes": "10"
      },
      {
        "name": "Samsung Galaxy s10",
        "img": "phones/m4.jpg",
        "price": 39500,
        "company": "Samsung",
        "condition": "New",
        "likes": "10"
      },
      {
        "name": "Iphone Xr",
        "img": "phones/m5.jpg",
        "price": 39550,
        "company": "Apple",
        "condition": "New",
        "likes": "10"
      },
      {
        "name": "Huawei Y9",
        "img": "phones/m6.jpg",
        "price": 39000,
        "company": "Huawei",
        "condition": "New",
        "likes": "10"
      },
      {
        "name": "Iphone X",
        "img": "phones/m7.jpg",
        "price": 30000,
        "company": "Apple",
        "condition": "New",
        "likes": "10"
      },
      {
        "name": "Samsung Galaxy Note8",
        "img": "phones/m8.jpeg",
        "price": 39500,
        "company": "Samsung",
        "condition": "New",
        "likes": "10"
      },
      {
        "name": "Huawei Y7",
        "img": "phones/c1.webp",
        "price": 19700,
        "company": "Huawei",
        "condition": "New",
        "likes": "10"
      },
      {
        "name": "Iphone Mini",
        "img": "phones/c2.jpg",
        "price": 15400,
        "company": "Apple",
        "condition": "New",
        "likes": "10"
      },
      {
        "name": "Samsung Galaxy J3",
        "img": "phones/c3.jpg",
        "price": 12500,
        "company": "Samsung",
        "condition": "New",
        "likes": "10"
      },
      {
        "name": "Huawei Nove5",
        "img": "phones/c4.webp",
        "price": 19999,
        "company": "Huawei",
        "condition": "New",
        "likes": "10"
      },
      {
        "name": "Iphone Se",
        "img": "phones/c5.jpg",
        "price": 11940,
        "company": "Apple",
        "condition": "New",
        "likes": "10"
      },
      {
        "name": "Samsung J7",
        "img": "phones/c6.jpg",
        "price": 18999,
        "company": "Samsung",
        "condition": "New",
        "likes": "10"
      },
      {
        "name": "Huawei P20",
        "img": "phones/c7.jpg",
        "price": 15900,
        "company": "Huawei",
        "condition": "New",
        "likes": "10"
      },
      {
        "name": "Iphone 6S+",
        "img": "phones/c8.webp",
        "price": 18999,
        "company": "Apple",
        "condition": "New",
        "likes": "10"
      }

    ],

  },
  getters: {

    filteredPhones(state) {
      return state.Phones.filter(phone => phone.price >= state.min && phone.price < state.max && phone.company.includes(state.selectedCompany).sort((a, b) => { return b.likes - a.likes }))
    }

  },
  mutations: {
    gg(state) {
      console.log(state.Phones[1].likes++)
    }
  },
  actions: {

  },
  modules: {
  }
})

