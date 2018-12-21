export default (state = 36, action) => {
  switch (action.type) {
    case 'INCREMENT_POINTS':
      return state + action.n;
    default: return state;
  }
};
