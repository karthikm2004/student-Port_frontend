import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";


function StudentList() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const fetchStudents = async () => {
    const res = await axios.get(
      "https://student-portal-un8b.onrender.com/students"
    );
    setStudents(res.data);
  };


  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteStudent = async (id) => {
    await axios.delete(
      `https://student-portal-un8b.onrender.com/students/${id}`
    );
    fetchStudents();
  };


  return (
    <div className="container mt-4 " style={{}}>
      <Link to={"/"} className="d-flex justify-content-between" style={{ fontSize: "35px" }}>
        <div></div>
        <IoIosArrowRoundBack className="text-dark" />
      </Link>
      <h1 className="text-center my-4 text-success">Student List</h1>

      <Table striped bordered hover responsive>
        <thead>
          <tr className="">
            <th>Name</th>
            <th>Class</th>
            <th>Roll No</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.class}</td>
              <td>{s.rollNo}</td>
              <td>{s.address}</td>
              <td className="d-flex justify-content-evenly gap-2">
                <Button
                  variant="warning"
                  size="md"
                  onClick={() => navigate(`/edit-student/${s.id}`)}
                >
                  Edit
                </Button>{" "}
                <Button
                  variant="danger"
                  size="md"
                  onClick={() => deleteStudent(s.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default StudentList;