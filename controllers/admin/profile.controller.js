// [GET] /admin/profile/
module.exports.index = (req, res) => {
    console.log(res.locals.account);
    res.render("admin/pages/profile/index", {
        pageTitle: "Thông tin cá nhân"
    });
}