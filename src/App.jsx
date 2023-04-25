import { useState } from "react"

function App() {
  const [array, setArray] = useState(['A', 'B', 'C'])

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
  {array.join(", ")}
  </div>
  )
}

export default App
