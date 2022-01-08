"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  getPlanByUserId: async (ctx) => {
    const { userid } = ctx.params;
    const result = await strapi.services.plan.getPlanByUserId(userid);
    return result;
  },

  AddToPlan: async (ctx) => {
    const result = await strapi.services.plan.AddToPlan(ctx.request.body);
    return result;
  },
};
