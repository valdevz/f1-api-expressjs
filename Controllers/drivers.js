 const DAOMangaer     = require('../DAOManager').queries,
       Models         = require('../Models');

class DriversController {
  
  static async getAllDrivers() {
    let allDrivers = await DAOMangaer.getData(Models.Driver, {}, {})
    return allDrivers;
  }

  static async getDriverById(id) {
    let query = { driverId: id};
    let driver = await DAOMangaer.findOne(Models.Driver, query, {}, {});

    if(driver) return driver;

    return { status: 404}
      
    
  }
}

module.exports = DriversController;