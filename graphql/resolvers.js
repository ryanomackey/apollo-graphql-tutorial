import axios from 'axios';

const fetchPokemon = (args) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${args.name}`)
  .then((response) => {
    return response.data;
  })
  .catch((err) => {
    throw new Error(err);
  });
};

const resolvers = {
  Query: {
    pokemon: (obj, args, context, info) => fetchPokemon(args),
  },
};

export default resolvers;
