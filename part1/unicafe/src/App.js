import React, { useState } from 'react'

const StatisticLine = ({text, value}) =>{
  return (
    <td>{text}: {value}</td>
  )
}

const Statistics = ({good, neutral, bad, totalVotes, average, positive}) => {

  if (totalVotes == 0){
    return (
      <div>
        <p>no statistics to show</p>
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <tr><StatisticLine text="good" value ={good} /></tr>
          <tr><StatisticLine text="neutral" value ={neutral} /></tr>
          <tr><StatisticLine text="bad" value ={bad} /></tr>
          <tr><StatisticLine text="all" value ={totalVotes} /></tr>
          <tr><StatisticLine text="average" value ={average} /></tr>
          <tr><StatisticLine text="positive" value ={positive} /></tr>
        </tbody>
      </table>
    </div>
  )
}

const Button = ({onClick, text}) => {
  return (
      <button onClick = {onClick}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // other stats based on voting results
  const totalVotes = good + neutral + bad
  const average = (good - bad) / totalVotes
  const positive = (good / totalVotes) * 100
  
  const voteGood = () => {
    setGood(good + 1)
  }

  const voteNeutral = () => {
    setNeutral(neutral + 1)
  }

  const voteBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick = {voteGood} text = "good" />
      <Button onClick = {voteNeutral} text = "neutral" />
      <Button onClick = {voteBad} text = "bad" />
      
      <h1>statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad} totalVotes = {totalVotes} average ={average} positive = {positive} />
    </div>
  )
}

export default App