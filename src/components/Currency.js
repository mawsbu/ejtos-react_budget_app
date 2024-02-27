import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) =>  {
    const [currency, setCurrency] = useState('');
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
        const currencytNew = {
                value: event.target.value,
            };
        dispatch({
                type: 'CHG_CURRENCY',
                payload: currencytNew
            });
    }
    

    return (
    <div className='alert alert-success'>
        <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="currencySelector">Currency</label>
            <select className="form-select form-select-sm" id="currencySelector" onChange={handleCurrencyChange}>
                <option defaultValue value="£" name="pound"> £ Pound</option>
                <option value="$" name="dollar"> $ Dollar</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
            </select>
        </div>
    </div>
        );
};
export default Currency;