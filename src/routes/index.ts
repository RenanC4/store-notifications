import express from 'express';
import discountRoute from './discount.js'
import subscriberRoute from './subscriber.js'
const router = express.Router();

const routes = [
  {
    path: '/discount',
    route:  discountRoute
  },
  {
    path: '/subscriber',
    route:  subscriberRoute
  }
]

routes.forEach(route => {
  router.use(route.path, route.route);
});

export { router };
