import Axios from "axios";
import React, { Component } from "react";

import api from "../services/api";

import PageHeader from "../template/PageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { description: "", list: [] };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm
          description={this.state.description}
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
        />
        <TodoList />
      </div>
    );
  }

  handleAdd() {
    const description = this.state.description;
    api.post("todos", { description })
      .then((resp) => console.log("Funcionou!"));
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value });
  }
}

export default Todo;
