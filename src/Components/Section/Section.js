import React, { useState } from 'react';
import Courses from '../Courses/Courses';
import './Section.css'
import Data from '../Data/data.json';
import Add from '../AddCourses/Add';
const Section = () => {
    const [enroll, setEnroll] = useState([]);
    function enrollHandler (clicked){
        const newEnroll = [...enroll,clicked];
        setEnroll(newEnroll);
    }
    return (
        <div className="bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 row">
                       {
                          Data.map(course=><Courses course={course} enrollHandler={enrollHandler}></Courses>)
                       }
                    </div>
                    <div className="col-md-4 text-center">
                        <Add enrolled={enroll}></Add>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Section;