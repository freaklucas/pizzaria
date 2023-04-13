import { Router, Request, Response } from "express";
import { CreateUserController } from "../controllers/user/CreateUserController";
import { AuthUserController } from "../controllers/user/AutUserController";
import { DetailUserController } from "../controllers/DetailUserController";

import {isAuthenticated} from '../middlewares/isAuthenticated';

const router = Router();


router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);

router.get('/me',isAuthenticated, new DetailUserController().handle);

export { router };
