import { useState } from 'react'

const Title = ({title}) => {
  return(
    <div>
      <h1>{title}</h1>
    </div>
  )
}

const Button = ({onClick, text}) =>{
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticsLine = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) =>{
  const calcAverage = (a, b ,c ) => {
    if (a+b+c !== 0) {
      return (a-c)/(a+b+c)
    }
  }
  const calcPositive = (a, b ,c) => {
    if (a+b+c !== 0) {
      return a*100/(a+b+c)
    } else {
      return 0
    }
  }

  if (good + neutral + bad === 0 ) {
    return (
      <div>
        No feedback given
      </div>
    )
  } else {
    return (
      <table>
        <tbody>
          <StatisticsLine text={'good'} value={good} />
          <StatisticsLine text={'neutral'} value={neutral} />
          <StatisticsLine text={'bad'} value={bad} />
          <StatisticsLine text={'all'} value={good + neutral + bad } />
          <StatisticsLine text={'average'} value={calcAverage(good, neutral, bad)}/>
          <StatisticsLine text={'positive'} value={calcPositive(good, neutral, bad)+' %'}/>
        </tbody>
      </table>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

   return (
    <div>
      <Title title={'give feedback'} />
      <Button onClick={() => setGood(good+1)} text={'good'} />
      <Button onClick={() => setNeutral(neutral+1)} text={'neutral'} />
      <Button onClick={() => setBad(bad+1)} text={'bad'} />
      <Title title={'statistics'} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App