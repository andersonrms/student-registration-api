class HomeController {
  index(req, res) {
    res.status(200).json({
      tudo_certo: true,
    });
  }
}

export default new HomeController();
