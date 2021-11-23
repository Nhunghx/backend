import * as express from "express";
import { createConnection } from "typeorm";
var cors = require("cors");
import route from "./routes";

createConnection().then(async () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  route(app);
  app.listen(3070);
});
