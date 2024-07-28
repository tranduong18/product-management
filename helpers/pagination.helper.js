const Product = require("../models/product.model");
const ProductCategory = require("../models/product-category.model");

module.exports.product = async (req, find) => {
    const pagination = {
        currentPage: 1,
        limitItems: 5
    };

    if(req.query.page){
        pagination.currentPage = parseInt(req.query.page);
    }

    pagination.skip = (pagination.currentPage - 1) * pagination.limitItems;

    const countProducts = await Product.countDocuments(find);
    const totalPage = Math.ceil(countProducts / pagination.limitItems);
    pagination.totalPage = totalPage;

    return pagination;
}

module.exports.productCategory = async (req, find) => {
    const pagination = {
        currentPage: 1,
        limitItems: 5
    };

    if(req.query.page){
        pagination.currentPage = parseInt(req.query.page);
    }

    pagination.skip = (pagination.currentPage - 1) * pagination.limitItems;

    const countProductCategory = await ProductCategory.countDocuments(find);
    const totalPage = Math.ceil(countProductCategory / pagination.limitItems);
    pagination.totalPage = totalPage;

    return pagination;
}