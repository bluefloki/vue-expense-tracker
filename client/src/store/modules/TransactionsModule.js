import axios from "axios";
const endpoint = "http://localhost:5000/api/v1/transactions";

const state = {
  transactions: [],
};

const getters = {
  getTransactions: (state) => state.transactions,
};

const actions = {
  async fetchTransactions({ commit }) {
    try {
      const res = await axios.get(endpoint);
      commit("_fetchTransactions", res.data);
    } catch (error) {
      console.log(error);
    }
  },
  async addTransaction({ commit }, data) {
    try {
      const res = await axios.post(endpoint, data);
      commit("_addTransaction", res.data);
    } catch (error) {
      console.log(error);
    }
  },
  async removeTransaction({ commit }, id) {
    try {
      await axios.delete(`${endpoint}/${id}`);
      commit("_removeTransaction", id);
    } catch (error) {
      console.log(error);
    }
  },
  getIncome({ commit }) {
    commit("_getIncome");
  },
};

const mutations = {
  _fetchTransactions: (state, transactions) =>
    (state.transactions = transactions),
  _addTransaction: (state, transaction) => state.transactions.push(transaction),
  _removeTransaction: (state, id) =>
    (state.transactions = state.transactions.filter(
      (transaction) => transaction.id !== id
    )),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
