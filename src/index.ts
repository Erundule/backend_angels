import express from "express";
import cors from "cors";
import * as swaggerUi from "swagger-ui-express";
const swaggerDocument = require("../swagger.json");

const routes = require("./routes");
const app = express();
const port = 3000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
routes(app);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
