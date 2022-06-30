import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import './Characters.css';
import DataService from "../../API";
import NavBar from '../../components/NavBar';

import { Card, Pagination } from 'antd';
const { Meta } = Card;

const Characters = () => {
    const [characters, setCharacters] = useState(null);
    const [pages, setPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        if(!characters || currentPage) {
            DataService.getCharacters(currentPage)
                .then(data => {
                    setPages(data.info.pages)
                    setCharacters(data.results)
                });
                
            DataService.getEpisodes()
                .then(data => setEpisodes(data.results))  
        }
    }, [currentPage]);

    // console.log(characters[0].name)
    const arrCharacters = characters && characters.map(item => 
        <li key={item.id} className="characters-item">
            <Link to={`/characters/${item.id}`} key={item.id} className="characters-item">
                {/* {console.log(item)} */}
                <Card
                    hoverable
                    style={{
                    width: 240,
                    }}
                    cover={<img alt={item.name} src={item.image} />}
                >
                    <Meta title={item.name} description={`status: ${item.status}`} />
                </Card>
            </Link>
        </li>
    )

    const onPageChange = (val) => setCurrentPage(val);

    return (
        <div className="container characters-page">
            <NavBar items={episodes}/>
            <div>
                <h1  className="characters-title">Characters</h1>
                <Pagination defaultCurrent={currentPage} total={pages} onChange={onPageChange} className="characters-pag"/>
                <ul className="characters-list">{characters ? arrCharacters : <h2>Loading</h2>}</ul>
            </div>
            
            {/* <ul className="characters-list">{arrCharacters}</ul> */}
            {/* <pre>{JSON.stringify(characters, null, 2 )}</pre> */}
        </div>
    )
}

export default Characters;