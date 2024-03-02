import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menus = () => {
    return (
        <ListGroup>
            <Link tag="a" to="/" action>Home</Link>
            <Link tag="a" to="/add-course" action>Add Course</Link>
            <Link tag="a" to="/view-courses" action>View Courses</Link>
            <Link tag="a" to="#!" action>About</Link>
            <Link tag="a" to="#!" action>Contacts</Link>
        </ListGroup>
        
    )
}
export default Menus;