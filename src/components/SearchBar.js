import axios from "axios";
import { useState } from 'react';
import { Oval } from 'react-loading-icons';

export default function SearchBar(props) {

    const [badEntry, setBadEntry] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:8000/search', {
                searchTerm: props.searchRef.current.value
            }
          );
          if (response.status === 200) {
            props.setWasSearched(true)
          }
          console.log(response.data)
          props.setSearchedCollection(response.data);
          
          props.setLoading(false)
          if (response.data === 'No Collection Provided') {
            setBadEntry(true) 
          }
        } catch (error) {
            console.error(error)
        }
    }
    
    const changeLoading = () => {
        props.setLoading(true)
    }
    
    return (
        <>
            <div className="flex items-center justify-center h-1/6">
                <input className={`w-2/5 h-12 text-center placeholder-gray-500 placeholder-opacity-50 rounded-2xl ${badEntry ? 'border-red-500 bg-red-400 opacity-30 border-2' : ''}`} placeholder="Cryptoon Goonz" type="text" ref={props.searchRef}></input>
                {
                   props.loading ? 
                   <Oval 
                   stroke="#98ff98"
                   className="ml-3"
                   /> :
                   <button className="w-20 h-10 ml-4 rounded-md bg-slate-500" onClick={(e) => {handleSubmit(e); changeLoading()}}>Search</button> 
                }
                
            </div>
        </>
    )
};

