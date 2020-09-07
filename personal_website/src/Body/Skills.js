import React from 'react';
import './style.css';

import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis, VictoryLabel } from 'victory';

const languageData = [
  {x: "SQL", y: 2},
  {x: "C++", y: 3},
  {x: "JS", y: 4},
  {x: "Python", y: 5},
  {x: "Java", y: 5},
];

const frameworkData = [
  {x: "Node", y: 2},
  {x: "Express.js", y: 3},
  {x: "React.js", y: 5},
  {x: "Django", y: 5}
];

const toolData = [
  {x: "Terminal", y: 3},
  {x: "Linux", y: 4},
  {x: "git", y: 4},
]

class Skills extends React.Component {
  render() {
    return (
    <div class="body-section-container">
      <h1 id="skills" className='body-section-header'>Skills</h1>
      <p className='body-text'>I primarily specialize in web development but I do have notable experience in distributed systems and low level code.</p>
      <div className='chart-flex-box'>
        <div className="chart-wrapper">
        <VictoryChart
          theme={VictoryTheme.material}
          animate={{
            duration: 2000,
            easing: "bounce"
          }}
          height={210}
          domainPadding={{ x: 10 }}
          padding={{bottom: 40, left: 70, right: 20, top: 30}}
          >

          <VictoryLabel text="Programming Language Proficiency" x={225} y={10} textAnchor="middle"/>

          <VictoryAxis

          />
          <VictoryAxis
            dependentAxis
            tickFormat={[1,2,3,4,5]}
          />
          <VictoryBar horizontal
            data={languageData}
            barRatio={0.8}
            labels={({ datum }) => datum.y}
            style={{ labels: { fill: "white" } }}
            labelComponent={<VictoryLabel dx={-20}/>}

          />
        </VictoryChart>
        </div>
        <div className="chart-wrapper">
          <VictoryChart
            theme={VictoryTheme.material}
            animate={{
              duration: 2000,
              easing: "bounce"
            }}
            height={210}
            domainPadding={{ x: 10 }}
            padding={{bottom: 40, left: 70, right: 20, top: 30}}
            >

            <VictoryLabel text="Framework Proficiency" x={225} y={10} textAnchor="middle"/>

            <VictoryAxis

            />
            <VictoryAxis
              dependentAxis
              tickFormat={[1,2,3,4,5]}

            />
            <VictoryBar horizontal
              data={frameworkData}
              barRatio={0.8}
              labels={({ datum }) => datum.y}
              style={{ labels: { fill: "white" } }}
              labelComponent={<VictoryLabel dx={-20}/>}

            />
          </VictoryChart>
        </div>
        <div className="chart-wrapper">
          <VictoryChart
            theme={VictoryTheme.material}
            animate={{
              duration: 2000,
              easing: "bounce"
            }}
            height={210}
            domainPadding={{ x: 10 }}
            padding={{bottom: 40, left: 70, right: 20, top: 30}}
            >

            <VictoryLabel text="Tool Proficiency" x={225} y={10} textAnchor="middle"/>

            <VictoryAxis

            />
            <VictoryAxis
              dependentAxis
              tickFormat={[1,2,3,4,5]}

            />
            <VictoryBar horizontal
              data={toolData}
              barRatio={0.8}
              labels={({ datum }) => datum.y}
              style={{ labels: { fill: "white" } }}
              labelComponent={<VictoryLabel dx={-20}/>}

            />
          </VictoryChart>
        </div>
      </div>
      
    </div>
    )

  }
}

export default Skills;
