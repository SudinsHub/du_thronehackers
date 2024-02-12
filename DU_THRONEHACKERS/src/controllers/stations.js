import { Station, Train } from "../models.js";

export const createNew = (req, res)=>{
    const dtls = req.body;
    const newStation = new Station({...dtls});
    newStation
        .save()
        .then((result) => {
        res.status(201).json(dtls);
        })
        .catch((err) => console.log(err));

}

export const getStations = ()=>{
    Station
    .find()
    // .select('id title author genre price -_id')
    // .sort({[sortField] : orderSeq, id:1})
    .exec()
    .then((list)=>{
        res.status(200).json({
            "stations" : list});
        })
    .catch((err) => console.log(err));
}

export const searchStations = ()=>{
    const {station_id} = req.params;

    Station
    .find()
    .then((stat)=>{
        if(!Station) res.status(404).json({
            "message": `station with id: ${station_id} was not found`
            })
        else{
            Train
            .find()
            .then((trains)=>{
                res.status(200).json({
                    "station_id": station_id,
                    "trains": [(
                        trains.forEach(train => {
                            if(train.stops.station_id == station_id){
                                
                            }
                        })
                    )]
                    })
                 
            })
            // .select('id title author genre price -_id')
            // .sort({[sortField] : orderSeq, id:1})
            .then((list)=>{
                res.status(200).json({
                    "stations" : list});
                })
            .catch((err) => console.log(err));
        }
    })


}