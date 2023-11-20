import { useState } from 'react'
import './App.css'
import AllPuppies from './components/AllPuppies'
import SinglePuppyDetails from './components/SinglePuppy'

function App() {
  const [singlePuppyId, setSinglePuppyId] = useState(null)

  return (
    <>
    <h1>Puppy Bowl Roster</h1>
    {singlePuppyId?
      <SinglePuppyDetails singlePuppyId={singlePuppyId}/> :
      <AllPuppies setSinglePuppyId={setSinglePuppyId}/>}
    </>
  )
}

export default App
