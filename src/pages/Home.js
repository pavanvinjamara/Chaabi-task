import React from 'react'
import HomeContainer1 from '../components/HomeContainer1'
import './Home.css'
import VerticalBar from '../components/VerticalBar'
import VerticalBar2 from '../components/VerticalBar2'
import DoughNut1 from '../components/DoughNut1'

function Home() {
  const dataContain=
    {
      id: 1,
      heading: "In Training workers",
      number: 3354,
      numberTwo: "234"
    };

    const dataContain2=  {
      id: 2,
      heading: "Video-watch-time(Hrs)",
      number: 2433,
      numberTwo: "436"
    }
    const dataContain3=  {
      id: 3,
      heading: "%Workers Passing Quiz",
      number: 95,
      percent: "%",
      numberTwo: "24%"
    }
    const dataContain4= {
      id: 4,
      heading: "Avg. Days Taken",
      number: 6,
      numberTwo: "3"
    }

    const doughnut1 = {
      id :22,
      labels:['Finished Traning', 'Chapter A', 'Chapter B', 'Chapter C', "Haven't Strated Test"],
      dataStore: [22, 34, 22, 20, 7],

    }
    const doughnut2 = {
      id :22,
      labels:["passes", "failed"],
      dataStore: [40, 60],

    }

    
  
  return (
    <div className='home-screen'>
        <header>
            <h1>Hello, Pavan Kumar</h1>
            <p>Following is Your Organisation Performance Summary</p>
        </header>
        <div className='home-subinfo2'>
        <HomeContainer1 name={dataContain}/>
        <HomeContainer1 name={dataContain2}/>
        <HomeContainer1 name={dataContain3}/>
        <HomeContainer1 name={dataContain4}/>
        </div>
        <div className='home-subinfo3'>
         
          {/* <DoughNuts  /> */}
          <DoughNut1 name={doughnut1}/>
          <VerticalBar/>
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
        <VerticalBar2/>
        </div>
    </div>
  )
}

export default Home