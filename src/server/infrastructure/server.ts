import express from 'express';
import { AppRouter } from './server.routes';

export class Server {
  private readonly app = express();

  constructor(private readonly port: number) {
    this.setUpRoutes();
  }

  private setUpRoutes() {
    this.app.use('/api', AppRouter.routes);
  }

  async start() {
    this.app.listen(this.port, () =>
      console.log(`Server running on PORT: ${this.port}`)
    );
  }
}
