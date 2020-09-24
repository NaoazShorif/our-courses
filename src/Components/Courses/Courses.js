import React from 'react';
import './Courses.css';
const Courses = (props) => {
    const {name,company,price,student,picture} = props.course;
    return (

        <div className="courses col-5 m-1">
            <div className="card">
                <img src={picture} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">By {company}</p>
                <pre>Price: ${price}         Students: {student}k</pre>
                </div>
              
               <button className="btn btn-success" onClick={()=>{props.enrollHandler(props.course)}}>Enroll</button>
               
             </div>
        
        </div>
    );
};

export default Courses;