import { createAction, createReducer, createAsyncThunk, ActionCreatorWithPayload, ActionCreator, ActionCreatorWithoutPayload } from '@reduxjs/toolkit';

export interface DocumentEditState {
    id: string | null;
    title: string;
    description: string;
    file: string;
}
const initialState: DocumentEditState = {
    id: null,
    title: '',
    description: '',
    file: ''
}
export interface SetDocumentPayload {
    id?: string;
    title: string;
    description: string;
    file: string;
}
export const setDocument: ActionCreatorWithPayload<SetDocumentPayload> = createAction('documentEdit/setDocument')
export const setDocumentToZero: ActionCreatorWithoutPayload = createAction('documentEdit/setDocumentToZero')

export const setTitle: ActionCreatorWithPayload<string> = createAction('documentEdit/setTitle')
export const setDescription: ActionCreatorWithPayload<string> = createAction('documentEdit/setDescription')
export const setFile: ActionCreatorWithPayload<string> = createAction('documentEdit/setFile')

export default createReducer<DocumentEditState>(initialState, {
    [setDocument.type]: (state, action) => ({ ...state, ...action.payload }),
    [setDocumentToZero.type]: () => initialState,
    [setTitle.type]: (state, action) => ({ ...state, title: action.payload }),
    [setDescription.type]: (state, action) => ({ ...state, description: action.payload }),
    [setFile.type]: (state, action) => ({ ...state, file: action.payload }),

})