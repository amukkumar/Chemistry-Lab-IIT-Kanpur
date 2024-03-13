import React from 'react'
import { Link } from 'react-router-dom'

const TeamCard = ({ item }) => {
  return (
    <div className="team-card">
      <header>{item.designation}</header>
      <div className='team-card-content'>
        <img src={item.imgpath} alt="" />
        <p> {item.name}</p>
        <p> {item.info}</p>
        <p>Email: {item.email}</p>
      </div>

    </div>
  )
}

export default TeamCard
