import express from "express";
import routes from "./routes";
import { home, chat, cart } from "../controllers/homeController";
import { join, login, logout } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.chat, chat);
globalRouter.get(routes.cart, cart);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;