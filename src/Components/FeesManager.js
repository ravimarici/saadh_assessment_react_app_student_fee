import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import FeeView from "./FeeView";

export const FeesManager = () => {
  // Receiving Value from ls
  const receiveDataFromLS = () => {
    const value = localStorage.getItem("feeList");
    if (value) {
      return JSON.parse(value);
    } else {
      return [];
    }
  };

  const [feeList, setFeeList] = useState(receiveDataFromLS());
  const [studIdList, setStudIdList] = useState([]);
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [studName, setStudName] = useState("");
  const [studentDegree, setStudentDegree] = useState("");
  const [fees, setFees] = useState("");
  const [installment, setInstallment] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const studentFee = [
    { label: "" },
    { label: "Paid Fee", value: "paidfee" },
    { label: "Unpaid Fee", value: "unpaidfee" },
  ];

  const studentDegreeList = [
    { label: "" },
    { label: "BE", value: "be" },
    { label: "BSC", value: "bsc" },
    { label: "BCOM", value: "bcom" },
  ];
  const installmentList = [
    { label: "" },
    { label: "3 Month", value: "3month" },
    { label: "6 Month", value: "6month" },
    { label: "9 Month", value: "9month" },
  ];

  const getFeesValue = (key) => {
    const filterFeeList = studentFee.filter(function (feesValue) {
      return feesValue.value === key;
    });
    if (filterFeeList.length > 0) {
      return filterFeeList[0].label;
    } else {
      return filterFeeList;
    }
  };

  const getDegreeValue = (key) => {
    const filterDegreeList = studentDegreeList.filter(function (degreeValue) {
      return degreeValue.value === key;
    });
    if (filterDegreeList.length > 0) {
      return filterDegreeList[0].label;
    } else {
      return filterDegreeList;
    }
  };

  const getInstallmentValue = (key) => {
    const filterInstallList = installmentList.filter(function (installValue) {
      return installValue.value === key;
    });
    if (filterInstallList.length > 0) {
      return filterInstallList[0].label;
    } else {
      return filterInstallList;
    }
  };

  // Create Student Fee Manager
  const addStudentFee = () => {
    if (
      studentId !== "" &&
      studName !== "" &&
      studentDegree !== "" &&
      fees !== "" &&
      installment !== ""
    ) {
      let studFeeList = {
        feesId: Math.floor(Math.random() * 50) + 1,
        studentId,
        studName,
        studentDegree,
        fees,
        installment,
      };
      console.log("studFeeList", studFeeList);
      const studFeesTempList = [...feeList];
      studFeesTempList.push(studFeeList);
      studFeesTempList.sort((a, b) => a.feesId - b.feesId);
      console.log("studFeesTempList", studFeesTempList);
      setFeeList(studFeesTempList);
      localStorage.setItem("feeList", JSON.stringify(studFeesTempList));
      setShow(false);
      setStudentId("");
      setStudName("");
      setStudentDegree("");
      setFees("");
      setInstallment("");
    } else {
      setValidated(true);
    }
  };

  useEffect(() => {
    const studentIdList = JSON.parse(localStorage.getItem("student"));
    if (studentIdList !== null) {
      console.log("saadh", studentIdList);
      setStudIdList(studentIdList);
    }
  }, []);

  const getStudentNameById = (event) => {
    const todoTempList = [...studIdList];
    const ravi = event.target.value;
    setStudentId(ravi);
    console.log(ravi);
    const filterStudentList = todoTempList.filter((elem) => {
      console.log("fromList", elem.feesId);
      console.log("fromKey", ravi);
      return elem.studentid == ravi;
    });
    console.log(filterStudentList);
    setStudName(filterStudentList.map((a) => a.studentName));
    console.log(filterStudentList.map((a) => a.studentName));
    setStudentDegree(filterStudentList.map((a) => a.degree));
    console.log(filterStudentList.map((a) => a.degree));
  };

  // Edit & Update Student Fee Manager
  const updateStudentFee = (
    feesId,
    studentId,
    studName,
    studentDegree,
    fees,
    installment
  ) => {
    const studentFeeList = [...feeList];
    const removeStudentFeeList = studentFeeList.filter(
      (studFeeList) => studFeeList.feesId !== feesId
    );
    console.log(studentFeeList);
    let editStudentFeeList = {
      feesId,
      studentId,
      studName,
      studentDegree,
      fees,
      installment,
    };
    removeStudentFeeList.push(editStudentFeeList);
    removeStudentFeeList.sort((a, b) => a.feesId - b.feesId);
    setFeeList(removeStudentFeeList);
    console.log("feelist", removeStudentFeeList);
    localStorage.setItem("feeList", JSON.stringify(removeStudentFeeList));
  };
  return (
    <div>
      <Container>
        <Navbar className="second" mt-6>
          <h4 className="h1">Fee Manager</h4>
          <Button variant="success" className="add" onClick={handleShow}>
            Add Student Fee List
          </Button>
        </Navbar>

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
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Student ID</Form.Label>

                <Form.Select
                  aria-label="Floating label select example"
                  value={studentId}
                  onChange={getStudentNameById}
                  placeholder="Select Student ID"
                >
                  {studIdList.map((studId) => (
                    <option value={studId.studentid}>{studId.studentid}</option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please fill Method
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
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
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Label>Degree</Form.Label>

                <Form.Select
                  aria-label="Floating label select example"
                  value={studentDegree}
                  onChange={(e) => setStudentDegree(e.target.value)}
                  placeholder="Select Degree"
                >
                  {studentDegreeList.map((degree) => (
                    <option value={degree.value}>{degree.label}</option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please fill Method
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput4"
              >
                <Form.Label>FEE Status</Form.Label>

                <Form.Select
                  aria-label="Floating label select example"
                  value={fees}
                  onChange={(e) => setFees(e.target.value)}
                  placeholder="Select Fee"
                  required
                >
                  {studentFee.map((fees) => (
                    <option value={fees.value}>{fees.label}</option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please fill the Fee
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput5"
              >
                <Form.Label>Installment</Form.Label>

                <Form.Select
                  aria-label="Floating label select example"
                  value={installment}
                  onChange={(e) => setInstallment(e.target.value)}
                  placeholder="Select Installment"
                  required
                >
                  {installmentList.map((installment) => (
                    <option value={installment.value}>
                      {installment.label}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please fill the Installment
                </Form.Control.Feedback>
              </Form.Group>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>

                <Button id="create" variant="success" onClick={addStudentFee}>
                  ADD
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>

        {/* Table */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Degree</th>
              <th>Fee Status</th>
              <th>Installment</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {feeList.map((studFeeList) => {
              return (
                <tr>
                  <td>{studFeeList.feesId}</td>
                  <td>{studFeeList.studentId}</td>
                  <td>{studFeeList.studName}</td>
                  <td>{getDegreeValue(studFeeList.studentDegree)}</td>
                  <td>{getFeesValue(studFeeList.fees)}</td>
                  <td>{getInstallmentValue(studFeeList.installment)}</td>
                  <td>
                    <FeeView
                      studFeeList={studFeeList}
                      studentFee={studentFee}
                      studIdList={studIdList}
                      installmentList={installmentList}
                      degreeList={studentDegreeList}
                      sendUpdateStudentFee={updateStudentFee}
                    />
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

export default FeesManager;
