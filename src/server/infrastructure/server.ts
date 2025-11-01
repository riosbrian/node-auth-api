import express from 'express';
import cors from 'cors';
import { AppRouter } from './server.routes';
import { notFoundHandler } from './middlewares/not-found.middleware';
import { errorHandler } from './middlewares/error-handler.middleware';

export class Server {
  private readonly app = express();

  constructor(private readonly port: number) {
    this.setUpRoutes();
    this.setUpErrorHandlers();
  }

  private setUpMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
  }

  private setUpRoutes() {
    this.app.use('/api', AppRouter.routes);
  }

  private setUpErrorHandlers() {
    this.app.use(notFoundHandler);
    this.app.use(errorHandler);
  }

  async start() {
    this.app.listen(this.port, () =>
      console.log(`Server running on PORT: ${this.port}`)
    );
  }
}
