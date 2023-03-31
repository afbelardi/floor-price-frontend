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
        } catch (error) {
            console.error(error)
        }
        
    }
    return (
        <>
            <div className="h-1/4 flex justify-center items-center">
                <input className="w-2/5 text-center placeholder-gray-500 placeholder-opacity-50 rounded-2xl h-12" placeholder="Cryptoon Goonz" type="text" ref={props.searchRef}></input>
                <button className="ml-4 w-20 h-10 rounded-md bg-slate-500" onClick={handleSubmit}>TEST</button>
            </div>
        </>
    )
};

