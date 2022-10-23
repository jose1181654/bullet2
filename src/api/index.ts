import { Router } from 'express';
import auth from './routes/userRoute';
import user from './routes/userRoute';
import role from './routes/roleRoute';

export default () => {
  const app = Router();

  // TODO: don't forget to add the routes here it won't work otherwise
  auth(app);
  user(app);
  role(app);

  return app;
};
