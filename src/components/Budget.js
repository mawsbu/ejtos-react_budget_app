import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = (props) =>  {
    const { budget } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const { currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget.value);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        const budgetNew = {
                value: event.target.value,
            };
        dispatch({
                type: 'SET_BUDGET',
                payload: budgetNew
            });
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency.value}{props.value}</span>
<input type="number" step="10" value={budget.value} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;