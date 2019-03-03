module.exports = (app) => {
    
    const apiPath = '/api/v1';
    const projectController = require('../controllers/project.controller');

    app.get(`${apiPath}/projects`, projectController.getTodos);
    app.get(`${apiPath}/project/:id`, projectController.getTodo);
    app.get(`${apiPath}/delete/:id`, projectController.deleteTodo);
    app.post(`${apiPath}/create`, projectController.createTodo);
    app.put(`${apiPath}/project/:id`, projectController.updateTodo);
    

}