import React, { useState } from 'react';
import { setValueByKey } from '../services/api';
import '../App.css';
import InputField from './InputField';

const SetCard = (): JSX.Element => {
    const [loading, setLoading] = useState(false);
    const [key, setKey] = useState('');
    const [value, setValue] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setError] = useState(false);

    const handleSet = async () => {
        setLoading(true);
        setMessage('');
        setError(false);
        try {
            const response = await setValueByKey(key, value);
            setMessage(response.message);
            if (response.status !== 200) {
                setError(true);
            }
        } catch (error) {
            setMessage('Error setting the value');
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='operation-container set-operation'>
            <h2>SET Operation</h2>
            <div className='input-group'>
                <InputField
                    id='set-key'
                    label='Key'
                    placeholder='Enter Key'
                    value={key}
                    onChange={setKey}
                />
                <InputField
                    id='set-value'
                    label='Value'
                    placeholder='Enter Value'
                    value={value}
                    onChange={setValue}
                />
            </div>
            <button
                onClick={handleSet}
                className='action-button'
                disabled={!key || !value || loading}
            >
                SET
            </button>
            {message && <p className={isError ? 'error-message' : 'success-message'}>{message}</p>}
        </div>
    );
};

export default SetCard;
