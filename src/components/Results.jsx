import "/src/assets/styles/Results.css";
import Card from "/src/components/Card";

function Results({data})
{
    return (
        <ul id="results">
	    {
                data.sort((a, b) => {
		    if(a.strDrink > b.strDrink)
		    {
                        return 1;
		    }else if(a.strDrink < b.strDrink)
		    {
                        return -1;
		    }else{
                        return 0;
		    }
		}).map((item, index) => {
                    return <li key={`item-${index}`}><Card data={item}/></li>;
		})
	    }
	</ul>
    );
}

export default Results;
