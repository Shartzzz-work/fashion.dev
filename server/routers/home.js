import { express } from "../../common.cjs";

const router = express.Router();

export default router.get("/", (req, res, next) => {
  res.render("index", {
    title: "test",
  });
});
