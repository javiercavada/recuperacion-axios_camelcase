import React, { Component } from 'react';
import axios from 'axios';

class Populares extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/graphql/?query={
        Populares{
          id
          posterPath
          title
          overview
          voteAverage
        }  
    }`
      )
      .then(res => res.data.data.Populares)
      .then(res => {
        this.setState({ movies: res });
      });
  }

  render() {
    return this.state.movies.map(mov => (
      <table className="tablapeliculas" key={mov.id}>
        <tbody>
          <tr>
            <td>
              <img
                className="poster"
                src={`https://image.tmdb.org/t/p/w500${mov.posterPath}`}
              />
            </td>
            <td className="combitextos">
              <h3 className="titulosPeliculas">{mov.title}</h3>
              <p className="textosPeliculas">{mov.overview}</p>
              <h2 className="valoracionPeliculas">{mov.voteAverage}</h2>
            </td>
          </tr>
        </tbody>
      </table>
    ));
  }
}
export default Populares;
