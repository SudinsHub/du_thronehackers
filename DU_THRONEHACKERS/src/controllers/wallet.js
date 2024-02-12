import { User } from "../models.js";

export const getWallet = (req, res)=>{
    const {wallet_id} = req.params;
    User
    .find({user_id: wallet_id})
    .then((data)=>{
        if(!data){
            res.status(404).json({
                "message": `wallet with id: ${wallet_id} was not found`
                })
        }else{
            res.status(200).json({
                "wallet_id": data.user_id, 
                "balance": data.balance, 
                "wallet_user":
                    {
                    "user_id": data.user_id,
                    "user_name": data.user_name 
                    }
                })
        }
    })
}

export const recharge = (req, res)=>{
    const {wallet_id} = req.params;
    const obj = JSON.parse(req.body);
    const amount = obj.recharge; 
    User
    .findOneAndUpdate({user_id: wallet_id}, { $inc:{balance: amount}})
    .then((data)=>{
        if(amount<100 || amount>10000) return (res.status(400).json({
            "message": `invalid amount: ${amount}`
        }))
        if(!data){
            res.status(404).json({
                "message": `wallet with id: ${wallet_id} was not found`
                })
        }else{
            return (res.status(200).json({
                "wallet_id": data.user_id, 
                "wallet_balance": data.balance, 
                "wallet_user":
                    {
                    "user_id": data.user_id,
                    "user_name": data.user_name 
                    }
                }))
        }
    })
}