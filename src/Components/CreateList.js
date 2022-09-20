import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Edit from "./Edit";

export const CreateList = ({
  student,
  studList,
  receivedUpdateList,
  deletedStudentList,
}) => {
  
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [age, setAge] = useState("");
  const [degree, setDegree] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [course, setCourse] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    setDegree(event.target.value);
    setCourse(event.target.value);
  };

  const handleCreate = () => {
    
    if (
      studentName !== "" &&
      age !== "" &&
      degree !== "" &&
      address !== "" &&
      dob !== "" &&
      course !== ""
    ) {
      studList(studentName, age, degree, address, dob, course);
      setStudentName("");
      setAge("");
      setDegree("");
      setAddress("");
      setDob("");
      setCourse("");
      setShow(false);
    } else {
      setValidated(true);
    }
  };

  const receiveUpdateList = (
    studentid,
    studentName,
    age,
    degree,
    address,
    dob,
    course
  ) => {
    receivedUpdateList(
      studentid,
      studentName,
      age,
      degree,
      address,
      dob,
      course
    );
  };

  // This method was creating Select box
  const degreeList = [
    { label: "" },
    { label: "BE", value: "be" },
    { label: "BSC", value: "bsc" },
    { label: "BCOM", value: "bcom" },
  ];
  const courseList = [
    { label: "" },
    { label: "Web Develop", value: "web" },
    { label: "Software Develop", value: "soft" },
    { label: "Banking", value: "bank" },
  ];
  const getDegreeValue = (key) => {
    const filteredList = degreeList.filter(function (degreeValue) {
      return degreeValue.value === key;
    });
    if (filteredList.length > 0) {
      return filteredList[0].label;
    } else {
      return filteredList;
    }
  };
  const getCourseValue = (value) => {
    const filterCourseList = courseList.filter(function (CourseValue) {
      return CourseValue.value === value;
    });
    if (filterCourseList.length > 0) {
      return filterCourseList[0].label;
    } else {
      return filterCourseList;
    }
  };

  const removeStudentList = (studentid) => {
    deletedStudentList(studentid);
  };

  return (
    <div>
      <Container>
        <Navbar className="second" mt-6>
          <h2 className="h1">Student List</h2>
          <Button variant="success" className="add" onClick={handleShow}>
            Add New Student
          </Button>
        </Navbar>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Create Student List</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form noValidate validated={validated}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Student Name</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  name="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Student Name is required
                </Form.Control.Feedback>
              </Form.Group>

              <Row className="g-2">
                <Col md>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput2"
                  >
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      type="number"
                      name="age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Age is required
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md className="column">
                  <Form.Label>Degree</Form.Label>

                  <Form.Select
                    aria-label="Floating label select example"
                    placeholder="Select Degree"
                    type="option"
                    name="degree"
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    required
                  >
                    {degreeList.map((degree) => (
                      <option value={degree.value}>{degree.label}</option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please fill Method
                  </Form.Control.Feedback>
                </Col>
              </Row>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea3"
              >
                <Form.Label>Address</Form.Label>

                <Form.Control
                  as="textarea"
                  rows={2}
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Address is required
                </Form.Control.Feedback>
              </Form.Group>

              <Row className="g-2">
                <Col md>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput4"
                  >
                    <Form.Label>DOB</Form.Label>
                    <Form.Control
                      type="date"
                      name="birthDate"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      DOB is required
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md className="column">
                  <Form.Label>Course</Form.Label>
                  <Form.Select
                    required
                    aria-label="Floating label select example"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    placeholder="Select Course"
                  >
                    {courseList.map((course) => (
                      <option value={course.value}>{course.label}</option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please fill Method
                  </Form.Control.Feedback>
                </Col>
              </Row>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>

                <Button id="create" variant="primary" onClick={handleCreate}>
                  Create
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>

        {/* Getting Student List in Table */}

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Student Name</th>
              <th>Age</th>
              <th>Degree</th>
              <th>Address</th>
              <th>DOB</th>
              <th>Course Enroll</th>
              <th>View</th>
              <th>Delete</th>
            </tr>
          </thead>

          {/* Student List */}
          <tbody>
            {student.map((studList) => {
              return (
                <tr>
                  <td>{studList.studentid}</td>
                  <td>{studList.studentName}</td>
                  <td>{studList.age}</td>
                  <td>{getDegreeValue(studList.degree)}</td>
                  <td>{studList.address}</td>
                  <td>{studList.dob}</td>
                  <td>{getCourseValue(studList.course)}</td>
                  <td>
                    <Edit
                      studList={studList}
                      degreeList={degreeList}
                      courseList={courseList}
                      sendUpdateList={receiveUpdateList}
                    />
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => removeStudentList(studList.studentid)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default CreateList;
