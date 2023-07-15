import React from 'react'
import HomeContainer1 from '../components/HomeContainer1'
import './Home.css'
import VerticalBar from '../components/VerticalBar'

import DoughNut1 from '../components/DoughNut1'

function Home() {
  const dataContain=
    {
      id: 1,
      heading: "In Training workers",
      number: 3354,
      numberTwo: "234",
      colorsbk: "#e9f4ed",
      colors: "#69ab7b"
    };

    const dataContain2=  {
      id: 2,
      heading: "Video-watch-time(Hrs)",
      number: 2433,
      numberTwo: "436",
      colorsbk: "#faeaea",
      colors: "#e05f5e"
    }
    const dataContain3=  {
      id: 3,
      heading: "%Workers Passing Quiz",
      number: 95,
      percent: "%",
      numberTwo: "24%",
      colorsbk: "#e9f4ed",
      colors: "#69ab7b"
    }
    const dataContain4= {
      id: 4,
      heading: "Avg. Days Taken",
      number: 6,
      numberTwo: "3",
      colorsbk: "#e9f4ed",
      colors: "#69ab7b"
    }

    const doughnut1 = {
      id :22,
      labels:['Finished Traning', 'Chapter A', 'Chapter B', 'Chapter C', "Haven't Strated Test"],
      dataStore: [22, 34, 22, 20, 7],

    }
    const doughnut2 = {
      id :23,
      labels:["passes", "failed"],
      dataStore: [40, 60],

    }

    const verticalBar1 = {
      id: 24,
      labels:['3 Jun','4 Jun','5 Jun','6 Jun','7 Jun','8 Jun','9 Jun','10 Jun','11 Jun','12 Jun','13 Jun','14 Jun'],
      dataStore:  [100, 120, 110, 210, 250, 200, 230, 90, 270, 300, 350, 400],
      classname: "div-vertical",
      state1: false,
      state2: false,
      state3: true,
      state4: false,
      state5: false,
      para: "Last 14 Days Active Workers In Traning"
    }

    const verticalBar2 = {
      id: 25,
      labels: ['S','M', 'T', 'W', 'T', 'F', 'S', 'S','M', 'T'],
      dataStore: [100, 120, 110, 210, 250, 200, 230, 90, 270, 300],
      classname: "div-vertical2",
      state1: false,
      state2: false,
      state3: true,
      state4: true,
      state5: true,
      para: "Last 7 Days Active Workers In Traning"
    }
    
  
  return (
    <div className='home-screen'>
        <header>
            <h1>Hello, Pavan Kumar</h1>
            <p>Following is Your Organisation Performance Summary</p>
        </header>
        <div className='home-subinfo2 '>
        <HomeContainer1 name={dataContain}/>
        <HomeContainer1 name={dataContain2}/>
        <HomeContainer1 name={dataContain3}/>
        <HomeContainer1 name={dataContain4}/>
        </div>
        <div className='home-subinfo3'>
         
          {/* <DoughNuts  /> */}
          <DoughNut1 name={doughnut1}/>
          <VerticalBar names={verticalBar1}/>
        </div>
        <div className='home-subinfo4'>
          <div className='sub-section1'>
            <p>Monthly Training Activity</p>
            <div>
            <input id="coursea" name='radio' type='radio'/>
            <label for="coursea">course a</label>
            <p>27 Workers Took this Course This Week</p>
            </div>
            <div>
            <input id="courseb" name='radio' type='radio'/>
            <label for="courseb">course b</label>
            <p>273 Workers Took this Course This Week</p>
            </div>
            <div>
            <input id="coursec" name='radio' type='radio'/>
            <label for="coursec">course c</label>
            <p>273 Workers Took this Course This Week</p>
            </div>
            <div>
            <input id="coursed" name='radio' type='radio'/>
            <label for="coursed">course d</label>
            <p>273 Workers Took this Course This Week</p>
            </div>
          </div>
        <DoughNut1 name={doughnut2}/>
        <VerticalBar names={verticalBar2}/>
        </div>
    </div>
  )
}

export default Home