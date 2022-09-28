import { Router } from 'express';
import multer from 'multer';
import FotoController from '../controllers/FotoController';
// import loginRequired from '../middlewares/loginRequired';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('foto'), FotoController.store);

export default router;
