import { useState } from "react"

const AddTask = ({ onAdd }) => {
	// Line 5: Setting a state for the 'Task' text field and initializing as an empty string
	const [text, setText] = useState("")
	// Line 7: Setting a state for the 'Day & Time' field and initializing as an empty string
	const [day, setDay] = useState("")
	// Line 9: Setting a state for the 'Reminder' checkbox and initializing as false
	const [reminder, setReminder] = useState(false)

	// Line 12-27: Creating a function to handle form submission
	const onSubmit = (e) => {
		// Line 14: Stop page from refreshing (but you knew this! \^.^/)
		e.preventDefault()
		// Line 16-19: If 'Task' text feild is empty, raise an alert and stop the function
		if (!text) {
			alert("Please add task")
			return
		}
		// Line 21: Using the 'onAdd' prop (which contains the addTask() function from App.js) and passing in an object containing the data captured from the form submission
		onAdd({ text, day, reminder })

		// Line 24-26: Resetting the states to their default values, thus emptying the form fields
		setText("")
		setDay("")
		setReminder(false)
	}

	return (
		// Line 31: When form is submitted, run the 'onSubmit()' function
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label>Task</label>
				{/* Line 35: The value of this input field is set to be the 'text' state. Each time a key is typed (onChange), run the state-setter function 'setText' and set the 'text' state to be whatever the user typed. */}
				<input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
			</div>
			<div className="form-control">
				<label>Day & Time</label>
				{/* Line 40: The value of this input field is set to be the 'day' state. Each time a key is typed (onChange), run the state-setter function 'setDay' and set the 'day' state to be whatever the user typed. */}
				<input type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)} />
			</div>
			<div className="form-control form-control-check">
				<label>Set Reminder</label>
				{/* Line 45: The value of this input field is set to be the 'reminder' state. Each time the box is clicked (onChange), run the state-setter function 'setReminder' and set the 'reminder' state to reflect whether the box is check or unchecked. */}
				<input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
			</div>

			<input type="submit" value="Save Task" className="btn btn-block" />
		</form>
	)
}

export default AddTask
