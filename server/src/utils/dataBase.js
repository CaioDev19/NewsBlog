const knex = require('../config/dataBase');

module.exports = {
  async isInTheDataBase(data, table) {
    try {
      const queryRes = await knex(table).where(data);

      if (queryRes.length > 0) {
        return {
          response: true,
          data: queryRes[0],
        };
      }

      return {
        response: false,
      };
    } catch {
      return {
        response: false,
      };
    }
  },
};
