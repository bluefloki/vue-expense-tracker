<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="flex flex-row mb-6">
        <div class="mr-3">
          <label for="title" class="label">Title</label>
          <input type="text" name="title" class="inputField" v-model="title" />
        </div>
        <div>
          <label for="amount" class="label">Amount</label>
          <input
            type="number"
            name="amount"
            class="inputField"
            v-model="amount"
          />
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="btn">
          Add<i class="fas fa-plus ml-2"></i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TransactionForm",
  data() {
    return {
      title: "",
      amount: null,
    };
  },
  methods: {
    ...mapActions(["addTransaction"]),
    handleSubmit() {
      const data = { title: this.title, amount: this.amount };
      this.addTransaction(data);
      this.title = "";
      this.amount = null;
    },
  },
};
</script>
