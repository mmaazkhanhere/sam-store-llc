("use strict");
const stripe = require("stripe")(process.env.STRIPE_KEY);
/**
 * order controller
 */

const { createCoreController } =
  require("@strapi/strapi").factories; /*create controller is a factory function that creates a new controller instances for
a specific contrent type or plugin. By using it, it allows the application to create new controller instance dynamically at runtime */

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    /*handles the creation of new orders when an API request is made. It takes a ctx (content) argument, which is an object containing
  information about the request */
    const { products } =
      ctx.request
        .body; /*extracts the products property from the request body, which contains an array of objects representing the
    products that the user want to oder */
    try {
      const lineItems = await Promise.all(
        /*creates an array of lineItems that represents the individual products that the user wants to order. 'Promise.all'
      function is used to execute a map function on each product object in parallel. */
        products.map(async (product) => {
          const item = await strapi
            .service("api::product.product")
            .findOne(product.id);

          console.log("this is item------->", item);
          console.log("this is product------->", product);

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
              },
              unit_amount: Math.round(item.price * 100),
            },
            quantity: product.quantity,
          };
        })
      );

      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: { allowed_countries: ["US"] },
        payment_method_types: ["card"],
        mode: "payment",
        success_url: process.env.CLIENT_URL + `/success`,
        cancel_url: process.env.CLIENT_URL + "/failed",
        line_items: lineItems,
      });

      await strapi
        .service("api::order.order")
        .create({ data: { products, stripeId: session.id } });

      return { stripeSession: session };
    } catch (error) {
      ctx.response.status = 500;
      return { error };
    }
  },
}));
