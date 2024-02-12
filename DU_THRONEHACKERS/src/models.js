import mongoose from "mongoose";

export const userSchema = mongoose.Schema({
    user_id: Number,
    user_name: String,
    balance: Number
});

export const User = mongoose.model("User", userSchema);

export const stationSchema = mongoose.Schema({
    station_id: Number,
    station_name: String,
    longitude: Number,
    latitude: Number
})

export const Station = mongoose.model("Station", stationSchema);

const stopSchema = mongoose.Schema({
    station_id: Number,
    arrival_time: String,
    departure_time: String,
    fare: Number 
})

export const trainSchema = mongoose.Schema({
    train_id: Number,
    train_name: String,
    capacity: Number,
    stops: [stopSchema]
});

export const Train = mongoose.model("Train", trainSchema);