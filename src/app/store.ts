import {
  combineReducers,
  configureStore,
  ConfigureStoreOptions
} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { rootReducer } from './rootReducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(rootReducer)
)

export const createStore = (
  options?: ConfigureStoreOptions['preloadedState'] | undefined
) => {
  return configureStore({
    reducer: persistedReducer,
    ...options,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
  })
}

export const store = createStore()
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
