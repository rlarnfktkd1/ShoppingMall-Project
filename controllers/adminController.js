import routes from "../routes/routes";

export const admin = (req,res) => {
    res.send("admin app");
}

export const products = (req,res) => {
    res.render("products", {pageTitle: '제품리스트'});
}