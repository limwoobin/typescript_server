const express = require('express');
const router = express.Router();
const CategoryService = require('./CategoryService');
const common = require('../../common/common');
const logger = require('../../config/winston');

router.get('/list' , async (req , res) => {
    logger.info('category...');
    const type = req.query.type;
    const result = common.result;
    result.code = 'DR00';
    result.message = common.status.DR00;
    try {
        const categoryService = new CategoryService();
        const categories = await categoryService.getCategories(type);
        result.data = categories;
    } catch (error) {
        result.code = 'DR01';
        result.message = common.status.DR01;
        result.data = error;
        return res.json(result);    
    }
    return res.json(result); 
});

module.exports = router;