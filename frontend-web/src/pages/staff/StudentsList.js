import React, { useState, useEffect } from "react";
import axios from "axios";

const StudentsList = () => {
    const fetchStudentsList = () => {
        axios.get("http://localhost:4/selection").then(res => {
            console.log(res);
        });
    };

    useEffect(() => {
        fetchStudentsList();
    }, []);

    return <h1>Students</h1>
};

function getStudents(){
    return (
        <div className="getStudents">
            <StudentsList/>
        </div>
    )
}
export default getStudents;