<template>
  <div class="pb-6 mb-6 border-b-2 border-gray-700">
    <div
      v-for="transaction in transactions"
      :key="transaction.id"
      class="flex flex-row justify-between"
    >
      <p class="text-lg">{{ transaction.title }}</p>
      <div class="text-lg flex flex-row">
        <p v-if="transaction.amount > 0" class="text-green-800">
          Rs.{{ transaction.amount }}
        </p>
        <p v-else class="text-red-800">
          -Rs.{{ Math.abs(transaction.amount) }}
        </p>
        <span class="ml-4 cursor-pointer"
          ><i
            class="fas fa-times-circle text-red-600 transition ease-in-out duration-300 hover:text-red-800"
            @click="removeTransaction(transaction.id)"
          ></i
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Transactions",
  props: {
    transactions: Array,
  },
  methods: {
    ...mapActions(["removeTransaction"]),
  },
};
</script>
