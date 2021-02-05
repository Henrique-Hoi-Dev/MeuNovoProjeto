import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação' });
    }
    // fazendo verificação email
    const userExist = await User.findOne({ where: { email: req.body.email } });

    if (userExist) {
      return res
        .status(400)
        .json({ error: 'Esse email de usuário já existe.' });
    }

    const { id, name, email, provider } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(8)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação' });
    }

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExist = await User.findOne({ where: { email } });

      if (userExist) {
        return res
          .status(400)
          .json({ error: 'Esse email de usuário já existe.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Senha não corresponde' });
    }

    await user.update(req.body);

    const { id, name, avatar } = await User.findByPk(req.userId, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });
    console.log(user);
    return res.json({
      id,
      name,
      email,
      avatar,
    });
  }

  async findAllUser(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findAll({
        attributes: ['name', 'id', 'email', 'provider'],
        include: {
          model: Project,
          as: 'projects',
          attributes: ['title', 'id'],
          include: {
            model: List,
            as: 'lists',
          },
        },
      });
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async findAllProjects(req, res, next) {
    try {
      const { id } = req.params;

      const project = await Project.findAll({
        include: {
          model: List,
          as: 'lists',
        },
      });
      if (!project) {
        return res.status(401).json({ message: 'Project not found' });
      }

      res.status(200).json(project);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async findByIdProject(req, res) {
    try {
      const { id } = req.params;
      const project = await Project.findAll({
        where: {
          id: id,
        },
        include: {
          model: List,
          as: 'lists',
        },
      });

      if (!project) {
        return res.status(401).json({ message: 'Project not found' });
      }

      res.status(200).json(project);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async storeProject(req, res) {
    try {
      console.log(req.body);
      const project = await Project.create(req.body);

      return res.status(200).json(project);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async deleteProject(req, res) {
    try {
      const { id } = req.params;

      const project = await Project.destroy({
        where: {
          id: id,
        },
      });
      if (!project) {
        return res.status(400).json({ message: 'project not found' });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json(error.message);
    }
  }
}
export default new UserController();
