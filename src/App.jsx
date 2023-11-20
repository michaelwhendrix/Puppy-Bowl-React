import { useState } from 'react'
import './App.css'
import AllPuppies from './components/AllPuppies'
import SinglePuppyDetails from './components/SinglePuppy'
import AddPuppyForm from './components/AddPuppyForm'

function App() {
  const [singlePuppyId, setSinglePuppyId] = useState(null)

  return (
    <>
    <h1>Puppy Bowl Roster</h1>
    {singlePuppyId?
      <SinglePuppyDetails singlePuppyId={singlePuppyId} setSinglePuppyId={setSinglePuppyId}/> :
      <div>
        <AddPuppyForm/>
        <AllPuppies setSinglePuppyId={setSinglePuppyId}/>
      </div>}
    </>
  )
}

export default App
