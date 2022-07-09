import React from "react";
import "./style/Dashboard.css";
import TextArea from "../input/TextArea";
import notice from "../../Assets/Icons/notice.svg";

const StudentDashboard = () => {
  return (
    <main className="container profile-con">
      <p className="edit-profile">Edit Profie</p>
      <TextArea className="textarea-con2" />
      <div className="notice-con">
        <div className="notice-sub-con">
          <img src={notice} alt="#" className="notice-img" />
          <p className="notice-text">
            Some fields are locked and cannot be edited for security reasons, to
            make changes contact the school authority.
          </p>
        </div>
        <p className="edit-profile save">Save</p>
      </div>
    </main>
  );
};

export default StudentDashboard;
