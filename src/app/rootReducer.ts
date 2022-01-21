// libs
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

// reducers
import counterReducer from 'features/counter/counterSlice'

const history = createBrowserHistory()

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['token']
}

export const rootReducer = {
  // user: persistReducer(userPersistConfig, userReducer),

  router: connectRouter(history),
  counter: counterReducer
}
