import React, {useState} from 'react'
const Quarter = (props) =>{
    const [quarter, setQuarter] = useState(1);
    function changeQuarter(quarter){
      if (quarter == 4){
        return  quarter = 1;
      }
      return  quarter + 1;
    }
    return (
        <button className="homeButtons__fieldGoal" onClick={() => setQuarter(changeQuarter(quarter))}>Next Quarter</button>
      
    )
}
export {Quarter};