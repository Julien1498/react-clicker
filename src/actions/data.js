export const actionTypes = {
  ADD_MONEY: 'ADD_MONEY',
  REMOVE_MONEY: 'REMOVE_MONEY',
  UNLOCK_PRODUCT: 'UNLOCK_PRODUCT',
  UNLOCK_MANAGER: 'UNLOCK_MANAGER'
};

export const addMoney = (money) => ({
  type: actionTypes.ADD_MONEY,
  money
});

export const removeMoney = (money) => ({
  type: actionTypes.REMOVE_MONEY,
  money
});

export const unlockProduct = () => ({
  type: actionTypes.UNLOCK_PRODUCT
});
