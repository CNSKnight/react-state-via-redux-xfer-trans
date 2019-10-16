import initData from "../data/transactions.json";

// describe our store
const transInit = {
  transactions: initData.data || []
};

export default (state = transInit, action) => {
  switch (action.type) {
    case "TRANS_CANCEL":
    case "TRANS_LISTALL":
      return state;
    case "TRANS_SELECT":
      // tbc
      break;
    case "TRANS_ADD":
      const transactions = [...state.transactions];
      transactions.unshift({
        amount: (+action.data.amount).toFixed(2),
        categoryCode: "red",
        merchant: action.data.toAcct,
        transactionDate: new Date().getTime(),
        transactionType: "Transfer"
      });
      return { transactions };
    default:
      return state;
  }
};
