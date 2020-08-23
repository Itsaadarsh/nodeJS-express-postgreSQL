"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("../models/product"));
const getHome = (_req, res, _next) => {
    product_1.default.Products.fetchAll((products) => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'SHOP',
            path: '/',
        });
    });
};
const getProducts = (_req, res, _next) => {
    product_1.default.Products.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All Products',
            path: '/products',
        });
    });
};
const getCart = (_req, res, _next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
    });
};
const getOrders = (_req, res, _next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
    });
};
const getCheckout = (_req, res, _next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout',
    });
};
exports.default = module.exports = {
    getHome,
    getProducts,
    getCart,
    getOrders,
    getCheckout,
};
//# sourceMappingURL=shop.js.map