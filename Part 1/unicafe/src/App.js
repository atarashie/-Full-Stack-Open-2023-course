import './App.css';
import { useState, useEffect } from 'react';

const FeedBackBtn = ({setRating, name}) =>{
  return(
    <div>
        <button onClick={setRating}>{name}</button>
    </div>
  )
}

const Statistics = ({name, value, symbol}) =>{
  
  return(
    
    <tr>
      <td>{name}</td>
      <td>{value}{symbol} </td>
    </tr>
    
    )
  
}

function App() {

  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [total, setTotal] = useState(0)
  const [avg, setAvg] = useState(0)
  const [positive, setPositive] = useState(0)
 
  //use Effect hook to calculate statistic based on the actual updated Values
  //Function happens everytime 'good', 'bad' or 'neutral' value changes
   useEffect(() => {
    
    average()
    calculatePositive()

  }, [good, bad, neutral]);


  const goodRating = () => {
    setGood(good + 1)
  
    setTotal(total => total + 1)
    
  }

  const badRating = () => {
    setBad(bad + 1)
    setTotal(total => total + 1)
  }

  const neutralRating = () => {
    setNeutral(neutral + 1)
    setTotal(total => total + 1)
  }
  
  const average = () => {
    
    let currentAvg = ((good - bad) / total).toFixed(2)

    if (!isNaN(currentAvg)) {

      setAvg(currentAvg)
    }
    
  }
  const calculatePositive = () =>{
    let currentPositive = (good / total).toFixed(2)
    
    if (!isNaN(currentPositive)) {
      setPositive(currentPositive)
    }
    
  }

  return (
    <div className="App">
      <h1>Give feedback!</h1>

      <div className="buttons">
        <FeedBackBtn setRating = {goodRating} name = "good" />
        <FeedBackBtn setRating = {neutralRating} name = "neutral" />
        <FeedBackBtn setRating = {badRating} name = "bad" />
        
      </div>

      <h1>Statistics</h1>

      {/* conditional Rendering based on the value of Total */}

      {total > 0 ? ( 
      <table className='statistics'> 
        <tbody>
          <Statistics name = "good" value = {good}/>
          <Statistics name = "neutral" value = {neutral}/>
          <Statistics name = "bad" value = {bad}/>

          <Statistics name = "total" value = {total} />
          <Statistics name = "average" value = {avg} />
          <Statistics name = "positive" value = {positive} symbol = '%' />
        </tbody>
      </table>
      ) : (
      <div className='statistics'>
        <p>no feedback given</p>
      </div>

      )
      }
      
    </div>

  );
}

export default App;
