import axios from 'axios';

const searchImage = async (term) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID 7Gg2k2qoi9XnWAld7nFRo2BZvqqEldE8QIIPokezn3g'
        },
        params:{
            query: term
        }
    });

    return response.data.results;
}

export default searchImage;
