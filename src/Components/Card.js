import React from "react";
import 'tachyons';
import { robots } from '../robots'
const Card= ({id,name,email}) =>{
     
    return(
    
        <div className="bg-light-green dib br3 pa3 ma2 grow br2 shadow-5">
        <img src={`https://www.robohash.org/${id}?200x200`} alt='robots'></img>

        <h2>{name}</h2>
        <p>{email}</p>
        </div>

    );
}
export default Card;
