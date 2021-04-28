import { createStore } from "redux"
import ReactDOM from "react-dom";

const initialState = 0
const reduce = (state = initialState, action) => {
  if (action.type === "add") {
    return state + 1
  }
  if (action.type === "remove") {
    return state - 1
  }
  if (action.type === "devide") {
    return state / 2
  }
  if (action.type === "multiplay") {
    return state * 2
  }
  return state
}

const store = createStore(reduce)

store.subscribe(() => {
  ReactDOM.render(
    <div>
      <h1>{store.getState()}</h1>
      <button onClick={() => store.dispatch({ type: "add" })}>+</button>
      <button onClick={() => store.dispatch({ type: "remove" })}>-</button>
      <button onClick={() => store.dispatch({ type: "devide" })}>/</button>
      <button onClick={() => store.dispatch({ type: "multiplay" })}>*</button>


    </div>
    , document.getElementById("root"))

})
ReactDOM.render(
  <div>
    <h1>{store.getState()}</h1>
    <button onClick={() => store.dispatch({ type: "add" })}>+</button>
    <button onClick={() => store.dispatch({ type: "remove" })}>-</button>
    <button onClick={() => store.dispatch({ type: "devide" })}>/</button>
      <button onClick={() => store.dispatch({ type: "multiplay" })}>*</button>

  </div>
  , document.getElementById("root"))










