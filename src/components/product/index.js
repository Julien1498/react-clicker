import React, { useState } from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import { addMoney, removeMoney } from '../../actions/data';

const Product = ({ item, money }) => {
  const [price, setPrice] = useState(item.price);
  const [unitCost, setUnitCost] = useState(item.unitCost);
  const { name } = item;
  const { dispatch } = store;

  const handleGain = () => {
    dispatch(addMoney(price));
  };

  const handleUpgrade = () => {
    if (money >= unitCost) {
      dispatch(removeMoney(unitCost));
      setPrice(price * 1.2);
      setUnitCost(unitCost * 1.5);
    }
  };
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-header">{name}</div>
        <div className="card-body">
          <p className="card-text">{price.toFixed(2)}</p>
          <button type="button" className="btn btn-primary" onClick={handleUpgrade}>
            {`Upgrade for $${unitCost.toFixed(2)}`}
          </button>
          <button type="button" className="btn btn-primary" onClick={handleGain}>MAKE MONEY</button>
        </div>
      </div>
    </div>
  );
};

const mapToProps = (state) => ({
  money: state.data.money
});

export default connect(mapToProps)(Product);
