 import { useState } from 'react'

const Title = ({title}) => {
  return(
    <h1> {title} </h1>
  )
}

const Display = ({text}) => {
  return(
    <div>
      {text}
    </div>
  )
}

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const initialVotes = Array(7).fill(0)
  const [votes, setVotes] = useState(initialVotes)
 

 const nextAnecdote = () => {
    setSelected(Math.floor(Math.random()*7))
    console.log(votes)
    console.log(maxValueIndex(votes))
  }

  const giveVote = () => {
    const updateVotes = votes.map((item, index) => {
      if (index === selected) {
        return item + 1
      }
      return item;
    })
    setVotes(updateVotes)
  }

  const maxValueIndex = (array) => {
    let maxIndex = 0;
    let max = array[0]
     for(let i = 0; i < array.length ; i++ ) {
       if (array[i] > max) {
         maxIndex = i;
         max = array[i]
       }
     }
    return maxIndex;
   }

  return (
    <div>
      <Title title={'Anecdote of the day'} />
      <Display text={anecdotes[selected]} />
      <Display text={`has ${votes[selected]} votes`} />
      <Button onClick={giveVote} text={'vote'}/>
      <Button onClick={nextAnecdote} text={'next anecdote'}/>
      <Title title={'Andecdote with most votes'} />
      <Display text={anecdotes[maxValueIndex(votes)]} />
      <Display text={`has ${votes[maxValueIndex(votes)]} votes`} />
    </div>
  )
}

export default App