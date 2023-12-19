// destructured object in props
import { useState } from "react";

function Card({id,image,info,price,name,removeTour}){

    const [readmore,setReadmore] = useState(false);

    const description = readmore? info : `${info.substring(0,200)}....`

    function readMoreHandler(){
        setReadmore(!readmore);
    }
 
    return(
        <div className="card">
            <img src={image} className="image"></img>

            <div className="tour-info">

            <div className="tour-details">
                <h4 className="tour-price">{price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>

            <div className="description">
                {description}
                <span className="read-more" onClick={readMoreHandler}>
                    {/* here ternary operator used if readmore true then show less otherwise show more */}
                    {readmore ? `show less` : `read more`}
                </span>
            </div>
            </div>
            
            <button className="btn-red" onClick={() => removeTour(id)}>
            {/* function is made in app.js as data file is there only */}
            Not Interested
            </button>

        </div>


    )
}

export default Card