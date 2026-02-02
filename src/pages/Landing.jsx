import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
const Landing = () => {
    return (
        <>
            <Header />

            <Container className="text-center mt-5 d-flex justify-content-center align-items-center flex-column " style={{ height: "70vh",background:"" }}>
                <h1 style={{fontSize:"50px"}}>Student Portal</h1>
                <p style={{fontSize:"25px"}}>Manage student records easily with our <br /> simple and efficient Student Portal.</p>
                <div className="d-flex justify-content-center align-items-center">
                    <Link to="/add-student">
                        <Button className="m-2">Add Student</Button>
                    </Link>

                    <Link to="/students">
                        <Button variant="secondary" className="m-2">
                            View Students
                        </Button>
                    </Link>
                </div>



            </Container>

            <Footer />
        </>
    );
};

export default Landing;
