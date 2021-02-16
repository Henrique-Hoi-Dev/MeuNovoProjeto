import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'CONTROLE_FINANCEIRO',
      storage,
      whitelist: ['auth', 'user', 'product'],
    },
    reducers
  );

  return persistedReducer;
};
