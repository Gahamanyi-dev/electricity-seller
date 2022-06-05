import express, { json, urlencoded } from 'express';
import cors from "cors";
import './src/config/dbConfig.js';
import meterRoutes from './src/routers/meterRoutes.js';

const app = express();
app.use(cors());

app.use(json());
app.use(urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome to electricity seller");
});

app.use('/api/v1',meterRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}. I.C`);
});