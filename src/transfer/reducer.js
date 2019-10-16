const user = {
  fromLabel: "Free Checking(4692) - Available ",
  toAcct: "",
  amount: null,
  balance: 5824.76
};

const queueInit = () => ({ data: { ...user }, phase: null });

// Transfer Form Reducer
// - could also have been component-specific local state
// - but then we're getting persistent form state accross reloads
export default (state, action) => {
  let queue;
  switch (action.type) {
    case "XFER_QUEUE":
      queue = { ...state };
      queue.data[action.data.name] = action.data.value;
      // nts: ?? (nullish coalescing operator) could be used w/the @babel/plugin-proposal-nullish-coalescing-operator
      // but that would require a eg Gatsby, Next.js wrapper for wp/babel config, or some cumbersome override implementation
      queue.phase = queue.data.toAcct || queue.data.amount ? "editing" : null;
      return queue;
    case "XFER_SUBMIT":
      queue = { ...state };
      queue.phase = "submit";
      return queue;
    case "XFER_XFER":
      user.balance = +(user.balance -= state.data.amount).toFixed(2);
      return queueInit();
    case "XFER_CLEAR":
      return queueInit();
    default:
      return state ? state : queueInit(); // cannot return undefined
  }
};
