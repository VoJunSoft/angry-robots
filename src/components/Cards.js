import React from 'react';
import Card from './Card.js';


const Cards = ({robots}) => {
    return(
    <div className="bg-purple" style={{overflow:'scroll', border:'0px solid black', height:'800px'}}>
       {
        robots.map((user, i) => {
            return(    
                <Card 
                Key={i}
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email} 
                />
            );
        }) 
       }
    </div>
    );
}

export default Cards;