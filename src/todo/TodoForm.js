import React from "react";
import Grid from "../template/Grid";
import IconButton from "../template/IconButton";

const TodoForm = (props) => (
  <div role="form" className="TodoForm">
    <Grid cols="12 9 10">
      <input
        id="description"
        className="form-control"
        placeholder="Adicione uma tarefa"
        onChange={props.handleChange}
        value={props.description}
      ></input>
    </Grid>
    <Grid cols="12 3 2">
      <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
    </Grid>
  </div>
);

export default TodoForm;
