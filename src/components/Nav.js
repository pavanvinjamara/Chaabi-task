import React, { useState } from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  
    faHome,
    faMortarBoard,
    faChartSimple,
    faUsers,
    faUser,
    faMessage
    
  } from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/images/chaabi_logo.png'
function Nav() {
  const[activeId, setActiveId]= useState("Dashboard");
  
  const selectSection = [
    {
      id: 1,
      name: "Dashboard",
      image: faHome
    },
    {
      id: 2,
      name: "Traning",
      image: faMortarBoard
    },
    {
      id: 3,
      name: "Users",
      image: faUsers
    },
    {
      id: 4,
      name: "Analytics",
      image: faChartSimple
    },
    {
      id: 5,
      name: "My Account",
      image: faUser
    },
    {
      id: 6,
      name: "Support",
      image: faMessage
    },
  ]

  const handleActiveSection =(id) =>{

    setActiveId(id);
  }

  return (
    <div className='nav-container'>
        <div className='nav-info1'> 
        <img src={Logo} alt="Logo Of chaabi with constructor with cap" className='logo'/>
        </div>
        
        <ul className='nav-info2'>
           
           {

            selectSection.map( section => {
              // console.log(section.id)
              return <li key={section.id} id={section.name} onClick={ e => handleActiveSection(e.target.id)} className={section.name === activeId ? "activeClass": "inactive"}>
                <FontAwesomeIcon
              icon={section.image}
              id={section.name} onClick={ e => {handleActiveSection(e.target.id)
              console.log(e.target.id)
              }
            }
              className="icon"
              
            />
      
            <p id={section.name} onClick={ e => handleActiveSection(e.target.id)}>{section.name}</p>
              </li>
      
            })
           }
        </ul>
    </div>
  )
}

export default Nav