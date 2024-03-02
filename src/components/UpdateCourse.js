import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const UpdateCourse = () => {
    useEffect(() => {
        document.title = "Update Course || Learncodewith Vikash"
    }, [])

    const [course, setCourse] = useState([]);

    const handleForm = (course) => {
        console.log(course)
        postDataToServer(course);
        course.preventDefault();
    }

    const postDataToServer = (course) => {
        axios.put(`${base_url}/course/${course.id}`, course).then((response) => {
            console.log(course)
            toast.success("Updated successfully")
        }, (error) => {
            toast.error("Updated unsuccessful")
        })
    }

    return (

        <Fragment>
            <h1 className="text-center my-3">Fill Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Course ID</label>
                    <input
                        type="text"
                        placeholder="Enter here"
                        name="userId"
                        id="id"
                        onChange={(e) => {
                            setCourse({ ...course, id: e.target.value })
                        }} />
                </FormGroup>

                <FormGroup>
                    <label for="title">Course Title</label>
                    <input type="text" placeholder="Enter title here" name="title" id="title"
                        onChange={(e) => {
                            setCourse({ ...course, title: e.target.value })
                        }
                        } />
                </FormGroup>

                <FormGroup>
                    <label for="description">Course Desc</label>
                    <input type="textarea" placeholder="Enter Desc here" name="description" id="description" style={{ height: 150 }}
                        onChange={(e) => {
                            setCourse({ ...course, description: e.target.value })
                        }} />
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success">Update</Button>
                    <Button type="reset" color="warning" onClick={() => {
                        setCourse({});
                    }}>Clear</Button>
                </Container>

            </Form>
        </Fragment>


    )
}
export default UpdateCourse;