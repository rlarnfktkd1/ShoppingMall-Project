import express from "express";
import routes from "./routes"
import { admin } from "../controllers/adminController";

const adminRouter = express.Router();

adminRouter.get(routes.admin, admin);

export default adminRouter;