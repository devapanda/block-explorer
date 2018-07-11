import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as selectors from '@/reducers/selectors';

import DetailList from './DetailList';
import DetailListItem from './DetailListItem';

const mapStateToProps = (state) => ({
  transaction: selectors.getCurrentTransactionForDisplay(state),
});

const Transaction = ({ transaction }) => (
  <div className='mix-content-wrapper'>
    <h2 className='content-block__title list-title'>Transaction Details</h2>
    <DetailList>
      <DetailListItem name='Hash' value={transaction.hash} />
      <DetailListItem
        name='Block Number'
        value={<Link to={`/blocks/${transaction.blockNumber}`}>{transaction.blockNumber}</Link>} />
      <DetailListItem name='Amount' value={`${transaction.valueInEther} Ether`} />
      <DetailListItem
        name='Gas Price'
        value={`${transaction.gasPriceInGwei} Gwei`}
      />
      <DetailListItem
        name='Sender'
        value={<Link to={`/accounts/${transaction.from}`}>{transaction.from}</Link>}
      />
      <DetailListItem
        name='Receiver'
        value={<Link to={`/accounts/${transaction.to}`}>{transaction.to}</Link>}
      />
    </DetailList>
  </div>
);

Transaction.propTypes = {
  transaction: PropTypes.object,
};

export default connect(mapStateToProps)(Transaction);
