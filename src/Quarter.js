import React, {useState} from 'react'
const Quarter = () =>{
    const [quarter, setQuarter] = useState(1);
    function decreaseQuarter(quarter){
      if (quarter <=1){
        return  quarter = 1;
      }
      return  quarter - 1;
    }
  
    function increaseQuarter(quarter){
      if (quarter >= 3){
        return quarter = 4;
      }
      return  quarter + 1;
    }
    return (
        <div>
        <button className="homeButtons__fieldGoal" onClick={() => setQuarter(decreaseQuarter(quarter))}>Decrease Quarter</button>
        <button className="homeButtons__fieldGoal" onClick={() => setQuarter(increaseQuarter(quarter))}>Increase Quarter</button>
        </div>
    )
}

export {Quarter} 