const DAOMangaer     = require('../DAOManager').queries,
Models         = require('../Models');

class ConstructorsController {

  static async getAllConstructors() {
    let allConstructors = await DAOMangaer.getData(Models.Constructor, {}, {})
    return allConstructors;
  }
  static async getConstructorById(id) {
    let query = { constructorId: id};
    let constructor = await DAOMangaer.findOne(Models.Constructor, query, {}, {});
    
    if(constructor) return constructor;

    return { status: 404}
  }
}

module.exports = ConstructorsController;