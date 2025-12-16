import { Header } from './components/Header'
import { Container } from '@mui/material'
import './App.css'
import PokemonList from './components/PokemonList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokemonForm from './components/PokemonForm'


function App() {
  return (
    <>
      <Header />
      <Container>
        <BrowserRouter>
          {/*Aqui irán las rutas*/}
          <Routes>
            <Route path="/" element = {<PokemonList/>} />
            <Route path="/add-pokemon" element = {<PokemonForm/>} />
          </Routes>
          </BrowserRouter>
      </Container>
    </>
  )
}

export default App

