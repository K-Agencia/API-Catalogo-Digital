const { Query } = require("../config/database");

exports.login = (req, res, next) => {
  const { cedulas } = req.query;

  const sentencia = 'SELECT * FROM odontologos WHERE cedulas = ?;'
  Query(sentencia, cedulas)
    .then((response) => {
      res.send(response[0])
    })
    .catch((err) => {
      next(err);
    })
}