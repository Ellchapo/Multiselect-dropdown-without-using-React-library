import React from 'react'
import classes from './Multiselect.module.css'

const Multiselect = ({value,readonly}) => {

  let expanded = false;

function showCheckboxes() {
  let checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}
  return (
    <div>
        <form className={classes.form}>
  <div className={classes.multiselect}>
    <div className={classes.selectBox} onClick={showCheckboxes}>
      <select>
        <option>Select an option</option>
      </select>
      <div className={classes.overSelect}></div>
    </div>
    <div id="checkboxes">{ 
       readonly?( value.map((v)=>{
      return(<>
        <label htmlFor="one" className={classes.label}>
        <option  id="one" />{v}</label><br/>  </>
      )
      })): ( value.map( (v)=>{
        return(
          <>
          <label htmlFor="one" className={classes.label}>
          <input type="checkbox" id="one" />{v}</label><br/>
          </>
        )
      }))
       
     
      
    } 
    </div>
  </div>
</form>
    </div>
  )
}

export default Multiselect