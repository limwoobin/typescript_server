import Category from '../../models/category';

const CategoryService = {};

CategoryService.getCategories = (type) => {
    if(type !== undefined) {
        return Category.find()
                    .where('type').equals(type);
    }
    return Category.find();
}

module.exports = CategoryService;