import React, {useState} from 'react'
import './HomeConatiner1.css'
import Area from './Area'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faSquareArrowUpRight
    
  } from '@fortawesome/free-solid-svg-icons'
  import AnimatedNumbers from "react-animated-numbers";

function HomeContainer1({name}) {
  const number = Number(name.number);
  const [num, setNum] = React.useState(number);
 
  return (
    <div className='homecontainer-1'>
        <p className='para'>{name.heading}</p>
        <div className='sub-info1'>
            <h1><AnimatedNumbers
    includeComma
    animateToNumber={num}
    fontStyle={{ fontSize: 40 }}
    locale="en-US"
    configs={[
      { mass: 1, tension: 220, friction: 100 },
      { mass: 1, tension: 180, friction: 130 },
      { mass: 1, tension: 280, friction: 90 },
      { mass: 1, tension: 180, friction: 135 },
      { mass: 1, tension: 260, friction: 100 },
      { mass: 1, tension: 210, friction: 180 },
    ]}
  ></AnimatedNumbers>{name.percent}</h1>
            <div className='div-subinfo'>
              <FontAwesomeIcon icon={faSquareArrowUpRight}/>
                <p>20%</p>
                
            </div>
            <p className='para2'>{name.numberTwo}</p>
        </div>
        <div className="sub-info2"><Area className="area" /></div>
        
        
    </div>
  )
}

export default HomeContainer1