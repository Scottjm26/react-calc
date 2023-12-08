import { useState } from 'react'

import './App.css'

function App() {
  
  const [ state, setState] = useState("")

function getValue(){
  e => setState(value+e.target.value)

}

  
  return (<>
  <form action="">
  <input id="calc-input" type = "text" value = {state}/>
    <div id= "fourth-button-set">
      <input type="button" value ="7" onClick = {e => setState(state + e.target.value)}/>
      <input type="button" value ="8" onClick = {e => setState(state + e.target.value)}/>
      <input type="button" value ="9" onClick = {e => setState(state + e.target.value)}/>
      <input type="button" value ="/" onClick = {e => setState(state + e.target.value)}/>
    </div>
    <div id= "third-button-set">
      <input type="button" value ="4" onClick = {e => setState(state + e.target.value)}/>
      <input type="button" value ="5" onClick = {e => setState(state + e.target.value)}/>
      <input type="button" value ="6" onClick = {e => setState(state + e.target.value)}/>
      <input type="button" value ="*" onClick = {e => setState(state + e.target.value)}/>

    </div>
    <div id= "second-button-set">
      <input type="button" value ="1" onClick = {e => setState(state + e.target.value)}/>
      <input type="button" value ="2" onClick = {e => setState(state + e.target.value)}/>
      <input type="button" value ="3" onClick = {e => setState(state + e.target.value)}/>
      <input type="button" value ="-" onClick = {e => setState(state + e.target.value)}/>
    </div>
    <div id= "first-button-set">
      <input type="button" value ="0" onClick = {e => setState(state + e.target.value)}/>
      <input type="button" value ="." onClick = {e => setState(state + e.target.value)}/>
      <input type ="button" value ="=" onClick = {e => setState(eval(state))}/>
      <input type="button" value ="+" onClick = {e => setState(state + e.target.value)}/>
    </div>
  </form>
  </>
  )
}

export default App
