import PropTypes from "prop-types"

const Button = ({ color, text, onClick }) => {
	return (
		<button
			// Line 7: Runs the function stored in the prop 'onClick' (which is the state-setter function 'setShowAddTask' from App.js) when this component is clicked.
			onClick={onClick}
			// Line 9: Uses the prop 'color' (which contains the value passed from Header.js) to set the background color
			style={{ backgroundColor: color }}
			className="btn"
		>
			{/* Line 13: Uses the prop 'text' (which contains the value passed from Header.js) to set the button text */}
			{text}
		</button>
	)
}

// Sets a default value for the prop 'color' if none is given
Button.defaultProps = {
	color: "steelblue",
}
// Forces prop to be of a certain data type.
Button.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
}

export default Button
