module.exports = (app, sequelize) => {
  app.get("/", (req, res) => {
    
  });

  app.get("/data/:id", (req, res) => {
    res.send(req.params.id);
  });
}
