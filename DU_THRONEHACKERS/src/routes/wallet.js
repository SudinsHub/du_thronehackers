import express from "express";
import { getWallet, recharge } from "../controllers/wallet.js";
const walletRoute = express.Router();
walletRoute.use(express.json());

// walletRoute.post('/', createNew);
walletRoute.get('/:wallet_id', getWallet);
walletRoute.put('/:wallet_id', recharge);
export default walletRoute;