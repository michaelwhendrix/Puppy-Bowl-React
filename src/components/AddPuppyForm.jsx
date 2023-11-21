import { useState } from "react"
import AddPuppy from "./AddPuppy"

const AddPuppyForm = () => {
const [newPuppyName, setNewPuppyName] =useState('')
const [newPuppyBreed, setNewPuppyBreed] =useState('')
const [newPuppyStatus, setNewPuppyStatus] =useState('')
const [newPuppyImageUrl, setNewPuppyImageUrl] =useState('')
const [newPuppyTeamId, setNewPuppyTeamId] =useState(null)
const [newPuppy, setNewPuppy] =useState({})

    return (
        <>
            <h2>Add Puppy</h2>
            <form>
                <label>Name:
                    <input type="text" onChange={(event) => 
                    setNewPuppyName(event.target.value)}></input>
                </label>
                <label>Breed:
                    <input type="text" onChange={(event) =>                setNewPuppyBreed(event.target.value)}></input>
                </label>
                <label>Status:
                    <select onChange={(event) =>                setNewPuppyStatus(event.target.value)}>
                        <option value={'bench'}>Bench</option>
                        <option value={'field'}>Field</option>
                    </select>
                </label>
                <label>Image URL:
                    <input type="text" onChange={(event) =>                setNewPuppyImageUrl(event.target.value)}></input>
                </label>
                <label>TeamID:
                    <input type="number" onChange={(event)=>               setNewPuppyTeamId(event.target.value)}></input>
                </label>
                <button onClick={(event)=>{
                    event.preventDefault()
                    console.log(newPuppyName)
                    AddPuppy(newPuppyName,
                            newPuppyBreed,
                            newPuppyStatus,
                            newPuppyImageUrl,
                            newPuppyTeamId)
                } }>Add</button>
            </form>
        </>


    )
}

export default AddPuppyForm