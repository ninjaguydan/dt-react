import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle }) => {
	return (
		<>
			{/* Line 9-11: Looping through the 'tasks' prop (which contains an array of objects from App.js) and using the built-in JavaScript method '.map()' to 
			mount a Task component for each object in the array. Set the 'key' to reflect the object's 'id.' Pass into the component the object itself ('task'), 
			and the props 'onDelete' (containing the function deleteTask() from App.js) and 'onToggle' (containing the function toggleReminder() from App.js)  */}
			{tasks.map((task) => (
				<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
			))}
		</>
	)
}

export default Tasks
