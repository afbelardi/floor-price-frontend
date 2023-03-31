import axios from "axios";

export default function SearchBar(props) {

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:8000/search', {
                searchTerm: props.searchRef.current.value
            }
          );
          console.log(response.data)
          props.setSearchedCollection(response.data);
          props.setWasSearched(true)
        } catch (error) {
            console.error(error)
        }
        
    }
    return (
        <>
            <div className="flex items-center justify-center h-1/4">
                <input className="w-2/5 h-12 text-center placeholder-gray-500 placeholder-opacity-50 rounded-2xl" placeholder="Cryptoon Goonz" type="text" ref={props.searchRef}></input>
                <button className="w-20 h-10 ml-4 rounded-md bg-slate-500" onClick={handleSubmit}>TEST</button>
            </div>
        </>
    )
};

