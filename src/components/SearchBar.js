import axios, { AxiosError } from "axios";
import { useState } from 'react';
import { Oval } from 'react-loading-icons';

export default function SearchBar(props) {

    const [badEntry, setBadEntry] = useState(false);
    const [hasTyped, setHasTyped] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { searchRef, setLoading, setWasSearched, setSearchedCollection } = props;
            setLoading(true)
        if (searchRef.current.value === '') {
            setBadEntry(true)
            setLoading(false)
        } else {
            setBadEntry(false)
            try {
                const response = await axios.post('http://localhost:8000/search', {
                      searchTerm: props.searchRef.current.value
                  }
                ); 
                setWasSearched(true)
                setSearchedCollection(response.data);
                setLoading(false)
              } catch (error) {
                  console.error(error)
              }
        }
        
    }

    const handleInput = () => {
        setHasTyped(true)
    }
    
    const inputClass = `w-2/5 h-12 text-center focus:outline-none placeholder-gray-500 placeholder-opacity-50 rounded-2xl ${badEntry ? 'border-red-500 bg-red-400 placeholder-slate-700 opacity-30 placeholder-opacity-100 border-2' : ''} ${hasTyped ? 'bg-white border-none' : ''}`

   
    
    return (
        <>
            <div className="flex flex-col items-center bg-black mt-28 h-2/6">
                <h1 className="text-3xl text-white font-gilroy whitespace-nowrap">Search for a Collection</h1>
                <section className="flex items-end justify-center w-full h-1/2">
                    <input className={inputClass} onChange={handleInput} placeholder="Cryptoon Goonz" type="text" ref={props.searchRef}></input>
                    {
                    props.loading ? 
                    <Oval 
                    stroke="#98ff98"
                    className="ml-3"
                    /> :
                    <button className="w-20 h-10 mb-1.5 ml-4 font-gilroy text-sm font-medium text-center rounded-lg shadow-lg bg-gradient-to-tr from-gray-200 to-indigo-200 hover:bg-gradient-to-bl focus:outline-none shadow-slate-500/50" onClick={handleSubmit}>Search</button> 
                    }
                    
                </section>
                
            </div>
        </>
    )
};

