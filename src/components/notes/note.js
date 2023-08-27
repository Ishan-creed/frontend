import React from 'react';
import './Note.css'; // Import your CSS for styling

const Note = ({ title, content }) => {
  return (
    <div className="note-container">
      <h2 className="note-title">Some Info</h2>
      <p className="note-content">1. Email feature uses demo email service provided by ethereal services, so mail might not actually reach on the desired address now</p>
      <p className="note-content">2. Update button in each row is facing some error due to react-table element having problem in accessing the rows, Kindly use the update button available in blue to update the entry by entering the ID of entry and to be updated</p>
    </div>
  );
};

export default Note;
