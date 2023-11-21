

const AddPuppy = async(name, breed, status,imageUrl,teamId) => {
    try {
        const response = await fetch(
          'https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: name,
              breed: breed,
              status: status,
              imageUrl: imageUrl,
              teamId: teamId
            }),
          }
        );
        const result = await response.json();
        console.log(result);
        if(result.success) alert("New Puppy Successfully Added. Please Refresh The Page")
      } catch (err) {
        console.error(err);
      }

}
export default AddPuppy