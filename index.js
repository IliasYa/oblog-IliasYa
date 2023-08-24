// LANCEMENT DU SERVER AVEC SCRIPT npm start

require('dotenv').config()
const router = require('./app/router')

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({
    extended : true
}))

const expressJSDocSwagger = require('express-jsdoc-swagger');
const options = {
  info: {
    version: '1.0.0',
    title: 'Documentation du site O-Blog',
    license: {
      name: 'description des foncitonnalités requête et retour du server dédié à Oblog',
    },
  },
  security: {
    BasicAuth: {
      type: 'http',
      scheme: 'basic',
    },
  },
  baseDir: __dirname,
  filesPattern: './**/*.js',
  swaggerUIPath: '/api-docs',
  exposeSwaggerUI: true,
  exposeApiDocs: false,
  apiDocsPath: '/v3/api-docs',
  notRequiredAsNullable: false,
  swaggerUiOptions: {},
  multiple: true,
};
expressJSDocSwagger(app)(options);

app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})