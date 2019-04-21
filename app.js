import express from "express";
import logger from "morgan";
import helmet from "helmet";

import routes from "./routes/routes";
import globalRouter from "./routes/globalRouter";
import adminRouter from "./routes/adminRouter";

const app = express();

app.use(helmet());
app.use(logger("dev"));

app.use(routes.home, globalRouter);
app.use(routes.admin, adminRouter);

export default app;