import React, { useState } from "react";
import CreateList from "./CreateList";
import "./Home.css";

function Home() {
  // Receiving Value from ls
  const receiveDataFromLS = () => {
    const value = localStorage.getItem("student");
    if (value) {
      return JSON.parse(value);
    } else {
      return [];
    }
  };
  const [student, setStudent] = useState(receiveDataFromLS());

  // Create New Student List
  const addStudentList = (studentName, age, degree, address, dob, course) => {
    
    if (
      studentName !== "" &&
      age !== "" &&
      degree !== "" &&
      address !== "" &&
      dob !== "" &&
      course !== ""
    ) {
     
      let studList = {
        studentid: Math.floor(Math.random() * 50) + 1,
        studentName,
        age,
        degree,
        address,
        dob,
        course,
      };
      const studTempList = [...student];
      studTempList.push(studList);
      studTempList.sort((a, b) => a.studentid - b.studentid);
      setStudent(studTempList);
      localStorage.setItem("student", JSON.stringify(studTempList));
      window.location.reload();
    }
  };

  // This method was Student Update List

  const updateStudentList = (
    studentid,
    studentName,
    age,
    degree,
    address,
    dob,
    course
  ) => {
    const studentList = [...student];
    const removeList = studentList.filter(
      (studList) => studList.studentid !== studentid);
    console.log(removeList);
    let editStudentList = {
      studentid,
      studentName,
      age,
      degree,
      address,
      dob,
      course,
    };
    removeList.push(editStudentList);
    removeList.sort((a, b) => a.studentid - b.studentid);
    setStudent(removeList);
    localStorage.setItem("student", JSON.stringify(removeList));
    window.location.reload();
  };

  // Delete Student List
  const deleteList = (studentid) => {
    const filterStudentList = student.filter((elem, index) => {
      return elem.studentid !== studentid;
    });
    filterStudentList.sort((a, b) => a.studentid - b.studentid);
    setStudent(filterStudentList);
    localStorage.setItem("student", JSON.stringify(filterStudentList));
    window.location.reload();
  };


  return (
    <div>
      <CreateList
        studList={addStudentList}
        student={student}
        receivedUpdateList={updateStudentList}
        deletedStudentList={deleteList}
      />

      {/* Student FEE Manager  */}
    </div>
  );
}

export default Home;
