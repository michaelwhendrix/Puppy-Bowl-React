import { useEffect, useState } from "react"


const AllPuppies = ({setSinglePuppyId}) => {
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
        <section className="main-window">
            {allPuppiesRoster && allPuppiesRoster.map((singlePuppy) => {
                return <div className={'puppy-card'} onClick={()=> {setSinglePuppyId(singlePuppy.id)}} key={singlePuppy.id}> 
                            <p>{singlePuppy.name}</p> 
                            <img src={singlePuppy.imageUrl} alt="cute puppy" height={'200px'} width={'180px'}/> 
                        </div>
          })}  

        </section>
        </>

    )
}
export default AllPuppies