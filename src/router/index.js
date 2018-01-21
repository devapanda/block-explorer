import * as thunks from './thunks';

import Start from '../components/Start';
import Block from '../components/Block';
import Account from '../components/Account';

export const START = 'router/START';
export const ACCOUNT_DETAIL = 'router/ACCOUNT_DETAIL';
export const BLOCKS = 'router/BLOCKS';
export const BLOCK_DETAIL = 'router/BLOCK_DETAIL';

export default {
  [START]: {
    path: '/',
    component: Start,
    thunk: thunks.fetchBlocks,
  },
  [ACCOUNT_DETAIL]: {
    path: '/accounts/:address',
    component: Account,
    thunk: thunks.fetchAccount,
  },
  [BLOCKS]: {
    path: '/blocks',
    component: Start,
    thunk: thunks.fetchBlocks,
  },
  [BLOCK_DETAIL]: {
    path: '/blocks/:blockNumber',
    component: Block,
    thunk: thunks.fetchSingleBlock,
  },
}
