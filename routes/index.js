/* eslint-disable quotes */
const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
  const sql = 'SELECT * FROM categories';
  const result = await db.query(sql);
  const pend = 'pending';
  const todos = "SELECT todo, category, todos.id  FROM todos, categories WHERE categories.id = todos.category_id AND status = '"
    + pend
    + "' ORDER BY created_at DESC;";
  const allPendingTodos = await db.query(todos);
  const comp = 'completed';
  const compTodos = "SELECT todo, category  FROM todos, categories WHERE categories.id = todos.category_id AND status = '"
    + comp
    + "' ORDER BY completed_at DESC;";
  const allCompletedTodos = await db.query(compTodos);
  res.render('index', {
    categories: result.rows,
    pendingTodos: allPendingTodos.rows,
    completedTodos: allCompletedTodos.rows,
  });
});

router.post('/newTodo', async (req, res) => {
  const sql = "INSERT INTO todos (todo, category_id, status, created_at) VALUES ('"
    + req.body.createTodo
    + "', "
    + req.body.selectCategory
    + ", 'pending', '"
    + Date.now()
    + "');";
  await db.query(sql);
  res.redirect('/');
});

router.post('/completeTodo/:id', async (req, res) => {
  const sql = "UPDATE todos SET status = 'completed', completed_at = '"
    + Date.now()
    + "' WHERE id = "
    + req.params.id;
  await db.query(sql);
  res.redirect('/');
});

module.exports = router;
