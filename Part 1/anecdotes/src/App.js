import './App.css';
import { useEffect, useState } from 'react';

const Btn = ({name, func}) => {
  return (
    <button onClick={func}>{name}</button>
  )
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length))
  const [voteArray, setVoteArray] = useState(Array(anecdotes.length).fill(0))
  const [mostVotesIndex, setMostVotesIndex] = useState(0)

  useEffect(() => {
    mostVotes()
  }, [voteArray])

  const getAnecdote = () =>{
    let random = Math.floor(Math.random() * anecdotes.length)

    setSelected(random)
  }

  const addVote = () =>{
    const copy = [...voteArray]
    copy[selected] += 1
    setVoteArray(copy)
    
    //console.log(copy)
  }

  const mostVotes = () =>{

    const mostVotes = Math.max(...voteArray)

    console.log(mostVotes)
    const index = voteArray.indexOf(mostVotes)
    setMostVotesIndex(index)
   
  }

  return (
    <div className="App">
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
       <Btn name = "Generate" func = {getAnecdote}/>
       <Btn name = "Vote" func = {addVote}/>
       <p>Votes: {voteArray[selected]}</p>

       {mostVotesIndex === 0 ? (
      <div>
        <h1>Anecdote with most votes</h1>
        <p>not enough votes</p>
      </div>
    ) : (
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[mostVotesIndex]}</p>
      </div>
)}
    </div>
  );
}

export default App;
