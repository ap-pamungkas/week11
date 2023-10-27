const request = require('supertest');
const app= require('../../index'); 
const { response } = require('express');

describe('Todo API Tests', () => {
  let todoId; 

  it('should create a new todo', async () => {
    const newTodo = { title: 'Test Todo' };

    const response = await request(app)
      .post('/todos')
      .send(newTodo)
      .set('Accept', 'application/json');

    expect(response.status).toBe(201);
    expect(response.body.data).toHaveProperty('id');
    expect(response.body.data.title).toBe('Test Todo');

    
    todoId = response.body.data.id;
  });

  it('should get a specific todo by ID', async () => {
    const response = await request(app)
      .get(`/todos/${todoId}`)
      .set('Accept', 'application/json');

    expect(response.status).toBe(200);
    expect(response.body.data.id).toBe(todoId);
  });

  it('should get all todos', async () => {
    const response = await request(app)
      .get('/todos')
      .set('Accept', 'application/json');

    expect(response.status).toBe(200);
    expect(response.body.data).toBeInstanceOf(Array);
  });

  it('should delete a todo by ID', async () => {
    const response = await request(app)
      .delete(`/todos/${todoId}`)
      .set('Accept', 'application/json');

    expect(response.status).toBe(204);
  });
});
