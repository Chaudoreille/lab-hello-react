import { useState } from 'react'
import './App.css'

import declarativeIcon from "./images/icon1.png"
import componentsIcon from "./images/icon2.png"
import singleIcon from "./images/icon3.png"
import jsxIcon from "./images/icon4.png"
import Navbar from './Components/Navbar/Navbar'
import Section from './Components/Section/Section'
import Feature from './Components/Feature/Feature'

function App() {
  const [count, setCount] = useState(0)
  const features = [
    {
      image: {
        src: declarativeIcon,
        alt: "Declarative Icon",
      },
      title: "Declarative",
      description: "React makes it painless to create interactive UIs."
    },
    {
      image: {
        src: componentsIcon,
        alt: "Components Icon",
      },
      title: "Components",
      description: "Build encapsulated components that manage their state."
    },
    {
      image: {
        src: singleIcon,
        alt: "Single-Way Icon",
      },
      title: "Single-Way",
      description: "A set of immutable values are passed to the components."
    },
    {
      image: {
        src: jsxIcon,
        alt: "JSX Icon",
      },
      title: "JSX",
      description: "Statically typed. designed to run on modern browsers"
    },
  ];

  return (
    <div className="App">
      <Navbar></Navbar>
      <Section 
      title="Say Hello to ReactJs" 
      description="You will learn to use<br/>
      the most popular frontend library,<br/>
      and become a super ninja developer."
      button={{ callback: (e) => console.log(e.currentTarget.innerText), content: "Awesome!" }}
      />
      <div className='features-container'>
        {features.map((feature) => <Feature {...feature} />)}
      </div>
    </div>
  )
}

export default App
