import React from 'react';
import './Card.css';
const Card = ({description,name,path,extension}) => {

    return (
        <div className="card">
            <img src={`${path}/standard_fantastic.${extension}`} alt=""/>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Card;