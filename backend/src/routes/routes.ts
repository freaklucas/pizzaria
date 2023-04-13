import { Router, Request, Response } from "express";
import { CreateUserController } from "../controllers/user/CreateUserController";
import { AuthUserController } from "../controllers/user/AutUserController";
import { DetailUserController } from "../controllers/DetailUserController";
const router = Router();

router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);

router.get('/me', new DetailUserController().handle);

export { router };
