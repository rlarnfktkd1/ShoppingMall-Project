export const join = (req, res) => {
    res.render("join", {pageTitle: '회원가입'});
}
export const login = (req, res) => {
    res.render("login", {pageTitle: '로그인'});
}
export const logout = (req, res) => {
    res.render("logout", {pageTitle: '로그아웃'});
}