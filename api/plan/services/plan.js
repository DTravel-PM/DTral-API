"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  getPlanByUserId: async (userid) => {
    const result = await strapi.query("plan").find({ username: userid });

    if (result) {
      return result;
    }

    return [];
  },

  AddToPlan: async (plan) => {
    const result = await strapi.query("plan").find();
    console.log("plan,", plan);
    console.log("re", result);
    if (
      result &&
      result.filter(
        (e) => e.locationid === plan.locationid && e.username === plan.username
      ).length > 0
    ) {
      return [];
    } else {
      console.log("hihi");
      await strapi.query("plan").create(plan);
    }

    return [];
  },
};
