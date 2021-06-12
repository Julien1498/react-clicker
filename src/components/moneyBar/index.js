import React from 'react';
import { connect } from 'react-redux';

const moneyBar = ({ money }) => (
  <div className="card text-white bg-success mb-3">
    <div className="card-header">
      {`$${money.toFixed(2)}`}
    </div>
  </div>
);

const mapToProps = (state) => ({
  money: state.data.money
});

export default connect(mapToProps)(moneyBar);
