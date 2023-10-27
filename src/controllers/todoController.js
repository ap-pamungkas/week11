const repository = require('../repositories/todo');

const todoControllers = {
    getAllTodo : async function(req, res){
        try{
            const todos = await repository.getAllTodo();
            res.status(200).json({
                data: todos,
                massage:'get data success'

            })
        }catch(error){
            res.status(500).json('get data movies fail')

        }
    }, 

    getTodoById: async function( req, res){
        const id = req.params.id;
        try {
            const todos = await repository.getTodoById(id);

            if(!todos) return res.status(404).json({massage:'not found'});
            res.status(200).json({
                data:todos,
                massage:'success'
            })
        } catch (error) {
           
            res.status(500).json({massage:'get data todo by id fail'});
            
        }
    },


    createTodo: async function(req, res){
        const todo = req.body;
        try {
            const newTodos = await repository.createTodo(todo);
            res.status(201).json({data:newTodos, massage:'create data todo success'})
        } catch (error) {
            res.status(500).json({massage:'create new data todos fail'})
            
        }
    },
    deleteTodo: async function(req, res){
        const id = req.params.id;
        try {
            const deleteTodo = await repository.deleteTodo(id);
            if(deleteTodo === 0){
                return res.status(400).json({massage:'data not found'});
            }
            res.status(204).end();
            
        } catch (error) {
            res.status(500).json({massage:'delete data todo fail'})
        }
    }


}


module.exports = todoControllers;