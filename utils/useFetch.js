let data;

const useFetcher = async (q) => {
    
    const res = []
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'bayut.p.rapidapi.com\'',
          'X-RapidAPI-Key': 'b99b48515cmsh54337a353b46cf3p17310cjsn0f4ad1df1e72',
          'Content-Type': 'application/json'
        }
    };
      
    await fetch(`https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=${q && q != 0 ? q : 3}`, options)
    .then(response => response.json())
    .then((response) => {

        const v = []
        for(let z = 0; z < response.hits.length; z++) {
            const i = response.hits[z]
            res.push({
                _id: i.id,
                price: i.price,
                rooms: i.rooms,
                baths: i.baths,
                area: i.area,
                img: i.coverPhoto.url,
                owner: i.contactName,
                contact: i.phoneNumber.mobile,
                title: i._highlightResult.title.value,
                location: i.location[2].name
            })
        }
        data = res
    })  
    .catch(err => console.error(err));

    return data
}   

export default useFetcher