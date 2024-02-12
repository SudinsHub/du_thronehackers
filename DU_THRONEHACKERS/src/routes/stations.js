import express from "express";
import { createNew, getStations, searchStations } from "../controllers/stations.js";
const stationRoute = express.Router();
stationRoute.use(express.json());

stationRoute.post('/', createNew);
stationRoute.get('/', getStations);
stationRoute.get('/:station_id/trains', searchStations);
// stationRoute.put('/:id', updateBook);
export default stationRoute;