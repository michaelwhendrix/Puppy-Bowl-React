import AddPuppy from "./AddPuppy"


const AddPuppyForm = () => {


    return (
        <>
            <h2>Add Puppy</h2>
            <form>
                <label>Name:
                    <input type="text"></input>
                </label>
                <label>Breed:
                    <input type="text"></input>
                </label>
                <label>Status:
                    <select>
                        <option value={'bench'}>Bench</option>
                        <option value={'field'}>Field</option>
                    </select>
                </label>
                <label>Image URL:
                    <input type="text"></input>
                </label>
                <label>TeamID:
                    <input type="number"></input>
                </label>
                <button onClick={()=> AddPuppy()}>Add</button>
            </form>
        </>


    )
}

export default AddPuppyForm