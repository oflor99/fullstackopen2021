import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Filter component 
const Filter = ({filterNames}) => {
  return(
    <div>
    name: <input onChange={filterNames}/>
    </div>
  )
}

// PersonForm component
const PersonForm = ({handleName, handleNumber, addNewPerson}) => {
  return(
    <form>
      <div>
        <h2>add new</h2>
          name: <input onChange={handleName}/>
      </div>
      <div>
        number: <input onChange={handleNumber}/>
      </div>
      <div>
        <button type="submit" onClick={addNewPerson}>add</button>
      </div>
    </form>
  )
}

// Persons component
const Persons = ({people}) => {
  return(
    <ul>  
      {people.map(person =><li key={person.id}>{person.name}  ({person.number})</li>)}
    </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [showAll, setShowAll] = useState(true)

  const handleName = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const filterNames = (event) => {
    if (event.target.value !== '') {
      setShowAll(false)
      setFilterName(event.target.value)
    } else {
      setShowAll(true)
    }
  }
  

  // Retrieve people from db.json
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then(res => setPersons(res.data))
  }, []);
  

  const people = showAll ? persons : persons.filter(p => p.name.includes(filterName))

  const addNewPerson = (event) => {
    event.preventDefault()
    // Checks if name already exists
    if (persons.map(p => p.name).includes(newName)) {
      alert(`${newName} already exists on the phonebook!`)
    } 
    else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(newPerson))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterNames={filterNames}/>

      <PersonForm handleName = {handleName} handleNumber = {handleNumber} addNewPerson={addNewPerson}/>

      <h2>Numbers</h2>

      <Persons people = {people}/>
    </div>
  )
}

export default App