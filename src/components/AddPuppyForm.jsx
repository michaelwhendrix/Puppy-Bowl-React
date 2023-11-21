import { useState } from "react"
import AddPuppy from "./AddPuppy"

const AddPuppyForm = () => {
const [newPuppyName, setNewPuppyName] =useState('Rufus')
const [newPuppyBreed, setNewPuppyBreed] =useState('Cocker Spaniel')
const [newPuppyStatus, setNewPuppyStatus] =useState('bench')
const [newPuppyImageUrl, setNewPuppyImageUrl] =useState('https://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_0/cw_1012/ch_1518/APL/uploads/2019/12/Kenny-PBXVI.jpg')
const [newPuppyTeamId, setNewPuppyTeamId] =useState(1)

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
                        <option value={'bench'}></option>
                        <option value={'bench'}>Bench</option>
                        <option value={'field'}>Field</option>
                    </select>
                </label>
                <label>Image URL:
                    <input type="text" onChange={(event) =>                setNewPuppyImageUrl(event.target.value)}></input>
                </label>
                <label>TeamID:
                    <input type="number" onChange={(event)=>               setNewPuppyTeamId(event.target.value)}
                    min={'1'} max={'4'}></input>
                </label>
                <button onClick={(event)=>{
                    event.preventDefault()
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