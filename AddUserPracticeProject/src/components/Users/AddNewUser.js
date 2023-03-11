import React from "react";
import { Card } from "../UI/Card";
import styles from "./AddNewUser.module.css";
import Button from "../UI/Button";

export const AddNewUser = () => {
    const addUserHandler = (e) => {
        e.preventDefault();
    };
    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" />
                <label htmlFor="age">Age(Years)</label>
                <input type="number" name="age" />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};
