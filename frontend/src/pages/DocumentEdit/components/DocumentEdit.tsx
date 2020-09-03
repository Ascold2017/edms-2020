import React from 'react'
import TextField from '../../../components/TextField'
import Button from '@material-ui/core/Button'
import DocumentUploader from '../../../components/DocumentUploader'
const PDFViewer = require('pdf-viewer-reactjs')

interface DocumentEditProps {
    isEdit: boolean;
    title: string;
    name: string;
    description: string;
    filePreview: string;

    setName: (value: string) => void;
    setDescription: (value: string) => void;
    setFile: (value: string) => void;
    submit: () => void;
}
export default function DocumentEdit({ isEdit, title, name, description, filePreview, setName, setDescription, setFile, submit }: DocumentEditProps) {
    const onSubmit = (e: React.MouseEvent | React.FormEvent) => {
        e.preventDefault()
        submit()
    }
    const [,base64] = filePreview.split('data:application/pdf;base64,');

    return (
        <div className="document-edit">
            <div className="document-edit__top">
                <h1 className="document-edit__title">{title}</h1>
                <Button onClick={onSubmit} color="primary">{isEdit ? 'Save changes' : 'Create and publish'}</Button>
            </div>

            <form noValidate autoComplete="off" onSubmit={onSubmit}>
                <TextField
                    id="document-edit-name"
                    label="Document name"
                    value={name}
                    onChangeText={setName}
                    className="document-edit__input"
                />
                <TextField
                    id="document-edit-description"
                    label="Document description"
                    value={description}
                    onChangeText={setDescription}
                    isMultiline
                    className="document-edit__input"
                />
                <DocumentUploader value={filePreview} onChange={setFile} />
                {filePreview && <PDFViewer document={{ base64 }} />}

            </form>
        </div>
    )
}