import React from "react";

import "./Animals.css";
import List from "./animalList";
import Cat from "../../components/UI/Cat/Cat";

const Animals = props => {

    return (
        <div className="Animals">
           
              {List.map(cat => (
                  <Cat 
                  key={cat.catId} 
                  src={cat.catSrc}
                  name={cat.name}
                  sex={cat.sex}
                  breed={cat.breed}
                  color={cat.color}
                  coat={cat.coat}
                  altered={cat.altered}
                  age={cat.age}
                  description={cat.description} />
              ))}
            

        </div>
    );
};

export default Animals;