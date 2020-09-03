import React, { useState } from 'react'
import './index.scss'

interface DocumentUploaderProps {
    onChange: (base64: string) => void,
    value: string | null;
}
export default function DocumentUploader({ value, onChange }: DocumentUploaderProps) {
    const [file, setFile] = useState<File | null>(null)
    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const inputFile = event.target.files[0];
        setFile(inputFile);
        try {
            onChange(await toBase64(inputFile));
        } catch (e) {
            console.error(e)
        }

    }

    const toBase64 = (file: File) => new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
    });

    return <label className="document-uploader">
        <input type="file" accept="application/pdf" onChange={handleChange} style={{ display: 'none'}}></input>
        <span className="document-uploader__title">{ file ? file.name : 'Upload PDF file of a document' }</span>
    </label>

}