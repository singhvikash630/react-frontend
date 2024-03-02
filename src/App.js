import logo from './logo.svg';
import './App.css';
import { Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import Course from "./components/Course";
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import { Container, Row, Col } from 'react-bootstrap';
import Header from "./components/Header"
import Menus from './components/Menus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UpdateCourse from './components/UpdateCourse';

function App() {
    return <div>
        <Router>
            <ToastContainer />
            <Header />
            <Container>
                <Row>
                    <Col md={4}>
                        <Menus />
                    </Col>
                    <Col md={8}>
                        <Routes>
                            <Route path="/" Component={Home} exact />
                            <Route path="/add-course" Component={AddCourse} exact />
                            <Route path="/view-courses" Component={AllCourses} exact />
                            <Route path="/update-course" Component={UpdateCourse} exact />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </Router>
    </div>;
}

export default App;
