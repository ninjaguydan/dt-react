import { FaTimes } from "react-icons/fa"

const Task = ({ task, onDelete, onToggle }) => {
	return (
		// Line 7: Using Ternary Operator to determine whether className should contain 'reminder' class based on wether the 'reminder' property of the given 'task' prop (which contains an object from Tasks.js) is true or false.
		// When this component is double-clicked, run the function onToggle (which contains the function toggleReminder() from App.js) while passing in this task's 'id' as a parameter
		<div className={`task ${task.reminder ? "reminder" : ""}`} onDoubleClick={() => onToggle(task.id)}>
			{/* Line 11-13: Populate the h3 tag with the given task's 'text' value. 
				Importing an icon componenet from 'react-icons/fa' library. When this 'FaTimes' component is clicked, use the prop onDelete 
				(which contains the function deleteTask() from App.js) while passing in this task's 'id' as a parameter */}
			<h3>
				{task.text} <FaTimes style={{ color: "red", cursor: "pointer" }} onClick={() => onDelete(task.id)} />
			</h3>
			{/* Line 15: Populate the p tag with the given task's 'day' value. */}
			<p>{task.day}</p>
		</div>
	)
}

export default Task
