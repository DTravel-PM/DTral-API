"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  search: async (ctx) => {
    const { text } = ctx.query;
    const result = await strapi.services.article.searchPost(text);
    return result;
  },
};
