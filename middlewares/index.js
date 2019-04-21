import routes from "../routes/routes"
export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "상헌 Shop"
    res.locals.routes = routes;
    next();
};