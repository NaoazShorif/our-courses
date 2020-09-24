import React from 'react';
import './Add.css'
const Add = (props) => {
    const total = props.enrolled.reduce((sum,price)=>sum+price.price,0);
    return (
        <div>
            <div className="added-detail">
                <h3>Added Courses:
                </h3>
                <p>Total course: {props.enrolled.length}</p>
                <p>Total Amount: ${total}</p>
            </div>
        </div>
    );
};

export default Add;