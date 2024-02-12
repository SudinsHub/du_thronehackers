import { Train } from "../models.js";


export const createNew = (req, res)=>{
    const dtls = req.body;
    const newTrain = new Train({...dtls});
    newTrain
        .save()
        .then((result) => {
            const numOfStop = result.stops.length;
            const obj = {
                "train_id": result.train_id,
                "train_name": result.train_name,
                "capacity": result.capacity,
                "service_start": result.stops[0].departure_time,
                "service_ends": result.stops[numOfStop-1].arrival_time,
                "num_stations": numOfStop
            }
            // console.log(obj);
            res.status(201).json(obj);
        })
        .catch((err) => console.log(err));
}