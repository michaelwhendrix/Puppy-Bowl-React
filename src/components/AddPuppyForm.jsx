import { useState } from "react"


const AddPuppyForm = () => {
const [newPuppy, setNewPuppy] =useState({})

    return (
        <>
            <h2>Add Puppy</h2>
            <form>
                <label>Name:
                    <input type="text" id="name"></input>
                </label>
                <label>Breed:
                    <input type="text" id="breed"></input>
                </label>
                <label>Status:
                    <select id="status">
                        <option value={'bench'}>Bench</option>
                        <option value={'field'}>Field</option>
                    </select>
                </label>
                <label>Image URL:
                    <input type="text" id="imagUrl"></input>
                </label>
                <label>TeamID:
                    <input type="number" id="teamId"></input>
                </label>
                <button id="form-button">Add</button>
            </form>
        </>


    )
}

export default AddPuppyForm