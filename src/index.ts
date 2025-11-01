import { envs } from '@/config/envs';
import { Server } from '@/server/infrastructure/server';

const server = new Server(envs.PORT);

(async () => await server.start())();
