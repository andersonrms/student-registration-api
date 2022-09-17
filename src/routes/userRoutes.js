import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, userController.index); // Lista todos osusuarios
router.get('/:id', userController.show); // Lista único usuario

router.post('/', userController.store); // Cria usuario
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
