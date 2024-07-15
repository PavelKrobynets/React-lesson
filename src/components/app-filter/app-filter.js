import "./app-filter.css";

export function AppFilter(props) {
  const buttonsData = [
      { name: "all", label: "All employees" },
      { name: "rise", label: "Employees for promotion" },
      { name: "moreThan1000", label: "More than 1000$" },
    ],
    buttons = buttonsData.map(({ name, label }) => {
			const active = props.filter === name;
			const clazz = active ? "btn btn-light" : "btn btn-outline-light";
      return (
        <button className={`btn ${clazz}`}
				type="button" 
				key={name}
				onClick={() => props.onUpdateFilter(name)}>
          {label}
        </button>
      );
    });

  return (
    <div className="btn-group">
			{buttons}
    </div>
  );
}
