import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPokemon } from "../services/pokemonService";


export default function PokemonForm() {

    const [PokemonData, setPokemonData] = useState({
        name: '',
        type: '',
        weight: '',
        height: '',
        picture: null,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'picture') {
            setPokemonData({
                ...PokemonData,
                picture: files[0],
            });
        } else {
            setPokemonData({
                ...PokemonData,
                [name]: value,
            });
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createPokemon(PokemonData);
            alert("Pokemon guardado exitosamente");
            navigate('/');
        } catch (error) {
            console.error("Error al guardar el Pokemon:", error);
            alert("Hubo un error al guardar el Pokemon, por favor intenta de nuevo.");
            return;
        }
    }

    return (
        <>
            <Typography variant="h4" gutterBottom>
                Formulario de Pokemon
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField label="Nombre" name="name" variant="outlined" onChange={handleChange} />
                <TextField label="Tipo" name="type" variant="outlined" onChange={handleChange} />
                <TextField label="Peso" name="weight" variant="outlined" type="number" onChange={handleChange} />
                <TextField label="Altura" name="height" variant="outlined" type="number" onChange={handleChange} />
                <input
                    type="file"
                    name="picture"
                    accept="image/*"
                    className="picture"
                    onChange={handleChange}
                    required />

                <Button type="submit" variant="contained">Guardar</Button>
            </Box>
        </>

    )

}