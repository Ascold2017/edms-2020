import React from 'react'
import './documentsEdit.scss'
import { Container } from '@material-ui/core'
import DocumentEdit from './components/DocumentEdit'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../store'
import { DocumentEditState, setTitle, setDescription, setFile } from './documentEdit.store'

export default function DocumentEditContainer() {
    const { id, title, description, file } = useSelector<RootState>(state => state.DocumentEdit) as DocumentEditState;
    const dispatch = useAppDispatch();
    const handleChangeTitle = (title: string) => dispatch(setTitle(title));
    const handleChangeDescription = (description: string) => dispatch(setDescription(description))
    const handleChangeFile = (base64: string) => dispatch(setFile(base64))
    const isEdit = !!id;
    return <Container>
        <DocumentEdit
            isEdit={isEdit}
            title="New document"
            name={title}
            description={description}
            filePreview={file}
            setName={handleChangeTitle}
            setDescription={handleChangeDescription}
            setFile={handleChangeFile}
            submit={() => { }}
        />
    </Container>
}