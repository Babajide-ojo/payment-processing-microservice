import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";

const app = express();

app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

const handleError = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.error(error);
  res.status(500).json({ message: "Internal server error" });
};

app.use(handleError);

export { app };
