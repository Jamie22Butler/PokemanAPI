import React, {useState, useEffect} from 'react';
import { getAllPokemon, getPokemon } from './services/pokemon'
import Card from './Components/Card/Card';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './Components/About'
import { Link } from 'react-router-dom'
import image from './Images/Pikachu.gif'
import PokemonDetails from './Components/PokemonInfo/index'




function App() {
  const [pokemonData, setPokemonData] = useState ([]);
  // const [filteredPokemon, setFilteredPokemon] = useState([])
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon/'

  // const [currentPage, setCurrentPage] = useState(1);
  // const [pokemonPerPage, setPokemonPerPage] = useState(20);
   
  // const lastPokemonIndex = currentPage * pokemonPerPage;
  // const firstPokemonIndex = lastPokemonIndex - pokemonPerPage;
  // const currentPokemon = filteredPokemon.slice(firstPokemonIndex, lastPokemonIndex)

  // const handlePageChange = (event, value) => {
  //   setCurrentPage(value)
  // } 

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);


   const nextBtn = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const previousBtn = async() => {
    if(!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }
   
  

    const loadingPokemon = async (data) => {
      let _pokemonData = await Promise.all(data.map(async pokemon => {
          let pokemonRecord = await getPokemon(pokemon)
          return pokemonRecord
      }))
        setPokemonData(_pokemonData)
    }

  return (
    <div className="Wrapper">
      <div>
      <BrowserRouter> {/* Prioritise BrowserRouter tag before any other Router/Link tag*/}
      <Navbar/>
        {
        loading ? <img src = {image} style ={{display: 'block', 'marginLeft': 'auto', 'marginRight': 'auto', height: 'auto', 'marginTop': '1em'  }} alt = 'Loading'></img> : (
            <Switch>
              <Route exact path = '/'>
                <div className = 'banner-area'>
                  <div className = 'btn'>
                    <button onClick={previousBtn} data-testid ="prevButtonTest">Prev</button>
                    <button onClick={nextBtn} data-testid ="nextButtonTest">Next</button>
                  </div>
                    <div className = 'grid-container'>
                      {pokemonData.map((pokemon, i ) => {
                        return(
                          <Link style={{ textDecoration: 'none' }} to={`/Pokemon/${pokemon.id}`} key = {pokemon.id}>
                            <div>
                            <Card key = {i} pokemon={pokemon}/>
                            </div>
                          </Link>
                        )})}
                      </div>
                  <div className = 'btn'>
                    <button onClick={previousBtn}>Prev</button>
                    <button onClick={nextBtn}>Next</button>
                  </div>
                </div>
              </Route>
              <Route path = '/Pokemon/:id'>
                <div>
                  <div className = 'btn'>
                    <Link to = '/' style={{ textDecoration: 'none' }}> Back</Link>
                  </div>
                  <div className = 'grid-container'>
                    <PokemonDetails/>
                  </div>
                </div>
              </Route>
              <Route path ='/About'>
                    <About/>
              </Route>
            </Switch>
        )}
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
