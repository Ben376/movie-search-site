const express = require('express');

const router = express.Router();

const connection = require('../helpers/sql');

router.post('/add', (req, res) => {
  connection.query('INSERT INTO list (title, year, runtime, genre, director, actors, plot, posterUrl) VALUES (?,?,?,?,?,?,?,?);',
    [req.body.title, req.body.year, req.body.runtime, req.body.genre, req.body.director, req.body.actors, req.body.plot, req.body.posterUrl],
    (error, row) => {
      if ((error) || (!row)) {
        res.status(500).json({ message: 'not ok' });
      } else {
        res.status(200).json({ message: 'ok' });
      }
    });
});

router.get('/list', (req, res) => {
  connection.query('SELECT * FROM list', (error, row) => {
    if ((error) || (!row)) {
      res.status(500).json({ message: 'not ok' });
    } else {
      res.status(200).json({ row });
    }
  });
});

router.get('/random', (req, res) => {
  connection.query('SELECT * FROM list ORDER BY RAND() LIMIT 4', (error, row) => {
    if ((error) || (!row)) {
      res.status(500).json({ message: 'not ok' });
    } else {
      res.status(200).json({ row });
    }
  });
});

router.delete('/delete/:id', (req, res) => {
  connection.query('DELETE FROM list WHERE ID=?;', [req.params.id], (err, row) => {
    if ((err) || (!row)) {
      res.status(500).json(console.log('500'));
    } else {
      res.status(200).json(console.log('200'));
    }
  });
});


module.exports = router;
