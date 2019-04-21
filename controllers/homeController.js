export const home = (req, res) => {
    res.render("home", {pageTitle : 'Home'});
}

export const chat = (req, res) => {
    res.render("chat", {pageTitle: '채팅'});
}

export const cart = (req, res) => {
    res.render("cart", {pageTitle: '장바구니'});
}