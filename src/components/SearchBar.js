import axios, { AxiosError } from "axios";
import { useState } from 'react';
import { Oval } from 'react-loading-icons';

export default function SearchBar(props) {

    const [badEntry, setBadEntry] = useState(false);
    
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
    
    return (
        <>
            <div className="flex flex-col items-center mt-10 h-1/6">
                <h1 className="text-5xl font-gilroy">Search for a Collection</h1>
                <section className="flex items-end justify-center w-full h-1/2">
                    <input className={`w-2/5 h-12 text-center placeholder-gray-500 placeholder-opacity-50 rounded-2xl ${badEntry ? 'border-red-500 bg-red-400 opacity-30 border-2' : ''}`} placeholder="Cryptoon Goonz" type="text" ref={props.searchRef}></input>
                    {
                    props.loading ? 
                    <Oval 
                    stroke="#98ff98"
                    className="ml-3"
                    /> :
                    <button className="w-20 h-10 mb-2 ml-4 mr-2 text-sm font-medium text-center rounded-lg shadow-lg bg-gradient-to-tr from-gray-200 to-indigo-200 hover:bg-gradient-to-bl focus:outline-none focus:ring-blue-300 shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 " onClick={handleSubmit}>Search</button> 
                    }
                    
                </section>
                
            </div>
        </>
    )
};

