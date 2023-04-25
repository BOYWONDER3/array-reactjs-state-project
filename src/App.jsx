import { useState } from "react"

const INITIAL_VALUE = ['A', 'B', 'C']

function App() {
  const [array, setArray] = useState(INITIAL_VALUE)
  const [value, setValue] = useState('')

  function removeFirstElement() {
    setArray(currentArray => {
      return currentArray.slice(1)
    })
  }

  function removeSpecificLetter(letter) {
    setArray(currentArray => {
      return currentArray.filter(element => element !== letter)
    })
  }

  function addLetterToStart(letter) {
    setArray(currentArray => {
      return [letter, ...currentArray]
    })
  }

  function addLetterToEnd(letter) {
    setArray(currentArray => {
      return [...currentArray, letter]
    })
  }

  function clear() {
    setArray([])
  }

  function reset() {
    setArray(INITIAL_VALUE)
  }

  function updateAToH() {
    setArray(currentArray => {
      return currentArray.map(element => {
        if (element === 'A') return 'H'
        return element
      })
    })
  }

  function addLettterAtIndex(letter, index) {
    setArray(currentArray => {
      return [currentArray.slice(0, index), letter, currentArray.slice(index)]
    })
  }


  return (
  <div>
  <button onClick={removeFirstElement}>Remove First Element</button>
  <br></br>
  <button onClick={() => removeSpecificLetter("B")}>Remove all B's</button>
  <br></br>
  <button onClick={() => addLetterToStart("B")}>Add to start</button>
  <br></br>
  <button onClick={() => addLetterToEnd("Z")}>Add to end</button> 
  <br></br>
  <button onClick={clear}>Clear</button>
  <br></br>
  <button onClick={reset}>Reset</button>
  <br></br>
  <button onClick={updateAToH}>Update A to H</button>
  <br></br>
  <button onClick={() => addLettterAtIndex('C', 2)}>Add C at 2</button>
  <br></br>
  <input value={value} onChange={e => setValue(e.target.value)}/>
  <br></br>
  <button onClick={() => addLetterToStart(value)}>Add value to array</button>
  <br></br>
  {array.join(", ")}
  </div>
  )
}

export default App
