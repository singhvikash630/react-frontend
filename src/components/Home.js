import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Container, Button } from "reactstrap";


const Home = () => {
    useEffect(()=>{
        document.title="Home || Learncode with Vikash"
    },[])
    return (
        <div>
            <h1>Learncode with Vikash</h1>
            <p>This is vikash</p>
            <Container>
                <Button color="primary">Start Using</Button>
            </Container>
        </div>
    );
}
export default Home;