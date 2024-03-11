import express, { type Express, type Request, type Response, type NextFunction } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import ExpressMongoSanitize from "express-mongo-sanitize";
import compression from "compression";
import bodyParser from "body-parser";

import propertiesRoutes from "./routes/propertiesRoutes";

dotenv.config();

const app: Express = express();

// Security
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use(ExpressMongoSanitize());

// Compression
app.use(compression());

// Parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes

app.use("/properties", propertiesRoutes);

// Error handling
app.use((error: Error, req: Request, res: Response, next: NextFunction): void => {
  console.error(error);
  res.status(500).send("Server error");
});

export default app;
