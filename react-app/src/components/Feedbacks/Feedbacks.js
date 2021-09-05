import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Feedbacks.module.scss';
import { get, add } from '../../data/feedbacks';

const checkFields = (el) => {
    if (!el.value) {
        el.classList.add(`${styles.emptyField}`);
    }
}

const clearErrorBorders = () => {
    const errorFields = document.querySelectorAll(`.${styles.emptyField}`);
    for (let i = 0; i < errorFields.length; i++) {
        errorFields[i].classList.remove(`${styles.emptyField}`);
    }
}

function Feedbacks() {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        get().then(el => {
            setFeedbacks(el);
        })
    }, []);

    const onSubmitHandler = (evt) => {
        evt.preventDefault();
        clearErrorBorders();
        const nameField = evt.target.elements.name;
        const feedbackField = evt.target.elements.feedback;
        checkFields(nameField);
        checkFields(feedbackField);
        if (nameField.value && feedbackField.value) {
            const data = new FormData(evt.target);
            const name = data.get("name");
            const feedback = data.get("feedback");
            const newFeedback = {
                name: name,
                feedback: feedback
            };
            setFeedbacks([newFeedback, ...feedbacks]);
            add(newFeedback).then(() => {
                nameField.value = '';
                feedbackField.value = '';
            })
        }
    };

    return (
        <div className={styles.feedbacks}>
            <h1 data-key="feedbacks">Feedbacks</h1>
            <form onSubmit={onSubmitHandler}>
                <label data-key='name'>Your name:</label>
                <input name="name" onKeyDown={clearErrorBorders} />
                <label data-key='yfeedback'>Your feedback:</label>
                <textarea name="feedback" onKeyDown={clearErrorBorders} />
                <button type="submit" data-key='add'>Add</button>
            </form>
            {(feedbacks.length > 0) ? <h3>Recent feedbacks</h3> : ''}
            {feedbacks.map((item, index) => {
                const { name, feedback } = item;
                return <div key={index}>
                    <p><span>{name}:</span> {feedback}</p>
                </div>
            })}
        </div>
    )
}

export default Feedbacks;