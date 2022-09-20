import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Edit({ studList, degreeList, courseList, sendUpdateList}) {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [editStudentName, setEditStudentName] = useState(studList.studentName);
  const [editAge, setEditAge] = useState(studList.age);
  const [editDegree, setEditDegree] = useState(studList.degree);
  const [editAddress, setEditAddress] = useState(studList.address);
  const [editDob, setEditDob] = useState(studList.dob);
  const [editCourse, setEditCourse] = useState(studList.course);

  const editHandleShow = () => setShow(true);
  const editHandleHide = () => setShow(false);

  const handleEdit = () => {
    if (editStudentName !== "" && editAge !== "" && editDegree !== "" && editAddress !== "" && editDob !== "" && editCourse !== "" ) {

    sendUpdateList(
      studList.studentid,
      editStudentName,
      editAge,
      editDegree,
      editAddress,
      editDob,
      editCourse,
      setShow(false)
    );
    }else {
      setValidated(true);
    }
  };

  return (
    <div>
      <Button variant="info" onClick={editHandleShow}>
        <BsPencilSquare />
      </Button>

      <Modal
        show={show}
        onHide={editHandleHide}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Student List</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form noValidate validated={validated}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                name="text"
                value={editStudentName}
                onChange={(e) => setEditStudentName(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Title is required
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
                    value={editAge}
                    onChange={(e) => setEditAge(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Age is required
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Label>Degree</Form.Label>

                <Form.Select
                  aria-label="Floating label select example"
                  value={editDegree}
                  onChange={(e) => setEditDegree(e.target.value)}
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
                value={editAddress}
                onChange={(e) => setEditAddress(e.target.value)}
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
                    value={editDob}
                    onChange={(e) => setEditDob(e.target.value)}
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
                  aria-label="Floating label select example"
                  value={editCourse}
                  onChange={(e) => setEditCourse(e.target.value)}
                  required
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
              <Button variant="secondary" onClick={editHandleHide}>
                Close
              </Button>

              <Button id="create" variant="primary" onClick={handleEdit}>
                Create
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Edit;
