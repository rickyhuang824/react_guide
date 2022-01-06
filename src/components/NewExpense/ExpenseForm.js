import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [userInputs, setUserInputs] = useState({
        title: "",
        amount: "",
        date: "",
    });

    const titleChangeHandler = (e) => {
        setUserInputs((prev) => {
            return { ...prev, title: e.target.value };
        });
    };

    const amountChangeHandler = (e) => {
        setUserInputs((prev) => {
            return { ...prev, amount: e.target.value };
        });
    };

    const dateChangeHandler = (e) => {
        setUserInputs((prev) => {
            return { ...prev, date: e.target.value };
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        userInputs.date = new Date(userInputs.date);
        props.onSaveExpenseData(userInputs)
        setUserInputs({
            title: "",
            amount: "",
            date: "",
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={userInputs.title}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={userInputs.amount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="0.01"
                        value={userInputs.date}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
