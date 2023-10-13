import { useState } from "react";
const SearchBar = ({onSubmit}) =>{
    const [term, setTerm] = useState('');
    const handlForSubmit = (event) =>{
        event.preventDefault();
        onSubmit(term);
        setTerm('');
    }
    const handInput =(event) =>{
        setTerm(event.target.value);
    }
    return(
        <div>
            <form onSubmit={handlForSubmit}>
                <input value= {term} onChange={handInput} />
            </form>
        </div>
    )
}

export default SearchBar;