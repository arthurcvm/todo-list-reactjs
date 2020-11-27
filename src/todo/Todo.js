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
    this.handleRemove = this.handleRemove.bind(this);

    this.refresh();
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
        <TodoList list={this.state.list} handleRemove={this.handleRemove} />
      </div>
    );
  }

  handleAdd() {
    const description = this.state.description;
    api.post("", { description }).then((resp) => this.refresh());
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value });
  }

  refresh() {
    api
      .get(`?sort=-createdAt`)
      .then((resp) =>
        this.setState({ ...this.state, description: "", list: resp.data })
      );
  }

  handleRemove(todo) {
    api.delete(`${todo._id}`).then((resp) => this.refresh());
  }
}

export default Todo;
