import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';

const SearchParams = () => {
    const [location, setLocation] = useState("Seatle, WA");
    const [animal, setAnimal] = useState("Dog");
    const [breed, setBreed] = useState("Havanese");
    const [breeds, setBreeds] = useState([]);

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input 
                        id="location" 
                        value={location}
                        placeholder="Location"
                        onChange={e => setLocation(e.target.value)}
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={e => setAnimal(e.target.value)}
                        onBlur={e => setAnimal(e.target.value)}    
                    >
                    <option>All</option>
                    {ANIMALS.map(animal => (
                        <option key={animal} value={animal}>
                            {animal}
                        </option>
                    ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        value={breed}
                        onChange={e => setBreed(e.target.value)}
                        onBlur={e => setBreed(e.target.value)}
                        disabled={breeds.lenght === 0}
                    >
                    <option>All</option>
                    {breeds.map(breedString => (
                        <option key={breedString} value={breedString}>
                            {breedString}
                        </option>
                    ))}
                    </select>            
                </label>
                <button>Submit</button>
            </form>
        </div>
    );    
}

export default SearchParams;