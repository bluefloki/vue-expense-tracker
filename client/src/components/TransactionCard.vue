<template>
  <div class="center mx-auto">
    <div
      class="bg-white p-6 container mx-auto w-1/5 rounded relative"
      style="top:15vh;"
    >
      <h2 class="text-3xl font-bold text-center mb-6">Expense Tracker</h2>
      <div
        class="flex flex-row justify-between items-baseline pb-6 mb-6 border-b-2 border-gray-700"
      >
        <div class="flex flex-col">
          <div>
            <h3 class="text-lg font-semibold text-green-800">
              Income: Rs.{{ income }}
            </h3>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-red-800">
              Expense: Rs.{{ expense }}
            </h3>
          </div>
        </div>
        <div>
          <h2 class="text-xl font-semibold">Balance</h2>
          <p class="text-lg font-semibold">Rs.{{ balance }}</p>
        </div>
      </div>
      <Transactions :transactions="transactions" />
      <TransactionForm />
    </div>
  </div>
</template>

<script>
import Transactions from "./Transactions";
import TransactionForm from "./TransactionForm";

export default {
  name: "TransactionCard",
  components: {
    Transactions,
    TransactionForm,
  },
  computed: {
    transactions() {
      return this.$store.getters.getTransactions;
    },
    amounts() {
      return this.transactions.map((t) => t.amount);
    },
    income() {
      return Math.abs(
        this.amounts
          .filter((amount) => amount > 0)
          .reduce((acc, item) => (acc += item), 0)
      );
    },
    expense() {
      return Math.abs(
        this.amounts
          .filter((item) => item < 0)
          .reduce((acc, item) => (acc += item), 0)
      );
    },
    balance() {
      return this.income - this.expense;
    },
  },
  created() {
    this.$store.dispatch("fetchTransactions");
    this.transactions.forEach((t) => {
      if (t.amount > 0) return (this.income += t.amount);
      else return (this.expense += Math.abs(t.amount));
    });
  },
};
</script>

<style></style>
