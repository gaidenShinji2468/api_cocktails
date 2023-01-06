import "/src/assets/styles/Card.css";

function Card({data})
{
    return (
        <article id="item">
	    <figure>
                <img src={data.strDrinkThumb} alt={`This is a ${data.strDrink} image`}/>
	        <figcaption><h2>{data.strDrink}</h2></figcaption>
	    </figure>
	    <p>{data.strInstructions}</p>
	</article>
    );
}

export default Card;
