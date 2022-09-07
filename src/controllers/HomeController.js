import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Alexsandra',
      sobrenome: 'Krauss',
      email: 'keke.aff@gmail.com',
      idade: 27,
      peso: 80,
      altura: 1.60,
    });

    res.status(200).json(novoAluno);
  }
}

export default new HomeController();
