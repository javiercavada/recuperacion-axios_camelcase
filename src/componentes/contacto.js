import React from 'react';

class Contacto extends React.Component {
  render() {
    return (
      <table className="tablapeliculas">
        <tbody>
          <tr>
            <td>
              <h3 className="titulosPeliculas">Contacta con nosotros</h3>
              <br />
              <br />
              <p className="textosPeliculas">
                Esto es un proyecto realizado por 3 estudiantes de la
                Universidad Europea del Atlántico, para la asignatura de
                Programación Web II. Con nuestra App podrás encontrar toda la
                informacion que necesites sobre cualquier pelicula, bien sea de
                estreno reciente o de hace unos años.
              </p>
              <br />
              <p className="textosPeliculas">
                Para cualquier duda o sugerencia sobre la página, no dudes en
                contactar con nosotros. Puedes hacerlo a través de correo
                electrónico, teléfono o redes sociales.
              </p>
              <br />
              <br />
              <p>
                <span className="glyphicon glyphicon-send"></span>
                &nbsp; &nbsp;uneafilms@gmail.com
              </p>
              <p>
                <span className="glyphicon glyphicon-earphone"></span>&nbsp;
                &nbsp;645124857
              </p>
              <p>
                <span className="glyphicon glyphicon-globe"></span>&nbsp;
                &nbsp;UneaFilms en Instagram, Twitter y Facebook
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default Contacto;
