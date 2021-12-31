"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  searchPost: async (str) => {
    const result = await strapi.query("article").find({});
    const text = str.toLowerCase();
    console.log("text", text);
    if (result) {
      let res = [];
      result.forEach((element) => {
        if (
          element.title?.toLowerCase().includes(text) ||
          element.content?.toLowerCase().includes(text) ||
          element.location?.toLowerCase().includes(text) ||
          element.summary?.toLowerCase().includes(text)
        ) {
          res.push(element);
        }
      });

      return res;
    }

    return [];
  },
};
