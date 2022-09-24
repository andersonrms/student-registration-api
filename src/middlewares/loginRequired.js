import jwt from 'jsonwebtoken';
// import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    /*
        Editar email logado:
    */
    // const user = await User.findOnde({
    //   where: {
    //     id, // id = id, verifica se o email e o id estão na base
    //     email,
    //   },
    // });

    // if (!user) {
    //   return res.status(401).json({
    //     errors: ['Usuário inválido'],
    //   });
    // }

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token invalido'],
    });
  }
};
