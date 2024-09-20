import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import createDataDir from "./handlers/filesDirectory";
import routes from "./routes/routes";
import cors from "cors";

const PORT: string | number = process.env.PORT || 3002;
const app = express();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
createDataDir();
app.use(routes);

app.use((error: Error, req: Request, res: Response, next: NextFunction): Response => {
    console.error(error.stack);
    return res.status(500).json("Não foi possível contatar o terminal no momento. Tente novamente mais tarde.");
});

app.listen(PORT, (): void => console.log("Server is running."));