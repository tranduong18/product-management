const Product = require("../../models/product.model");

// [GET] /admin/products/
module.exports.index = async(req, res) => {
    const find = {
        deleted: false
    };

    if(req.query.status){
        find.status = req.query.status;
    }

    // Tìm kiếm
    let keyword = "";
    if(req.query.keyword){
        const regex = new RegExp(req.query.keyword, "i");
        find.title = regex;
        keyword = req.query.keyword;
    }
    // Hết Tìm kiếm

    const products = await Product.find(find);

    // console.log(products);

    res.render("admin/pages/products/index", {
        pageTitle: "Quản lý sản phẩm",
        products: products,
        keyword: keyword
    });
}