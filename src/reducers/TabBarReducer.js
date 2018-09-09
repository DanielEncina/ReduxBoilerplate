export default (state = 0, action) => {
  switch (action.type) {
    case 'seletedTab':
      return action.payload;
    default:
      return state;
  }
};
