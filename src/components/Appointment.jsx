import React from 'react'

const Appointment = (props) => {
  return (
    <li id="li" className={props.appointment.done ? 'done' : '' }>
      <div>

        <input type="checkbox" className='input' id={props.appointment.id} 
        checked={props.appointment.done} onChange={() => 
        props.toggleDone(props.appointment.id)} />

        <label htmlFor={props.appointment.id}>{props.appointment.name}</label>

      </div>
      <button id="del" onClick={() => props.removeAppointment(props.appointment.id)}>X</button>
    </li>
  )
}

export default Appointment