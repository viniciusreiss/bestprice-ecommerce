import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cartReducer from './reducers/cart'

const persistConfig = {
  key: 'root',
  storage,
}

const reducers = combineReducers({
  cart: cartReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, composeWithDevTools())
const persistor = persistStore(store)


export { store, persistor }