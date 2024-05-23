<template>
  <div class="flex justify-between flex-col mb-5">
      <div class="flex justify-between">
        <div class="flex gap-10">
          <button
            :class="{ 'border-b-primary border-b-[4px] w-10': selectedTab!== 'paid' && selectedTab!== 'unpaid' && selectedTab!== 'overdue' }"
            @click="handleTabClick('all')">All</button>
          <button
          :class="{ 'border-b-primary border-b-[4px] w-10': selectedTab === 'paid' }"
          @click="togglePaidView()">Paid</button>
          <button 
          :class="{ 'border-b-primary border-b-[4px] w-20': selectedTab === 'unpaid' }"
          @click="toggleUnpaidView()">Unpaid</button>
          <button
          :class="{ 'border-b-emerald-700 border-b-[4px] w-10': selectedTab === 'overdue' }"
          @click="selectTab('overdue')">Overdue</button>
        </div>
        <div class="">
          Total payable amount: <span class="text-primary font-semibold ">$9000</span> USD
        </div>
      </div>

      <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-7">
    <!-- <hr /> -->
    <UserTable v-show="selectedTab === 'all'" :products="filteredProducts"/>
    <PaidUserTable v-if="selectedTab === 'paid'" :paidusers="filteredUser"/>
    <Unpaid v-if="selectedTab === 'unpaid'" :unpaidusers="filteredUnpaidUser"/>
    <Overdue v-if="selectedTab === 'overdue'" :overdueusers="filteredoverdueUser"/>
  </div>
</template>

<script>
import UserTable from './UserTable.vue';
import PaidUserTable from './PaidUserTable.vue';
import Unpaid from './Unpaid.vue';
import Overdue from './Overdue.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'DashboardHeading',
  components: {
    UserTable,
    PaidUserTable,
    Unpaid,
    Overdue,
  },
  data() {
    return {
      selectedTab: 'all',
      showPaidUsers: false,
    };
  },
  computed: {
  ...mapGetters(['getProducts']),
    filteredProducts() {
      if (this.selectedTab === 'all') {
        return this.getProducts;
      }
      if (this.selectedTab === 'paid') {
        return this.getProducts;
      }
      return this.getProducts.filter(product => product.status === this.selectedTab);
    },

    ...mapGetters(['getPaidUser']),
    filteredUser() {
      if (this.selectedTab === 'paid') {
        return this.getPaidUser;
      }
      return this.getPaidUser.filter(paiduser => paiduser.status === this.selectedTab);
    },

    ...mapGetters(['getUnPaidUser']),
    filteredUnpaidUser() {
      if (this.selectedTab === 'unpaid') {
        return this.getUnPaidUser;
      }
      return this.getUnPaidUser.filter(unpaiduser => unpaiduser.status === this.selectedTab);
    },

    ...mapGetters(['getUnOverdueUser']),
    filteredoverdueUser() {
      if (this.selectedTab === 'overdue') {
        return this.getUnOverdueUser;
      }
      return this.getUnOverdueUser.filter(overdueuser => overdueuser.status === this.selectedTab);
    },

  },
  methods: {
    handleTabClick(tabName) {
      this.selectedTab = tabName;
    },
    togglePaidView() {
      this.selectedTab = 'paid'; // Directly set the selectedTab to 'paid' to show PaidUserTable
    },
    toggleUnpaidView() {
      this.selectedTab = 'unpaid'; // Directly set the selectedTab to 'paid' to show PaidUserTable
    },
    selectTab(tab) {
      this.selectedTab = tab;
    },
  },
  created() {
    this.selectTab('all');
  }
};
</script>
