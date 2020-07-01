<template>
  <div id="app" class="overflow-y-scroll bg-gray-900 w-full h-screen">
    <TransactionCard />
  </div>
</template>

<script>
import TransactionCard from "./components/TransactionCard";
export default {
  name: "App",
  components: {
    TransactionCard,
  },
};
</script>

<style></style>
