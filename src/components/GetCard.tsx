import React, { useState } from 'react';
import { getValueByKey } from '../services/api';
import '../App.css';
import InputField from './InputField';

const GetCard = (): JSX.Element => {
    const [loading, setLoading] = useState(false);
    const [key, setKey] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setError] = useState(false);

    const handleGet = async () => {
        setLoading(true);
        setMessage('');
        setError(false);
        try {
            const response = await getValueByKey(key);
            if (response.status === 200) {
                setMessage(`The value of ${response.key} is ${response.value}`);
            } else {
                setMessage(response.message);
                setError(true);
            }
        } catch (error) {
            setMessage('Error fetching the value');
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='operation-container'>
            <h2>GET Operation</h2>
            <InputField
                id='get-key'
                label='Key'
                placeholder='Enter Key'
                value={key}
                onChange={setKey}
            />
            <button
                onClick={handleGet}
                className='action-button'
                disabled={!key || loading}
            >
                GET
            </button>
            {message && <p className={isError ? 'error-message' : 'success-message'}>{message}</p>}
        </div>
    );
};

export default GetCard;
