import routes from "../routes/routes";

export const admin = (req,res) => {
    res.send("admin app");
}

export const products = (req,res) => {
    const message = "hello"
    res.render("products", {message});
}