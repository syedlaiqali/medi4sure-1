export const productReducer = (
  state = { products: [{ name: "Shirt", price: "500" }] },
  action
) => {
  if (action.type === "ADD_PRODUCT") {
    return {
      ...state,
      products: [...action.data],
    };
  }
  return state;
};
