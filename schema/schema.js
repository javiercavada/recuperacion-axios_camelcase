/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const axios = require('axios');
const {
  GraphQLList,
  GraphQLFloat,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema
} = require('graphql');

const DatosPeliculas = new GraphQLObjectType({
  name: 'Campos',
  fields: {
    id: { type: GraphQLInt },
    posterPath: {
      type: GraphQLString,
      resolve: poster => poster.poster_path
    },
    title: { type: GraphQLString },
    overview: { type: GraphQLString },
    voteAverage: {
      type: GraphQLFloat,
      resolve: vote => vote.vote_average
    }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    Estrenos: {
      type: new GraphQLList(DatosPeliculas),
      resolve: async () => {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API}&language=es-ES&page=1`
        );
        return response.data.results;
      }
    },
    MejorValoradas: {
      type: new GraphQLList(DatosPeliculas),
      resolve: async () => {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API}&language=es-ES&page=1`
        );
        return response.data.results;
      }
    },
    Populares: {
      type: new GraphQLList(DatosPeliculas),
      resolve: async () => {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API}&language=es-ES&page=1`
        );
        return response.data.results;
      }
    }
  }
});
export default new GraphQLSchema({
  query: RootQuery
});
