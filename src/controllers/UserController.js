import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.status(200).json({ id, nome, email });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.status(400).json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      const { id, nome, email } = user;
      return res.status(200).json({ id, nome, email });
    } catch (e) {
      return res.status(400).json(null);
    }
  }

  async update(req, res) {
    try {
      if (!req.userId) {
        return res.status(400).json({
          error: ['ID não enviado'],
        });
      }
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          error: ['Usuário não existe'],
        });
      }

      const userUpdated = await user.update(req.body);
      const { id, nome, email } = userUpdated;
      return res.status(200).json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          error: ['Usuário não existe'],
        });
      }

      await user.destroy();
      return res.json({ user_destroyed: user });
    } catch (e) {
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
