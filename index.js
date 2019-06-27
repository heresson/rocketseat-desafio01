const express = require("express");
const server = express();
server.use(express.json());

const projects = [];

server.listen("3000");

//listar projetos
server.get("/projects", (req, res) => {
  return res.json(projects);
});

//adicionar projeto
server.post("/projects", (req, res) => {
  const { id, title } = req.body;
  const project = {
    id,
    title,
    tasks: []
  };
  projects.push(project);
  return res.json(projects);
});

//editar titulo do projeto
server.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const project = projects.find(p => p.id === id);
  project.title = title;
  return res.json(project);
});

//deletar projeto
server.delete("/projects/:id", (req, res) => {
  const { id } = req.params;
  const projectIndex = projects.findIndex(p => p.id === id);
  projects.splice(projectIndex, 1);
  return res.send();
});

//incluir tarefa em um projeto
server.post("/projects/:id/tasks", (req, res) => {
  const { id } = req.params;
  const { taskTitle } = req.body;

  const project = projects.find(p => p.id === id);

  project.tasks.push(taskTitle);
  return res.json(projects);
});
