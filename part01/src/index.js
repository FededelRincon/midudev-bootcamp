import React from 'react'
import ReactDOM from 'react-dom'

//const Title = ({course}) => <h1>{course}</h1>
const Title = ({course}) => {
    return (<h1>{course}</h1>)
}

const Paragraph = ({contenido, numero}) => {
    return <p>{contenido}{numero}</p>
}

const AddingNumbers = ({element1, element2, element3}) => {
    return <p>Number of exercise { element1 + element2 + element3}</p>
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React '
  const exercises1 = 10
  const part2 = 'Using props to pass data '
  const exercises2 = 7
  const part3 = 'State of a component '
  const exercises3 = 14

  return (
    <div>
        {/* esto es lo hecho con Title */}
      <h1>{course}</h1>
      <Title course={course} />
  
        {/* Esto es hecho con para Paragraph */}
      <Paragraph contenido={part1} numero={exercises1}/>
      <p>
        {part1} {exercises1}
      </p>
      <br/>

        <Paragraph contenido={part2} numero={exercises2}/>
      <p>
        {part2} {exercises2}
      </p>
      <br/>

        <Paragraph contenido={part3} numero={exercises3} />
      <p>
        {part3} {exercises3}
      </p>
      <br/>
      
      <AddingNumbers element1={exercises1} element2={exercises2} element3={exercises3} />
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))