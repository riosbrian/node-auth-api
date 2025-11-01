import { Router } from 'express';

export class AppRouter {
  static readonly router = Router();

  private static configureRoutes() {
    this.router.use('/healthy', (req, res) => {
      res.status(200).json({ message: 'All Correct!' });
    });
  }

  static get routes() {
    this.configureRoutes();
    return this.router;
  }
}
