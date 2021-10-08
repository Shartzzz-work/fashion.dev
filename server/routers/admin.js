import { express } from "../../common.cjs";

const router = express.Router();

const adminRouter = router.get("/", (req, res, next) => {
  res.render("admin/index", {
    title: "Админка",
    cssFile: "admin"
  });
});

const dashboardRouter = router.get("/dashboard", (req, res, next) => {
  res.render("admin/dashboard", {
    title: "Сводный отчет",
    pageName: "dashboard",
    filePass: "../",
    cssFile: "admin",
  });
});

const ordersRouter = router.get("/orders/order", (req, res, next) => {
  res.render("admin/order", {
    title: "Изменение заказа",
    pageName: "orders",
    filePass: "../../",
    cssFile: "admin",
  });
});

const orderRouter = router.get("/orders", (req, res, next) => {
  res.render("admin/orders", {
    title: "Изменение заказа",
    pageName: "orders",
    filePass: "../../",
    cssFile: "admin",
  });
});

export { adminRouter, dashboardRouter, ordersRouter, orderRouter };
