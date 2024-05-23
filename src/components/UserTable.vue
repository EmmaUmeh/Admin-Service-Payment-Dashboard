<!-- ProductTable.vue -->
<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg pb-5">
    <div class="bg-white p-3">
      <div class="flex justify-between">
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-1 border-2 border-[#C6C2DE] p-1 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#8B83BA" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6 text-[#8B83BA]">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
            </svg>
            <span>Filter</span>
          </div>

          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="#8B83BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
              </svg>
            </div>
            <input type="text"
              class="w-full bg-[#F4F2FF] border border-[#F4F2FF] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10 pr-[] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Users by Name, Email or Date" v-model="searchTerm">
          </div>
        </div>

        <button class="bg-primary text-white px-4 p-2 rounded-md font-semibold">PAY DUES</button>
      </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-[#F4F2FF]">
        <tr>
          <th scope="col" class="p-4">
            <div class="flex items-center">
              <input id="checkbox-all-search" type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </th>
          <th scope="col" class="px-6 py-3 text-tertiary">NAME</th>
          <th scope="col" class="px-6 py-3 text-tertiary">USER STATUS</th>
          <th scope="col" class="px-6 py-3 text-tertiary">PAYMENT STATUS</th>
          <th scope="col" class="px-6 py-3 text-tertiary">AMOUNT</th>
          <th scope="col" class="px-3 py-3 flex justify-end text-tertiary"><svg class="w-6 h-6" viewBox="0 0 24 24"
              id="three-dots" xmlns="http://www.w3.org/2000/svg" fill="#000000">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g id="_20x20_three-dots--grey" data-name="20x20/three-dots--grey" transform="translate(24) rotate(90)">
                  <rect id="Rectangle" width="24" height="24" fill="none"></rect>
                  <circle id="Oval" cx="1" cy="1" r="1" transform="translate(5 11)" stroke="#000000"
                    stroke-miterlimit="10" stroke-width="0.5"></circle>
                  <circle id="Oval-2" data-name="Oval" cx="1" cy="1" r="1" transform="translate(11 11)" stroke="#000000"
                    stroke-miterlimit="10" stroke-width="0.5"></circle>
                  <circle id="Oval-3" data-name="Oval" cx="1" cy="1" r="1" transform="translate(17 11)" stroke="#8B83BA"
                    stroke-miterlimit="10" stroke-width="0.5"></circle>
                </g>
              </g>
            </svg></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in firstThreeProducts" :key="index"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="w-4 p-4">
            <div class="flex items-center gap-3">
              <input :id="'checkbox-table-search-' + index" type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label :for="'checkbox-table-search-' + index" class="sr-only">checkbox</label>
              <span>
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M7 10L12 15L17 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="#8B83BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </g>
                </svg> </span>
            </div>
          </td>
          <td>
          <th class="flex flex-col">
            <h3 class=" font-semi-bold text-tertiary whitespace-nowrap dark:text-white">{{ product.name }}</h3>
            <span class="text-xs font-normal text-tertiary">{{ product.email }}</span>
          </th>
          </td>

          <td class="px-6 py-4">
            <!-- <div class="w-8 h-8 bg-red-400 rounded-full"></div> -->
            <div class="flex flex-col gap-2">
              <div
                class="w-[32%] inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-statusbg border-2 border-statusbg text-primary dark:text-blue-500">
                <!-- <span >Badge</span> -->
                <span class="size-1.5 inline-block rounded-full bg-blue-800 dark:bg-blue-500"></span>
                <span class="text-primary">{{ product.status }}</span>
              </div>
              <div>
                <span>Last login: 14/APR/2020</span>
              </div>
            </div>
          </td>

          <td class="px-6 py-4">

            <div class="flex flex-col gap-2">
              <div
              :class="paymentStatusClass(product.paidstatus)"
                class="w-[43%] inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-statusOverduebg  text-primary dark:text-blue-500">
                <!-- <span >Badge</span> -->
                <span
                :class="circleClass(product.paidstatus)"
                 class="size-2 inline-block rounded-full bg-statusOverdueText dark:bg-blue-500"></span>
                <span
                :class="textClass(product.paidstatus)"
                class="text-statusOverdueText">{{ product.paidstatus}}</span>
              </div>
              <div>
                <span>Dued on 15/APR/2020</span>
              </div>
            </div>

          </td>
          <td class="px-6 py-4">
            <div class="flex flex-col ">
              <span class="font-semibold">${{ product.price }}</span>
              <span>USD</span>
            </div>
          </td>

          <td>
            <div class="flex px-3 py-4 justify-end gap-3">
              <span class="font-semibold">View More</span>
              <span>
                <svg class="w-6 h-6" viewBox="0 0 24 24" id="three-dots" xmlns="http://www.w3.org/2000/svg"
                  fill="#000000">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g id="_20x20_three-dots--grey" data-name="20x20/three-dots--grey"
                      transform="translate(24) rotate(90)">
                      <rect id="Rectangle" width="24" height="24" fill="none"></rect>
                      <circle id="Oval" cx="1" cy="1" r="1" transform="translate(5 11)" stroke="#000000"
                        stroke-miterlimit="10" stroke-width="0.5"></circle>
                      <circle id="Oval-2" data-name="Oval" cx="1" cy="1" r="1" transform="translate(11 11)"
                        stroke="#000000" stroke-miterlimit="10" stroke-width="0.5"></circle>
                      <circle id="Oval-3" data-name="Oval" cx="1" cy="1" r="1" transform="translate(17 11)"
                        stroke="#8B83BA" stroke-miterlimit="10" stroke-width="0.5"></circle>
                    </g>
                  </g>
                </svg>
              </span>
            </div>
          </td>
        </tr>
        <!-- date table -->
      </tbody>
    </table>
    <!-- second table -->

    <div class="">
      <table class=" text-sm  text-gray-500 dark:text-gray-400">
        <thead class="grid grid-cols-3 ml-20 text-nowrap text-xs text-gray-700 uppercase ">
          <tr class="">
            <th scope="col" class="px-6 py-3 text-tertiary">DATE</th>
            <th scope="col" class="px-6 py-3 text-tertiary">USER ACTIVITY</th>
            <th scope="col" class="px-6 py-3 text-tertiary gap-20">DETAIL</th>
          </tr>
        </thead>
        <tbody class="p-3 flex justify-center text-center">
          <tr class="py-10">
            <td class="flex justify-center text-center items-center">
              NO RECORDS FOUND
            </td>
          </tr>
          <!-- date table -->
        </tbody>
      </table>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <tbody>
        <tr v-for="(product, index) in remainingProducts" :key="index"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="w-4 p-4">
            <div class="flex items-center gap-3">
              <input :id="'checkbox-table-search-' + index" type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label :for="'checkbox-table-search-' + index" class="sr-only">checkbox</label>
              <span>
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M7 10L12 15L17 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="#8B83BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </g>
                </svg> </span>
            </div>
          </td>
          <td>
          <th class="flex flex-col">
            <h3 class=" font-semi-bold text-tertiary whitespace-nowrap dark:text-white">{{ product.name }}</h3>
            <span class="text-xs font-normal text-tertiary">{{ product.email }}</span>
          </th>
          </td>

          <td class="px-6 py-4">
            <!-- <div class="w-8 h-8 bg-red-400 rounded-full"></div> -->
            <div class="flex flex-col gap-2">
              <div
                class="w-[40%] text-center inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-statusbg border-2 border-statusbg text-primary dark:text-blue-500">
                <!-- <span >Badge</span> -->
                <span class="size-1.5 inline-block rounded-full bg-blue-800 dark:bg-blue-500"></span>
                <span class="text-primary">{{ product.status }}</span>
              </div>
              <div>
                <span>Last login: 14/APR/2020</span>
              </div>
            </div>
          </td>

          <td class="px-6 py-4">

            <div class="flex flex-col gap-2">
              <div
              :class="paymentStatusClassTwo(product.paidstatus)"
                class="w-[43%] text-center inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-statusOverduebg  text-primary dark:text-blue-500">
                <!-- <span >Badge</span> -->
                <span
                :class="circleClassTwo(product.paidstatus)"
                class="size-2 inline-block rounded-full dark:bg-blue-500"></span>
                <span
                :class="textClassTwo(product.paidstatus)"
                class="">{{ product.paidstatus}}</span>
              </div>
              <div>
                <span>Dued on 15/APR/2020</span>
              </div>
            </div>

          </td>
          <td class="px-6 py-4">
            <div class="flex flex-col ">
              <span class="font-semibold">${{ product.price }}</span>
              <span>USD</span>
            </div>
          </td>

          <td>
            <div class="flex px-3 py-4 justify-end gap-3">
              <span class="font-semibold">View More</span>
              <span>
                <svg class="w-6 h-6" viewBox="0 0 24 24" id="three-dots" xmlns="http://www.w3.org/2000/svg"
                  fill="#000000">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g id="_20x20_three-dots--grey" data-name="20x20/three-dots--grey"
                      transform="translate(24) rotate(90)">
                      <rect id="Rectangle" width="24" height="24" fill="none"></rect>
                      <circle id="Oval" cx="1" cy="1" r="1" transform="translate(5 11)" stroke="#000000"
                        stroke-miterlimit="10" stroke-width="0.5"></circle>
                      <circle id="Oval-2" data-name="Oval" cx="1" cy="1" r="1" transform="translate(11 11)"
                        stroke="#000000" stroke-miterlimit="10" stroke-width="0.5"></circle>
                      <circle id="Oval-3" data-name="Oval" cx="1" cy="1" r="1" transform="translate(17 11)"
                        stroke="#8B83BA" stroke-miterlimit="10" stroke-width="0.5"></circle>
                    </g>
                  </g>
                </svg>
              </span>
            </div>
          </td>
        </tr>
        <!-- date table -->
      </tbody>
    </table>
    <div class="flex justify-end mt-5">
      <div class="flex justify-between gap-10 items-center text-[#6E6893] font-semibold">
        <div class="flex items-center">
          <span>Rows per page: 10</span>
          <span>
            <svg class="w-5 h-5" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"
              stroke="#000000" stroke-width="0.00024000000000000003">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z"
                  fill="#6E6893"></path>
              </g>
            </svg>
          </span>
        </div>

        <div>
          1-10 of 276
        </div>

        <div class="flex items-center gap-10">
          <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M15 7L10 12L15 17" stroke="#6E6893" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"></path>
            </g>
          </svg>
          <svg class="w-7 h-6" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#6E6893">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path fill="#6E6893"
                d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z">
              </path>
            </g>
          </svg>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { BeakerIcon } from '@heroicons/vue/24/solid';
import { mapGetters } from 'vuex';

export default {
  components: { BeakerIcon },
  name: 'ProductTable',
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      searchTerm: '',
      // Other data properties remain here
    };
  },
  computed: {
    ...mapGetters(['getProducts']),
    filteredProducts() {
      if (!this.searchTerm) {
        return this.products;
      }
      const search = this.searchTerm.toLowerCase();
      return this.products.filter(product => {
        const name = product.name ? product.name.toLowerCase() : '';
        const email = product.email ? product.email.toLowerCase() : '';
        const userStatus = product.userStatus ? product.userStatus.toLowerCase() : '';
        const paymentStatus = product.paymentStatus ? product.paymentStatus.toLowerCase() : '';

        return name.includes(search) ||
          email.includes(search) ||
          userStatus.includes(search) ||
          paymentStatus.includes(search);
      });
    },

    firstThreeProducts() {
      return this.filteredProducts.slice(0, 3);
    },
    remainingProducts() {
      return this.filteredProducts.slice(3);
    }
  },

  methods: {
    paymentStatusClass(status) {
      switch (status) {
        case 'Paid':
          return 'bg-statusbgPaid text-[#53AC92] dark:text-blue-500';
          case 'Overdue':
          return 'bg-statusOverduebg text-statusOverdueText dark:text-blue-500';
        default:
          return '';
      }
    },
    circleClass(status) {
      switch (status) {
        case 'Paid':
          return 'bg-[#009C5A] dark:bg-blue-500';
          case 'Overdue':
          return 'bg-statusOverdueText dark:bg-blue-500';
          
        default:
          return '';
      }
    },
    textClass(status) {
      switch (status) {
        case 'Paid':
          return 'text-[#53AC92]';
        default:
          return '';
      }
    },

    paymentStatusClassTwo(status) {
      switch (status) {
        case 'Unpaid':
          return 'bg-[#FFECCC] text-[#53AC92] dark:text-blue-500';
          case 'Paid':
          return 'bg-statusbgPaid text-[#53AC92] dark:text-blue-500';
        default:
          return '';
      }
    },
    circleClassTwo(status) {
      switch (status) {
        case 'Unpaid':
          return 'bg-[#CE8500] dark:bg-blue-500';
          case 'Paid':
          return 'bg-[#009C5A] dark:bg-blue-500';
          
        default:
          return '';
      }
    },
    textClassTwo(status) {
      switch (status) {
        case 'Unpaid':
          return 'text-[#CE8500]';
          case 'Paid':
          return 'text-[#53AC92]';
        default:
          return '';
      }
    }
  }
};
</script>

<style scoped>
/* Add any additional styling you need */
</style>
