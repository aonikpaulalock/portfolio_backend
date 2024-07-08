import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { router } from './app/routes';
import { GlobalErrorHandler } from './app/middleware/GlobalErrorHandle';
import { NotFoundRoute } from './app/middleware/NotFound';
const app: Application = express();

const allowedOrigins = ['http://localhost:3000'];

const corsOptions = {
  origin: (origin: any, callback: any) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
// perser
app.use(express.json());
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));

// Use router
app.use("/api/v1", router)

const TestingRouteController = async (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Successfully Testing Data"
  })
};

app.get("/", TestingRouteController)



// Global Error
app.use(GlobalErrorHandler)

// Not Found Route
app.use(NotFoundRoute)

export default app;
