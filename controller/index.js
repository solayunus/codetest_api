const db = require('../config');

const getText = (req, res) => {
  db.query('SELECT * FROM content_db', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
};

const createArticleComment = (request, response) => {
  const { text } = request.body;
  const text_id = parseInt(request.params.id);
  db.query(
    'INSERT INTO content_db (text, id) VALUES ($1, $2)',
    [text, text_id],
    (error, results) => {
      if (error) {
        console.log(error);
      }
      response.status(201).send(`User added with ID: ${results.insertId}`);
    }
  );
};

module.exports = { getText };