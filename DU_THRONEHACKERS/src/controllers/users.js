import { User } from "../models.js";


export const createNew = (req, res)=>{
    const dtls = req.body;
    const newUser = new User({...dtls});
    newUser
        .save()
        .then((result) => {
        res.status(201).json(dtls);
        })
        .catch((err) => console.log(err));
    // console.log(`The User ${dtls.title} is included.`);
    // console.log(dtls);
    // res.send(dtls);
}