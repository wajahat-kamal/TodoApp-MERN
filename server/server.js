import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './lib/DB.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Your routes here
app.get('/', (req, res) => res.send('API is running...'));

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);



// Routes
// app.get('/api/todos', async (req, res) => {
//   const todos = await Todo.find().sort({ _id: -1 });
//   res.json(todos);
// });

// app.post('/api/todos', async (req, res) => {
//   const todo = new Todo({ title: req.body.title });
//   await todo.save();
//   res.json(todo);
// });

// app.put('/api/todos/:id', async (req, res) => {
//   const todo = await Todo.findByIdAndUpdate(req.params.id, { completed: req.body.completed }, { new: true });
//   res.json(todo);
// });

// app.delete('/api/todos/:id', async (req, res) => {
//   await Todo.findByIdAndDelete(req.params.id);
//   res.json({ message: 'Deleted' });
// });
