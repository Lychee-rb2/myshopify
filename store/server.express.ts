import express from "express";
import { remixContextMiddleware } from "./server/express";
import { getContext } from './server/context'

const app = express();

app.disable("x-powered-by");
app.use(
  "/build",
  express.static("public/build", { immutable: true, maxAge: "1y" })
);
app.use(express.static("public", { maxAge: "1h" }));
app.all("*", remixContextMiddleware(getContext));

const port = process.env.PORT || 5030;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
