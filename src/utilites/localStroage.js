const getValue = () => {
  const LocalJsonValue = localStorage.getItem("cart");
  if (LocalJsonValue) {
    return JSON.parse(LocalJsonValue);
  }
  return [];
};

const setValue = (id) => {
  const cart = getValue();
  cart.push(id);
  const localStringifyValue = JSON.stringify(cart);
  localStorage.setItem("cart", localStringifyValue);
};

export { setValue };
