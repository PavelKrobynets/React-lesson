import "./employees-add-form.css";
import { Component } from "react";

export class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Add new employee</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            placeholder="Add name"
            className="form-control new-post-label"
            onChange={this.onValueChange}
            name="name"
            value={name}
          />
          <input
            type="number"
            placeholder="Payment in $"
            className="form-control new-post-label"
            onChange={this.onValueChange}
            name="salary"
            value={salary}
          />
          <button type="submit" className="btn btn-outline-light">
            Add
          </button>
        </form>
      </div>
    );
  }
}
