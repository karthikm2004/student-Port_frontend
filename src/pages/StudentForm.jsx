import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function StudentForm() {
  const navigate = useNavigate();
  const { id } = useParams(); // id exists only in EDIT mode

  const [student, setStudent] = useState({
    name: "",
    class: "",
    rollNo: "",
    address: ""
  });

  // 🔹 IF EDIT MODE → FETCH DATA
  useEffect(() => {
    if (id) {
      axios
        .get(`https://student-portal-un8b.onrender.com/students/${id}`)
        .then((res) => setStudent(res.data))
        .catch((err) => console.log(err));
    }
  }, [id]);

  // 🔹 HANDLE INPUT
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
    console.log(student);

  };

  // 🔹 SUBMIT (ADD or UPDATE)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id) {
      // EDIT
      await axios.put(
        `https://student-portal-un8b.onrender.com/students/${id}`,
        student
      );
      Swal.fire({
        title: "Edit Successfully",
        icon: "success",
        draggable: true
      });;
    } else {
      // ADD
      await axios.post(
        "https://student-portal-un8b.onrender.com/students",
        student
      );
      Swal.fire({
        title: "Adedd",
        icon: "success",
        draggable: true
      });;
    }

    navigate("/students");
  };

  return (
    <Container className="mt-4" >
      <Link to={"/"} className="d-flex justify-content-between" style={{ fontSize: "35px" }}>
        <div></div>
        <IoIosArrowRoundBack className="text-dark" />
      </Link>
      <h1 className="text-center my-4 text-success">{id ? "Edit Student" : "Add Student"}</h1>

      <div style={{ background: "#d1edd8" }} className="border rounded">
        <Form onSubmit={handleSubmit} className="d-flex align-items-center flex-column p-4 ">
          <Form.Control
            className="mb-2"
            placeholder="Name"
            name="name"
            value={student.name}
            onChange={handleChange}
            required
          />

          <Form.Control
            className="mb-2"
            placeholder="Class"
            name="class"
            value={student.class}
            onChange={handleChange}
            required
          />

          <Form.Control
            className="mb-2"
            placeholder="Roll No"
            name="rollNo"
            value={student.rollNo}
            onChange={handleChange}
            required
          />

          <Form.Control
            className="mb-3"
            placeholder="Address"
            name="address"
            value={student.address}
            onChange={handleChange}
            required
          />

          <Button type="submit" variant="success">
            {id ? "Update Student" : "Save Student"}
          </Button>
        </Form>
      </div>

    </Container>
  );
}

export default StudentForm;
