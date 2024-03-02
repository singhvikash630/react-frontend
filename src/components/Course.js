import axios from "axios";
import React, { Fragment } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardFooter, Button, Container } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import UpdateCourse from "./UpdateCourse";



const Course = ({ course, update }) => {

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/course/${id}`).then((respose) => {
            toast.success("Course deleted")
            update(id);
        }, (error) => {
            toast.error("Course not deleted")
        })
    }


    let navigate = useNavigate();
    const routeChange = (course) => {      
        let path = `/update-course`;
        navigate(path);
    }



    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={() => {
                        deleteCourse(course.id);
                    }}>Delete</Button>
                    <Button color="warning ml-3" onClick={() => {
                        routeChange(course)
                    }}>Update</Button>
                </Container>
            </CardBody>
        </Card>
    );
}
export default Course;