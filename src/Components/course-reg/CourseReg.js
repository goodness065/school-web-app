import React, { useState } from "react";
import Modal from "../modal/Modal";
import "./style/course-reg.css";

const CourseReg = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="container profile-con">
      <p className="Reg-title ">Course Registeration</p>
      <div className="reg-main-con">
        <div className="reg-sub-con">
          <p className="reg-width reg-header">Course </p>
          <p className="reg-width reg-header">Course Code </p>
          <p className="reg-width reg-header">credit Unit</p>
          <p className="reg-width2 reg-header">Lecture’s Name</p>
          <p className="reg-width reg-header-no">checkbox</p>
        </div>
        <div className="reg-sub-con">
          <p className="reg-width reg-text">Course1 </p>
          <p className="reg-width reg-text">Cos 101</p>
          <p className="reg-width reg-text">3</p>
          <p className="reg-width2 reg-text">name of lecture</p>
          <label className="reg-width">
            <input type="checkbox" class="blue" />
            <span></span>
          </label>
        </div>
        <div className="reg-sub-con">
          <p className="reg-width reg-text">Course1 </p>
          <p className="reg-width reg-text">Cos 101</p>
          <p className="reg-width reg-text">3</p>
          <p className="reg-width2 reg-text">name of lecture</p>
          <label className="reg-width">
            <input type="checkbox" class="blue" />
            <span></span>
          </label>
        </div>
        <div className="reg-sub-con">
          <p className="reg-width reg-text">Course1 </p>
          <p className="reg-width reg-text">Cos 101</p>
          <p className="reg-width reg-text">3</p>
          <p className="reg-width2 reg-text">name of lecture</p>
          <label className="reg-width">
            <input type="checkbox" class="blue" />
            <span></span>
          </label>
        </div>
        <div className="reg-sub-con">
          <p className="reg-width reg-text">Course1 </p>
          <p className="reg-width reg-text">Cos 101</p>
          <p className="reg-width reg-text">3</p>
          <p className="reg-width2 reg-text">name of lecture</p>
          <label className="reg-width">
            <input type="checkbox" class="blue" />
            <span></span>
          </label>
        </div>
        <div className="reg-sub-con">
          <p className="reg-width reg-text">Course1 </p>
          <p className="reg-width reg-text">Cos 101</p>
          <p className="reg-width reg-text">3</p>
          <p className="reg-width2 reg-text">name of lecture</p>
          <label className="reg-width">
            <input type="checkbox" class="blue" />
            <span></span>
          </label>
        </div>
        <div className="reg-sub-con">
          <p className="reg-width reg-text">Course1 </p>
          <p className="reg-width reg-text">Cos 101</p>
          <p className="reg-width reg-text">3</p>
          <p className="reg-width2 reg-text">name of lecture</p>
          <label className="reg-width">
            <input type="checkbox" class="blue" />
            <span></span>
          </label>
        </div>
        <div className="reg-sub-con">
          <p className="reg-width reg-text">Course1 </p>
          <p className="reg-width reg-text">Cos 101</p>
          <p className="reg-width reg-text">3</p>
          <p className="reg-width2 reg-text">name of lecture</p>
          <label className="reg-width">
            <input type="checkbox" class="blue" />
            <span></span>
          </label>
        </div>
        <div className="reg-sub-con">
          <p className="reg-width reg-text">Course1 </p>
          <p className="reg-width reg-text">Cos 101</p>
          <p className="reg-width reg-text">3</p>
          <p className="reg-width2 reg-text">name of lecture</p>
          <label className="reg-width">
            <input type="checkbox" class="blue" />
            <span></span>
          </label>
        </div>
      </div>
      <div className="submit-con">
        <p className="edit-profile save" onClick={() => setIsOpen(true)}>Submit</p>
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} title="Course registeration Successful" btnText="View Courses" link="course"/>}
    </main>
  );
};

export default CourseReg;
