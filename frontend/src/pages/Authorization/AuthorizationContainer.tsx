import React, { useState } from 'react'
import Authorization from './components/Authorization'
import { useAppDispatch } from '../../store';
import { SignIn } from './authorization.store';

export default function AuthorizationContainer() {
    const [phone, setPhone] = useState('');
    const dispatch = useAppDispatch()
    
    const handleSubmit = async () => {
        await dispatch(SignIn({ phone }))
        setPhone('')
    }
    return <Authorization phone={phone} onChangePhone={setPhone} onSubmit={handleSubmit} />
}