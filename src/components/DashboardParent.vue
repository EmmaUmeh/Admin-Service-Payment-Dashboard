<!-- ParentComponent.vue -->
<template>
    <div>
      <div class="mb-5">
        <DashboardHeading @tab-selected="handleTabSelected" />
      </div>
      <UserTable :products="filteredProducts" />
    </div>
  </template>
  
  <script>
  import DashboardHeading from './DashboardHeading.vue';
  import UserTable from './UserTable.vue';
  import { mapGetters } from 'vuex';
  
  export default {
    components: {
      DashboardHeading,
      UserTable
    },
    data() {
      return {
        selectedTab: 'all'
      };
    },
    computed: {
      ...mapGetters(['getProducts']),
      filteredProducts() {
        if (this.selectedTab === 'all') {
          return this.getProducts;
        }
        return this.getProducts.filter(product => product.status === this.selectedTab);
      }
    },
    methods: {
      handleTabSelected(tab) {
        this.selectedTab = tab;
      }
    }
  };
  </script>
  