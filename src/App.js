import './App.css';
import { useState} from "react";
import getHeroes from "./components/getHeroes/getHeroes";
import InputSearch from "./components/inputSearch/InputSearch";
import Header from "./components/header/Header";
import {apiKey, urlMarvel} from "./components/keys/keys";
import List from "./components/List/List";


function App() {

    let [searchHero, setSearchHero] = useState("iron")
    let [heroes, setHeroes] = useState()

    const inputValue = (e) => {
        setSearchHero(searchHero = e.target.value)
    }

    const clickButon = () => {
        getHeroes(urlMarvel, searchHero, apiKey).then(response => setHeroes(heroes = response.results))
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            clickButon()
        }
    }

    return (
        <div className="App">
            <Header title="Marvel Heroes"/>
            <InputSearch
                pressEnter={handleKeyPress}
                inputValue={inputValue}
                clickSearch={clickButon}/>
            <List heroes={heroes}/>
        </div>
    );
}

export default App;
