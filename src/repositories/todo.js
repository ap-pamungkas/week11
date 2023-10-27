const models = require('../models');
const todos = models.todo;


const todosRepository = {
    getAllTodo :async function (){
        return await todos.findAll();

    },

    getTodoById : async function (id){
     
        return await todos.findByPk(id);
    },

    createTodo: async function (todo){
        return await todos.create(todo);
    },

    deleteTodo : async function (id){
        return await todos.destroy({where:{id:id}})
    }
}



module.exports =todosRepository;