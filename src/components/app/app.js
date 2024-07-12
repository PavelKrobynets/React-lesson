import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import { EmployeesAddForm } from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John S.", salary: 800, increase: false, like: true, id: 1 },
        { name: "Alex P.", salary: 1200, increase: true, like: false, id: 2 },
        { name: "Bob L.", salary: 500, increase: false, like: false, id: 3 },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex((elem) => elem.id  === id);
      // const before = data.slice(0, index);
			// const after = data.slice(index + 1);
			// const newArr = [...before, ...after];
			return {
				data: data.filter(item => item.id !== id)
			}
    });
  };
  render() {
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
        <EmployeesAddForm />
      </div>
    );
  }
}

export default App;
