import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({ name: '', rollno: '', department: '', dob: '' });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/students');
      setStudents(response.data);
      console.log(students);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    console.log(formData);
    try {
      await axios.post('http://localhost:5001/api/students', formData);
      console.log('Data submitted successfully');
      fetchStudents(); // Refresh student list after submission
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(()=>{
    fetchStudents();
  })
  return (
    <div>
      <h1>Student Information</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="text" name="rollno" placeholder="Roll Number" onChange={handleChange} />
        <input type="text" name="department" placeholder="Department" onChange={handleChange} />
        <input type="date" name="dob" placeholder="Date of Birth" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <h2>Students</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            Name: {student.name}, Roll No: {student.rollno}, Department: {student.department}, DOB: {student.dob}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
