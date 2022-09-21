 


import { useState,useEffect } from 'react'
import { Layout } from '../../componentes/layouts/Layout'; 
import { FavoritePokemons } from '../../componentes/pokemon';
import { NoFavorites } from '../../componentes/ui';
import { localFavorites } from '../../utils';

const FavoritesPage = () => {

  const [favoritePokemon, setfavoritePokemon] = useState<number[]>([]);

  useEffect(() => {
    setfavoritePokemon(localFavorites.pokemons());
  }, [])
  


  return (
    <Layout title='Pokemon - Favoritos'>
      {
        favoritePokemon.length===0
        ? (<NoFavorites />)
        : (
          <FavoritePokemons pokemon={favoritePokemon} />
            // <FavoriteCardPokemon pokemonId=
        )
      }

      
    </Layout>
  )
}

export default FavoritesPage