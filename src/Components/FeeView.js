import React, { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";

function FeeView({
  studFeeList,
  studentFee,
  installmentList,
  studIdList,
  degreeList,
  sendUpdateStudentFee,
}) {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [studentID, getStudentNameById] = useState(studFeeList.studentId);
  const [studName, setStudName] = useState(studFeeList.studName);
  const [studDegree, setStudDegree] = useState(studFeeList.studentDegree);
  const [studFees, setStudFees] = useState(studFeeList.fees);
  const [studInstallment, setStudInstallment] = useState(
    studFeeList.installment
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const updateStudentFee = () => {
    sendUpdateStudentFee(
      studFeeList.feesId,
      studentID,
      studName,
      studDegree,
      studFees,
      studInstallment,
      setShow(false)
    );
    setValidated(true);
  };
  return (
    <div>
      <Button variant="info" onClick={handleShow}>
        <BsPencilSquare />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Student Fee List</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form noValidate validated={validated}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Student ID</Form.Label>
              <Form.Select
                aria-label="Floating label select example"
                value={studentID}
                onChange={getStudentNameById}
              >
                {studIdList.map((studId) => (
                  <option value={studId.studentid}>{studId.studentid}</option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please fill Method
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="text"
                name="text"
                value={studName}
                onChange={(e) => setStudName(e.target.value)}
                required
              />

              <Form.Control.Feedback type="invalid">
                Student Name is required
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Degree</Form.Label>

              <Form.Select
                aria-label="Floating label select example"
                value={studDegree}
                onChange={(e) => setStudDegree(e.target.value)}
                required
              >
                {degreeList.map((degree) => (
                  <option value={degree.value}>{degree.label}</option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please fill Method
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>FEE Status</Form.Label>

              <Form.Select
                aria-label="Floating label select example"
                value={studFees}
                onChange={(e) => setStudFees(e.target.value)}
                required
              >
                {studentFee.map((fees) => (
                  <option value={fees.value}>{fees.label}</option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please fill Method
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>Installment</Form.Label>

              <Form.Select
                aria-label="Floating label select example"
                value={studInstallment}
                onChange={(e) => setStudInstallment(e.target.value)}
                required
              >
                {installmentList.map((installment) => (
                  <option value={installment.value}>{installment.label}</option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please fill Method
              </Form.Control.Feedback>
            </Form.Group>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>

              <Button id="create" variant="success" onClick={updateStudentFee}>
                ADD
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default FeeView;
