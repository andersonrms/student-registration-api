import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Foto from '../models/Foto';
// import Aluno from '../models/Aluno';

const upload = multer(multerConfig).single('foto');

class FotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      const { originalname, filename } = req.file;
      const { aluno_id } = req.body;
      const foto = await Foto.create({ aluno_id, originalname, filename });

      return res.json(foto);
    });
  }
}

export default new FotoController();
