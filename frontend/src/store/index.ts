import { useDispatch } from 'react-redux'
import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'
import Authorization from '../pages/Authorization/authorization.store'
import DocumentEdit from '../pages/DocumentEdit/documentEdit.store'
//
const rootReducer = combineReducers({
    Authorization,
    DocumentEdit
})
export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware()
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store