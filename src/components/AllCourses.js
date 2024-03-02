import React, { useEffect, useState } from "react";
import Course from "./Course";
import { Button } from "react-bootstrap";
import base_url from "../api/bootapi";
import axios, { Axios } from "axios";
import { toast } from "react-toastify";

const AllCourse = () => {

    useEffect(() => {
        document.title = "All Courses || Learncodewith Vikash";
    }, [])

    //function to call server
    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/course`).then(
            (response) => {
                console.log(response.data);
                setCourses(response.data)
                toast.success("courses has been loaded", { position: "bottom-center" })
            }, (error) => {
                console.log(error)
                toast.error("something went wrong!", { position: "bottom-center" })
            }
        )
    }

    //calling loading course function
    useEffect(() => {
        getAllCoursesFromServer();
    }, [])

    const [courses, setCourses] = useState([]);

    const updateCourses = (id) => {
        setCourses(courses.filter((course) => course.id != id));
    };

    return (
        <div>
            <h1>All courses</h1>
            <p>List of Courses are as follows</p>
            {
                courses.length > 0 ? courses.map((item) => (
                    <Course key={item.id} course={item} update={updateCourses} />
                )) : "No Courses"
            }
        </div>
    )
}
export default AllCourse;