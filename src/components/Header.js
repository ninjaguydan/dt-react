import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {
	return (
		<header className="header">
			<h1>{title}</h1>
			<Button
				// Lines 9-10: Using the 'showAdd' prop (which contains the state showAddTask from App.js) to determine the look of the Button component by using Ternary Operator.
				color={showAdd ? "red" : "green"}
				text={showAdd ? "Close" : "Add"}
				// Line 12: Using the 'onAdd' prop (which contains the state-setter function 'setShowAddTask' from App.js) to change the state of showAddTask when this Button component is clicked
				onClick={onAdd}
			/>
		</header>
	)
}

Header.defaultProps = {
	title: "Task Tracker",
}

//---------- CSS in JS! ---------- //
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
