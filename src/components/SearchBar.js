import { useRef } from "react";
import axios from "axios";

export default function SearchBar(props) {

    
    
    const handleSubmit = async (e) => {
        const requestBody = {
            searchTerm: props.searchRef.current.value
        }
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:8000/search', requestBody);
          console.log(response.data)
        } catch (error) {
            console.error(error)
        }
        
    }
    return (
        <>
            <div className="h-1/4 bg-red-300 flex justify-center items-center">
                <input className="w-3/5 text-center placeholder-indigo-900  rounded-3xl h-12" placeholder="Cryptoon Goonz" type="text" ref={props.searchRef}></input>
                <button onClick={handleSubmit}>TEST</button>
            </div>
        </>
    )
};

