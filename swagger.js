const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger.json";
const endpointsFiles = [
  "./src/dados_evolutivos/routes",
  "./src/gestante/routes",
  "./src/gestacao/routes",
  "./src/acompanhamento/routes",
  "./src/exame/routes",
];

swaggerAutogen(outputFile, endpointsFiles);
