import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImage from './api';
const App = () => {
    const [Image,setImage] = useState([]);
    const handleSubmit = async (term) => {
        const results = await searchImage(term);
        setImage(results);
    }
    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList Image={Image}/>
        </div>
    )
}

export default App;