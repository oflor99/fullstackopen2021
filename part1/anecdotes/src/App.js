import React, { useState } from 'react'

const Anecdote = (props) => {
  return(
    <div>
      <p>{props.quote}</p>
      <p>Total votes: {props.totalVotes}</p>
    </div>
  )
}

const Winner = ({anecdotes, allVotes}) => {
  const highestVoteCount = Math.max(...allVotes)
  const winnerIndex = allVotes.indexOf(highestVoteCount)
  const winner = anecdotes[winnerIndex]
  if (highestVoteCount === 0) {
    return (
      <p>No votes yet</p>
    )
  }

  return (
    <div>
      <p>{winner}</p>
      <p>has {highestVoteCount} votes</p>
    </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [allVotes, setVotes] = useState([0,0,0,0,0,0,0])

  const updateVotes = () => {
    const votesCopy = [...allVotes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }

  const newAnecdote = () => {
    const newIndex = Math.floor(Math.random() * 7)
    setSelected(newIndex)
  }

  return (
    <div>
      <h1>Anecdote of the day: </h1>
      <Anecdote quote = {anecdotes[selected]} totalVotes = {allVotes[selected]}/>
      <button onClick = {newAnecdote}>New</button>
      <button onClick={updateVotes}>Vote</button>

      <h2>Anecdote with the most votes:</h2>
      <Winner anecdotes = {anecdotes} allVotes = {allVotes}/>
    </div>
  )
}

export default App