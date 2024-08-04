const Product = require("../models/product.model");
const ProductCategory = require("../models/product-category.model");
const Blog = require("../models/blog.model.js");
const BlogCategory = require("../models/blog-category.model.js");

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

module.exports.blog = async (req, find) => {
    const pagination = {
        currentPage: 1,
        limitItems: 5
    };

    if(req.query.page){
        pagination.currentPage = parseInt(req.query.page);
    }

    pagination.skip = (pagination.currentPage - 1) * pagination.limitItems;

    const countBlogs = await Blog.countDocuments(find);
    const totalPage = Math.ceil(countBlogs / pagination.limitItems);
    pagination.totalPage = totalPage;

    return pagination;
}

module.exports.blogCategory = async (req, find) => {
    const pagination = {
        currentPage: 1,
        limitItems: 5
    };

    if(req.query.page){
        pagination.currentPage = parseInt(req.query.page);
    }

    pagination.skip = (pagination.currentPage - 1) * pagination.limitItems;

    const countBlogsCategory = await BlogCategory.countDocuments(find);
    const totalPage = Math.ceil(countBlogsCategory / pagination.limitItems);
    pagination.totalPage = totalPage;

    return pagination;
}