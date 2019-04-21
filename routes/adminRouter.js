import express from "express";
import routes from "./routes"
import { admin } from "../controllers/adminController";

const adminRouter = express.Router();

adminRouter.get(routes.admin, admin);

adminRouter.get(routes.products, admin);

export default adminRouter;