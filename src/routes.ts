import { request, response, Router} from "express";
import { PostController } from "./controller/postController";

const router = Router();
const postController = new PostController();

router.get("/", postController.index);

router.get("/create", postController.create_page)
router.post("/create", postController.create)

router.get("/post/edit/:id", postController.show)
router.post("/post/edit/:id", postController.update)

router.get("/post/:id", postController.post)

router.post("/delete/:id", postController.delete)
export { router };