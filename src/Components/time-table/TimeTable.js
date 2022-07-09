import React from "react";
import "./styles/table.css"

const TimeTable = () => {
  return (
    <main className="container profile-con">
      <p className="Reg-title ">Time Table</p>
      <div className="time-table-main-con">
        <div className="reg-sub-con date">
          <p className="reg-header date-text" tabindex="1">Monday</p>
          <p className="reg-header date-text" tabindex="1">Tuesday</p>
          <p className="reg-header date-text" tabindex="1">Wednesday</p>
          <p className="reg-header date-text" tabindex="1">Thursday</p>
          <p className="reg-header date-text" tabindex="1">Friday</p>
        </div>
        <div className="reg-sub-con">
          <p className="time-table-width reg-header">Time  </p>
          <p className="time-table-width reg-header">Course </p>
          <p className="time-table-width reg-header">Venue</p>
        </div>
        <div className="reg-sub-con">
          <p className="time-table-width reg-text">8:00am - 9:00am </p>
          <p className="time-table-width reg-text">Course 1</p>
          <p className="time-table-width reg-text">Classroom 1</p>
        </div>
        <div className="reg-sub-con">
          <p className="time-table-width reg-text">9:00am - 10:00am </p>
          <p className="time-table-width reg-text">Course 1</p>
          <p className="time-table-width reg-text">Classroom 1</p>
        </div>
        <div className="reg-sub-con">
          <p className="time-table-width reg-text">10:00am - 11:00am </p>
          <p className="time-table-width reg-text">Course 1</p>
          <p className="time-table-width reg-text">Classroom 1</p>
        </div>
        <div className="reg-sub-con">
          <p className="time-table-width reg-text">11:00am - 12:00pm  </p>
          <p className="time-table-width reg-text">Course 1</p>
          <p className="time-table-width reg-text">Classroom 1</p>
        </div>
        <div className="reg-sub-con">
          <p className="time-table-width reg-text">12:00pm - 1:00pm </p>
          <p className="time-table-width reg-text">Course 1</p>
          <p className="time-table-width reg-text">Classroom 1</p>
        </div>
        <div className="reg-sub-con">
          <p className="time-table-width reg-text">1:00pm - 2:00pm </p>
          <p className="time-table-width reg-text">Course 1</p>
          <p className="time-table-width reg-text">Classroom 1</p>
        </div>
        <div className="reg-sub-con">
          <p className="time-table-width reg-text">2:00pm - 3:00pm </p>
          <p className="time-table-width reg-text">Course 1</p>
          <p className="time-table-width reg-text">Classroom 1</p>
        </div>
        <div className="reg-sub-con">
          <p className="time-table-width reg-text">3:00pm - 4:00pm </p>
          <p className="time-table-width reg-text">Course 1</p>
          <p className="time-table-width reg-text">Classroom 1</p>
        </div>
        <div className="reg-sub-con">
          <p className="time-table-width reg-text">4:00pm - 5:00pm </p>
          <p className="time-table-width reg-text">Course 1</p>
          <p className="time-table-width reg-text">Classroom 1</p>
        </div>
        <div className="reg-sub-con">
          <p className="time-table-width reg-text">5:00pm - 6:00pm </p>
          <p className="time-table-width reg-text">Course 1</p>
          <p className="time-table-width reg-text">Classroom 1</p>
        </div>
      </div>
    </main>
  );
};

export default TimeTable;
