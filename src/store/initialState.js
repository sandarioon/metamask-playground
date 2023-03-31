const initialUserState = {
  wallet: '',
  balances: []
};

const initTokensState = [
  {
    address: '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
    token: 'BUSD',
    description: ''
  },
  {
    address: '0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867',
    token: 'DAI',
    description: ''
  },
  {
    address: '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd',
    token: 'USDT',
    description: ''
  }
];

module.exports = {
  initialUserState,
  initTokensState
};
