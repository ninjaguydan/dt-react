import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import { useState } from "react"

function App() {
	// Line 9: Setting a state for whether or not the 'Add Task' form is visible and initializing as false.
	// Note that the name of the state-setter (in this case, 'setShowAddTask') usually starts with the word 'set'
	const [showAddTask, setShowAddTask] = useState(false)
	// Line 12-31: Setting a state for the Tasks themselves, initializing as an array of objects containing data for each task.
	// This could have been empty, but I wanted some dummy data to start with
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: "Doctors Appointment",
			day: "Feb 5th at 2:30pm",
			reminder: true,
		},
		{
			id: 2,
			text: "Meeting",
			day: "Feb 5th at 2:30pm",
			reminder: true,
		},
		{
			id: 3,
			text: "Shopping",
			day: "Feb 5th at 2:30pm",
			reminder: true,
		},
	])

	// Line 35-43: Creating a function for adding a Task. Note I used arrow syntax, but you can write it however you like
	// This function will take in an object, which we've named 'task'
	const addTask = (task) => {
		// Line 38: Setting a variable (id) to be a random number between 1 and 10000.
		// There are much better ways to handle this, but the tutorial did it so I did too
		const id = Math.floor(Math.random() * 10000) + 1
		// Line 40: Setting a variable (newTask) to be an object that contains our new 'id' variable, along with all the data from the 'task' object we got from the Add Task form.
		const newTask = { id, ...task }
		// Line 42: Calling the 'setTasks' state-setter function to update our 'tasks' state, which will become a new array containing all the data already in 'tasks,' plus all data from our 'newTask' object
		setTasks([...tasks, newTask])
	} // NOTE: This will only add the 'created' task to the front end. Extra steps would be taken here if we needed to add this to a database. Notice that if we refresh the page, our new task disappers

	// Line 46-50: Creating a function for deleting a task. This function will take in a number, which we've named 'id'
	const deleteTask = (id) => {
		// Line 49: Calling the 'setTasks' state-setter function to update our 'tasks' state, which will use JavaScript's built-in method '.filter()' to loop through the given array and create a new array
		//that has the same data EXCEPT any object that has an 'id' property that matches the number passed into the function
		setTasks(tasks.filter((task) => task.id !== id))
	} // NOTE: This will only hide the 'deleted' object from the front end. Extra steps would be taken here if we needed to delete this from a database

	// Line 53-56: Creating a function to toggle a task's 'reminder' key between true and false. This function will take in a number, which we've named 'id'
	const toggleReminder = (id) => {
		// Line 56: Calling the 'setTasks' state-setter function to update our 'tasks' state, which will use JavaScript's built-in method '.map()' to to loop through the given array and create a new array
		//that changes the 'reminder' property of any object with an 'id' property that matches the number passed into the function from true to false or vice versa
		setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)))
	}

	return (
		<div className="container">
			{/* Line 66: Passing into the Header component:
			  - an anonymous function with the name 'onAdd' that calls the setShowAddTask function to update the showAddTask state to be the opposite of itself.
			    The reason we can't call the state-setter 'setShowAddTask' directly is because it will force React to re-invoke the function 'App,' which ends up calling the 
			    the state setter function again, triggering React to run App again, then setShowAddTask again, then App agin, and so on. Wrapping it in () => {} prevents an infinte loop!
			  - the showAddTask state with the name 'showAdd' (I should have given it the same name as the state to minimize confusion) */}
			<Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
			{/* Line 82: Logical AND (&&) Operator that checks the state of showAddTask to determine whether to mount the AddTask component or not. This is the equivalent of:
			 	
				if (showAddTask === True) {
					return <AddTask onAdd={addTask} />
				} else {
					return ''
				}
				
				...further condensed into a one-line Ternary Operator:
				
				showAddTask ? <AddTask onAdd={addTask} /> : '' 
			
				...In a situation where we don't want to return anything if the statement is true, we can use the Logical AND. With the below statement, 
				the component to the right of the '&&' only mounts if the left side is true. This statement is pure JavaScript, so it is wrapped in {}.
				When it mounts, we pass it the addTask function with the name 'onAdd' so that we may run it within the component itself */}
			{showAddTask && <AddTask onAdd={addTask} />}
			{/* Line 85: Another Ternary Operator like the example above (Line 77). If there are more than 0 tasks, mount the Tasks componenet. Otherwise, just say "No Tasks" 
			When it mounts, we pass it the 'tasks' state (which is an array) with the same name, and the functions, deleteTask and toggleReminder */}
			{tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No Tasks!"}
		</div>
	)
}

export default App
