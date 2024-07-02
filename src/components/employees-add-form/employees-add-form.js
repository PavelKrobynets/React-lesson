import './employees-add-form.css';

const EmployeesAddForm = () => {
	return (
		<div className="app-add-form">
			<h3>Add new employee</h3>
			<form className="add-form d-flex">
				<input type="text" placeholder='Add name' className="form-control new-post-label"/>
				<input type="number" placeholder='Payment in $' className="form-control new-post-label" />
				<button type="submit" className="btn btn-outline-light">Add</button>
			</form>
		</div>
	)
}

export default EmployeesAddForm;