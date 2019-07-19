/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import webpackMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import dotenv from 'dotenv';
import expressGraphQL from 'express-graphql';
import webpackConfig from './webpack.config';
import schema from './schema/schema';

dotenv.config();
const app = express();

app.use(webpackMiddleware(webpack(webpackConfig)));

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(8080, () => {
  console.log('Escucha en: http://localhost:8080');
});
