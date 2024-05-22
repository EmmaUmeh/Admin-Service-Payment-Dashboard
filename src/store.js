// src/store.js
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      products: [
        { name: 'Justin Septimus', email: 'example@email.com', status: 'Active', paidstatus: 'Paid', price: 200 },
        { name: 'Anika Rhiel Madsen', email: 'example@email.com', status: 'Active', paidstatus: 'Paid', price: 300 },
      ],

      paidusers: [
        { name: 'Justin Septimus', email: 'example@email.com', status: 'Active', paidstatus: 'Paid', price: 200 },
        { name: 'Miracle Varacco', email: 'example@email.com', status: 'Active', paidstatus: 'Paid', price: 300 },
        { name: 'Mira Herwitz', email: 'example@email.com', status: 'Inactive', paidstatus: 'Paid', price: 300 },
        { name: 'Jaxson Siphron', email: 'example@email.com', status: 'Inactive', paidstatus: 'Paid', price: 300 },
        { name: 'Lincoln Levin', email: 'example@email.com', status: 'Active', paidstatus: 'Paid', price: 300 },
        { name: 'Cheyenne Ekstrom Bothman', email: 'example@email.com', status: 'Active', paidstatus: 'Paid', price: 300 },
      ],

      unpaidusers: [
        { name: 'Justin Septimus', email: 'example@email.com', status: 'Active', paidstatus: 'Unpaid', price: 200 },
        { name: 'Miracle Varacco', email: 'example@email.com', status: 'Active', paidstatus: 'Unpaid', price: 200 },
        { name: 'Mira Herwitz', email: 'example@email.com', status: 'Inactive', paidstatus: 'Unpaid', price: 200 },
      ],

      
      overdueusers: [
        { name: 'Justin Septimus', email: 'example@email.com', status: 'Active', paidstatus: 'overdue', price: 200 },
      ]
    };
  },
  mutations: {
    // Define mutations if needed
  },
  actions: {
    // Define actions if needed
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getPaidUser(state) {
      return state.paidusers;
    },
    getUnPaidUser(state) {
      return state.unpaidusers;
    },
    getUnOverdueUser(state) {
      return state.overdueusers;
    }
  }
});

export default store;
