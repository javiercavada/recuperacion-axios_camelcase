**UneaFilms_Grupo7**
<br/><br/>
**_Resumen_**

Esta aplicacion web estÃ¡ implementada siguiendo una estructura cliente - servidor y empaquetada con Webpack.

Las dependencias de la aplicacion estÃ¡n gestionadas con el gestor de dependencias NPM.

El servidor estÃ¡ implementado utilizando Node.js y conforme a la arquitectura GraphQL, se encarga principalmente de obtener toda la información sobre las películas mostradas en nuestra aplicación, utilizando la base de datos "The Movie Database".

El cliente estÃ¡ implementado utilizando React y contiene varias vistas navegables manejadas por un Router (SPA).

Los scripts se gestionan mediante un archivo package.json.

Para garantizar la calidad y formato del cÃ³digo se han usado las herramientas Eslint y Prettier.

El cliente implementa estilos usando CSS-en-JS y ademÃ¡s incluye funcionalidades avanzadas de estilos (flexbox, etc).

La aplicacion hace uso de Babel para transpilar el codigo de ES6 A ES5 para que cualquier navegador pueda entenderlo.

Hemos utilizado la herramienta nodemon para ayudarnos a la hora de desarrollar, ya que sirve principalmente para reiniciar de forma automática el servidor cada vez que detecta nuevos cambios en los archivos del directorio.
<br/><br/>
**_Estructura_**

En nuestra aplicaciÃ³n podemos encontrar la siguiente estructura de carpetas:

UneaFilms_Grupo7/

node_modules/

src/
index.js
index.html
index.scss
variables.scss
componentes/
contacto.js
estrenos.js
mejorvaloradas.js

README.md
package.json
.babelrc
.gitignore
.env
.eslintrc.js
.babelrc
UneaFilmsLOGO.png
package-lock.json
server.js
webpack.config.js
<br/><br/>
**_Intrucciones de despliegue_**

--npm install--

Instala todas las dependencias necesarias para iniciar nuestra aplicación
<br/><br/>
--npm start--

Se inicia el server.js, el cual se encarga de iniciar el cliente y escucha en localhost:8080
