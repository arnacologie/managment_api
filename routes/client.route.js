module.exports = (app) => {
    
    const apiPath = '/api/v1';
    const clientController = require('../controllers/client.controller');

    app.get(`${apiPath}/clients`, clientController.getTodos);
    app.get(`${apiPath}/client/:id`, clientController.getTodo);
    app.get(`${apiPath}/delete/:id`, clientController.deleteTodo);
    app.post(`${apiPath}/create`, clientController.createTodo);
    app.put(`${apiPath}/client/:id`, clientController.updateTodo);
    

}