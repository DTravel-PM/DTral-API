"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  getPlanByUserId: async (userid) => {
    const result = await strapi.query("plan").find({ userid: userid });

    if (result) {
      return result.map((item) => {
        return {
          id: item.id,
          title: item.title,
          description: item.description,
          userid: item.userid,
          planid: item.planid,
        };
      });
    }

    return [];
  },
};
