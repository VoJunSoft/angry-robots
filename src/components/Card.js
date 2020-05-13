import React from 'react';

//const Card = ({id, name, email}) => {
//    return (
//        <div className='tc bg-light-green dib br3 ma2 grow shadow-5 pointer'>
//            <img alt='robot' src={`https://robohash.org/test${id}?150x150`}></img>
//            <div>
//            <h2>{name}</h2>
//            <p>{email}</p>
//            </div>
//        </div>
//    );
//}
const Card = (props) => {
    return (
        <div className='tc bg-light-green dib br3 ma2 grow shadow-5 pointer'>
            <img alt='robot' src={`https://robohash.org/test${props.id}?100x100`}></img>
            <div>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;