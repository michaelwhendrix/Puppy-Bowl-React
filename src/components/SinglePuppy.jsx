import { useEffect, useState } from "react"


const SinglePuppy = ({singlePuppyId, setSinglePuppyId}) => {
    const [singlePuppyDetails, setSinglePuppyDetails] = useState({})


useEffect(()=> {

    const getSinglePuppyDetails = async () => {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players/${singlePuppyId}
        `)
        const responseJson = await response.json()
        setSinglePuppyDetails(responseJson.data.player)


    }
getSinglePuppyDetails()
},[])

return (

    <>
        <button onClick={()=> {
            setSinglePuppyId(null)
        }}>Back</button>
        <h2>Name: {singlePuppyDetails.name}</h2>
        <h2>Breed: {singlePuppyDetails.breed}</h2>
        <h2>Status: {singlePuppyDetails.status}</h2>
        <img src={singlePuppyDetails.imageUrl} alt="puppy image" height={'500px'} width={'400px'}/>
        {singlePuppyDetails.teamId && <h2>Team: {singlePuppyDetails.team.name}</h2>}
        <h2>Teammates:</h2>
        <ul>
        {singlePuppyDetails.teamId  && singlePuppyDetails.team.players.map((teammate) => {
            return (
                <li key={teammate.id}>{teammate.name}</li>
            )
        })}

        </ul>
    </>
)


}
export default SinglePuppy