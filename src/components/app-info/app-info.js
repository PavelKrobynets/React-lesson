import "./app-info.css";

const AppInfo = ({increased, employees}) => {
  return (
    <div className="app-info">
      <h1>Employee Tracker</h1>
      <h2>Amount of employees: {employees}</h2>
      <h2>Promoted employees: {increased}</h2>
    </div>
  );
};

export default AppInfo;
