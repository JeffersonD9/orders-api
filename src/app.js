import express from 'express';
import dotenv from 'dotenv'
import morgan from "morgan";
import cors from 'cors';

//Load env vars
dotenv.config()

//Create express app
const app = express();

app.use(cors({
  origin: 'https://orders-web.vercel.app',  // hace falta añadir el fronted que podria acceder a esta API
  credentials: true
}))

if (NODE_ENV !== "development") {
  console.log = function () { };
}

app.set("port", PORT);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());