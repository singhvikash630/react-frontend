import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AddCourse = () => {
  useEffect(() => {
    document.title = "Add Course || Learncodewith Vikash"
  }, [])

  const [course, setCourse] = useState({});
  //Form handler function

  const handleForm = (e) => {
    console.log(course)
    postDataToServer(course);
    e.preventDefault();
  }

  //creating function to post data on server
  const postDataToServer = (data) => {
    axios.post(`${base_url}/course`, data).then((response) => {
      console.log(response)
      console.log("success")
      toast.success("Course added successfully")
      setCourse({id:" ", title:" ", description:" "})
    }, (error) => {
      console.error(error);
      console.log("error");
      toast.error("Error ! Somthing went wrong")
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
          <Button type="submit" color="success">Add Course</Button>
          <Button type="reset" color="warning" onClick={() => {
            setCourse({});
          }}>Clear</Button>
        </Container>

      </Form>
    </Fragment>
  )
}
export default AddCourse;