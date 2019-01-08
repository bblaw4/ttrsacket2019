import React from "react";

const Ticket = ({ ticket, unit, name, desc, completed }) => {
  return (
    <div>
      <p>
        Ticket: {ticket} Unit: {unit} Name: {name} Description: {desc}{" "}
        Completed: {completed ? "Yes" : "No"}
      </p>
    </div>
  );
};
export default Ticket;
