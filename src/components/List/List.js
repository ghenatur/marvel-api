import React from 'react';
import Card from "./Cards/Card";
import './List.css'

const List = ({heroes}) => {

    return (
        <div className="list">
            {heroes && heroes.map(hero =>
                <Card
                    key={hero.id}
                    description={hero.description}
                    name={hero.name}
                    path={hero.thumbnail.path}
                    extension={hero.thumbnail.extension}
                />
            )}
        </div>
    );
};

export default List;