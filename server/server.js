import { express, njk } from "../common.cjs";
import homeRoute from "./routers/home.js";
import { adminRouter, dashboardRouter, ordersRouter, orderRouter } from "./routers/admin.js";

const app = express();
const port = 2021;

app.set("view engine", "njk");
njk.configure("server/views/", {
  autoescape: true,
  watch: true,
  express: app,
});

const options = {
  dotfiles: "ignore",
  etag: false,
  extensions: ["htm", "html"],
  index: false,
  maxAge: "1d",
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set("x-timestamp", Date.now());
  },
};

app.use(express.static("public", options));

app.use("/", homeRoute);
app.use("/admin", adminRouter);
app.use("/admin/dashboard", dashboardRouter);
app.use("/admin/orders", ordersRouter);
app.use("/admin/orders/order", orderRouter);

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
