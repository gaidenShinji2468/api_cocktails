import {
    useState,
    useEffect
} from "react";
import axios from "axios";
import {
    Search
} from "react-bootstrap-icons";

// Importaciones de usuario aqui
import "./assets/styles/ApiCocktails.css";
import Results from "./components/Results";
import Error404 from "./components/Error404";

function ApiCocktails()
{
    let [data, setData] = useState({});
    let [query, setQuery] = useState("");

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
	    .then(res => setData(res?.data))
	    .catch(err => console.log(err));
    }, [query]);

    const handleSubmit = event => {
	event.preventDefault();
        
	const value = event.target[0].value;
        	
	setQuery(value);
    }
    
    return (
        <div id="api-cocktails">
	    <form onSubmit={handleSubmit}>
	        <input 
	            id="query"
	            name="query"
	            type="text"
	            defaultValue={query}
	            placeholder="Into a drink name"
	        />
	        <button type="submit">
	            <Search size={12}/>
	        </button>  
	    </form>
	    {
 	        data?.drinks && <Results data={data.drinks}/> || <Error404/>
            }
	</div>
    );
}

export default ApiCocktails;
