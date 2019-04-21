import express from "express";
import routes from "./routes"
import { admin, products } from "../controllers/adminController";

const adminRouter = express.Router();

adminRouter.get(routes.admin, admin);

adminRouter.get(routes.products, products);

export default adminRouter;