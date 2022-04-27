// value and onChange are used here to better control form input and store it in a 
// state variable(value) using the state update function(handleChange) which are
// passed down by parent component
const Input = ({ name, type, placeholder, required, value, handleChange }) => {
    return (
        <div className="input-field">
            <label htmlFor={name}>{name}</label>
            <input
                type={type ? type : "text"}
                name={name}
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                placeholder={placeholder}
                required={required} />
        </div>
    )
}

export default Input;