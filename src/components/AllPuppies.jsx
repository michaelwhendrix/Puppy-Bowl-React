import { useEffect, useState } from "react"


const AllPuppies = () => {
    const [allPuppiesRoster, setAllPuppiesRoster] = useState([])

    useEffect(()=> {
        const getAllPuppies = async () => {
            const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players
            `)
            const responseJson = await response.json()
            setAllPuppiesRoster(responseJson.data.players)
            console.log(allPuppiesRoster)

        }
        getAllPuppies()
    },[])
    return (
        <>
          {allPuppiesRoster && allPuppiesRoster.map((singlePuppy) => {
            return <div key={singlePuppy.id}> 
                        <p>{singlePuppy.name}</p>    
                    </div>
          })}  
        </>

    )
}
export default AllPuppies