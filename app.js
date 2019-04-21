import express from "express";
import logger from "morgan";
import helmet from "helmet";

import adminRouter from "./routes/adminRouter";
import globalRouter from "./routes/globalRouter";
import routes from "./routes/routes";

const app = express();

app.use(helmet());
app.use(logger("dev"));

app.use(routes.home, adminRouter);
app.use(routes.admin, globalRouter);

export default app;