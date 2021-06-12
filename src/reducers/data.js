import { actionTypes } from '../actions/data';

const initialState = {
  product: [{
    unlock: true,
    unlockPricing: 0,
    number: 1,
    name: 'Geox',
    price: 2,
    unitCost: 2.65
  }, {
    unlock: false,
    unlockPricing: 2000,
    number: 1,
    name: 'Puma',
    price: 70,
    unitCost: 120
  }, {
    unlock: false,
    unlockPricing: 100000,
    number: 1,
    name: 'Adidas',
    price: 1000,
    unitCost: 160000
  }, {
    unlock: false,
    unlockPricing: 500000,
    number: 1,
    name: 'Nike',
    price: 5000,
    unitCost: 190000
  }],
  money: 1000000
};

const addMoney = (state, action) => ({
  product: state.product,
  money: state.money + action.money
});

const removeMoney = (state, action) => ({
  product: state.product,
  money: state.money - action.money
});

const unlockProduct = (state) => {
  const stateUpdated = [...state.product];
  const index = stateUpdated.findIndex((item) => !item.unlock);
  stateUpdated[index].unlock = true;
  return {
    product: stateUpdated,
    money: state.money
  };
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MONEY:
      return addMoney(state, action);
    case actionTypes.REMOVE_MONEY:
      return removeMoney(state, action);
    case actionTypes.UNLOCK_PRODUCT:
      return unlockProduct(state);
    default:
      return state;
  }
};

export default data;
