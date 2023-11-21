

const AddPuppy = async(name, breed, status,imageUrl,teamId) => {
    console.log(name)
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
      } catch (err) {
        console.error(err);
      }


}
export default AddPuppy