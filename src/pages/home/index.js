import React from 'react';
import { connect } from 'react-redux';
import MoneyBar from '../../components/moneyBar';
import Unlock from '../../components/unlock';
import Product from '../../components/product';
import Page from '..';

const Home = ({ data }) => (
  <Page>
    <MoneyBar />
    <div className="row">
      {data
        .filter((item) => item.unlock)
        .map((item) => <Product key="test" item={item} />)}
    </div>
    <Unlock />
  </Page>
);

const mapToProps = (state) => ({
  data: state.data.product
});

export default connect(mapToProps)(Home);
