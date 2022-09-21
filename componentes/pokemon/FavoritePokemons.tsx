import {FC} from 'react'

import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from './FavoriteCardPokemon';

interface Props {
    pokemon: number[];
}

                               
                               
export const FavoritePokemons: FC<Props> = ({pokemon }) => {
  return (
            <Grid.Container gap={2} direction='row' justify='flex-start' >
              {
                pokemon.map(id =>(
                  <FavoriteCardPokemon pokemonId={id} key={id} />
                ))
              }
            </Grid.Container>
  )
}
