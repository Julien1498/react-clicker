import React, { useState } from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import { removeMoney, unlockProduct } from '../../actions/data';

const Unlock = ({ data, money }) => {
  const { dispatch } = store;
  const getLastToUnlock = () => (
    (data.find((el) => (!el.unlock)) || 'null')
  );
  const [last, setLast] = useState(getLastToUnlock);
  const handleUnlock = () => {
    if (money >= last.unlockPricing) {
      dispatch(unlockProduct());
      dispatch(removeMoney(last.unlockPricing));
    }
    setLast(getLastToUnlock());
  };

  return (
    <button type="button" className="btn btn-warning btn-lg btn-block" onClick={handleUnlock}>
      {`Unlock next product for $${last.unlockPricing}`}
    </button>
  );
};

const mapToProps = (state) => ({
  data: state.data.product,
  money: state.data.money
});

export default connect(mapToProps)(Unlock);
