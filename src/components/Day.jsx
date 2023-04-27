import React from 'react'
import { useState } from 'react';
import Appointment from './Appointment';

const Day = (props) => {

  const [appointments, setAppointments] = useState([]);
  const addAppointment = () => {
    const name = prompt("Informe o nome do compromisso: ");
    const newAppointment = {
      id: Math.floor(1000000 * (Math.random() + 1)),
      name,
      done: false
    }
    setAppointments((currentState) => [...currentState, newAppointment]);
  }

  const toggleDone = (appointmentId) => {
    setAppointments((currentState) => (
      currentState.map(appointment => {
        if(appointment.id !== appointmentId)
          return appointment
        else 
          return {...appointment, done: !appointment.done}
      })
    ))
  }

  const removeAppointment = (appointmentId) => {
    setAppointments(currentState => (
      currentState.filter(appointment => appointment.id !== appointmentId)
    ))
  }

  return (
    <div className='day'>
        <h2>{props.day}</h2>
        
        <ul id="ul">
          {appointments.map(appointment => (
            <Appointment key={appointment.id} appointment={appointment} 
            toggleDone={toggleDone} removeAppointment={removeAppointment}/>
          ))}
        </ul>
        <button id='add' onClick={addAppointment}>Adicionar</button>

      </div>
  )
}

export default Day