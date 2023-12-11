import { useState } from 'react'

import './App.css'

function App() {
  
  const [ state, setState] = useState("")



  
  return (<>
  <form action="">
  <input id="calc-input" type = "text" value = {state}/>
  <div>
  <input class ="text-button" type = "text" value = "Clear"/>
  <input class ="text-button" type = "text" value = "Delete"/>

  </div>
    <div id= "fourth-button-set">
      <input class = "calc-button" type="button" value ="7" onClick = {e => setState(state + e.target.value)}/>
      <input class = "calc-button" type="button" value ="8" onClick = {e => setState(state + e.target.value)}/>
      <input class = "calc-button"type="button" value ="9" onClick = {e => setState(state + e.target.value)}/>
      <input class = "special-calc-button" type="button" value ="/" onClick = {e => setState(state + e.target.value)}/>
    </div>
    <div id= "third-button-set">
      <input class = "calc-button" type="button" value ="4" onClick = {e => setState(state + e.target.value)}/>
      <input class = "calc-button" type="button" value ="5" onClick = {e => setState(state + e.target.value)}/>
      <input class = "calc-button" type="button" value ="6" onClick = {e => setState(state + e.target.value)}/>
      <input class = "special-calc-button" type="button" value ="*" onClick = {e => setState(state + e.target.value)}/>

    </div>
    <div id= "second-button-set">
      <input class = "calc-button" type="button" value ="1" onClick = {e => setState(state + e.target.value)}/>
      <input class = "calc-button" type="button" value ="2" onClick = {e => setState(state + e.target.value)}/>
      <input class = "calc-button" type="button" value ="3" onClick = {e => setState(state + e.target.value)}/>
      <input class = "special-calc-button" type="button" value ="-" onClick = {e => setState(state + e.target.value)}/>
    </div>
    <div id= "first-button-set">
      <input class = "calc-button" type="button" value ="0" onClick = {e => setState(state + e.target.value)}/>
      <input class = "special-calc-button" type="button" value ="." onClick = {e => setState(state + e.target.value)}/>
      <input class = "special-calc-button" type ="button" value ="=" onClick = {e => setState(eval(state))}/>
      <input class = "special-calc-button" type="button" value ="+" onClick = {e => setState(state + e.target.value)}/>
    </div>
  </form>
  </>
  )
}

export default App
