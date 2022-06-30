import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DataService from "../../API";
import { Image } from 'antd';

import './Character.css';

const Character = () => {
    const param = useParams();
    const [character, setCharacter] = useState({});
    // const url = useLocation();
    // console.log(url);

    useEffect(() => {
        DataService.getCharacterById(param.characterId)
            .then(data => setCharacter(data))   
        
    }, [ param]);
    return (
        <div className="container page">
            <p><Link to='/characters' className="character-item">&#10229; back</Link></p>
            <Image width={500} src={character.image}/>
            <h1 className="character-title">Character {param.characterId}</h1>
            <div className="character-subtitle">
                <p>{`status: ${character.status}`}</p>
                <p>{`gender: ${character.gender}`}</p>
                <p>{`species: ${character.species}`}</p>
            </div>
        </div>
    )
}

export default Character;