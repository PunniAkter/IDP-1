"use client";

import React, { useState, useCallback } from "react";
import { Container, Typography } from "@mui/material";
import PasswordGenerator from "./PasswordGenerator";
import PinBasedAttendance from "./PinBasedAttendance";
import PastAttendance from "./PastAttendance";
import Notifications from "./Notifications";

export default function Dashboard() {
  const [activePassword, setActivePassword] = useState("");
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [notification, setNotification] = useState("");

  // Memoize the handlePasswordGenerated function
  const handlePasswordGenerated = useCallback((password) => {
    setActivePassword(password);
  }, []);

  const handleAttendanceMarked = () => {
    const newRecord = {
      date: new Date().toISOString().split("T")[0],
      time: new Date().toTimeString().slice(0, 5),
      subject: "Mathematics", // Example subject for demo
      status: "Present",
    };

    setAttendanceRecords((prev) => [...prev, newRecord]);
    setNotification(`Attendance marked for ${newRecord.subject} on ${newRecord.date}`);
  };

  return (
    <div>
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Student Dashboard
      </Typography>

      {/* Password Generator */}
      <PasswordGenerator onPasswordGenerated={handlePasswordGenerated} />

      {/* PIN-Based Attendance */}
      <PinBasedAttendance
        activePassword={activePassword}
        onAttendanceMarked={handleAttendanceMarked}
      />

      {/* Past Attendance Records */}
      <PastAttendance attendanceRecords={attendanceRecords} />

      {/* Notifications */}
      <Notifications message={notification} />
    </Container>
    </div>
  );
}


