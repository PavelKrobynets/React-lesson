import { Component } from "react";

import AppInfo from "../app-info/app-info";
import { SearchPanel } from "../search-panel/search-panel";
import { AppFilter } from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import { EmployeesAddForm } from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John S.", salary: 800, increase: false, rise: true, id: 1 },
        { name: "Alex P.", salary: 1200, increase: true, rise: false, id: 2 },
        { name: "Bob L.", salary: 500, increase: false, rise: false, id: 3 },
      ],
      term: "",
      filter: 'all'
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex((elem) => elem.id  === id);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after];
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.state.data.length + 1,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  onToggleProp = (id, prop) => {
    // this.setState(({data}) => {
    // 	const index = data.findIndex(elem => elem.id === id);
    // 	const oldItem = data[index];
    // 	const newItem = {...oldItem, increase: !oldItem.increase};
    // 	const newArr = [...data.slice(0, index), newItem, ...data.slice(index +
    // 		1)];
    // 		return{
    // 			data: newArr
    // 		}
    // })
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  onFilterChange = (items, value) => {
    switch (value) {
      case "rise":
        return items.filter((item) => item.rise);
      case "moreThan1000":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  onUpdateFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.rise).length;
    const visibleData = this.onFilterChange(this.searchEmp(data, term), filter)
    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onUpdateFilter={this.onUpdateFilter}/>
        </div>
        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
