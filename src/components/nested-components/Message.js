// value and onChange are used here to better control form input and store it in a 
// state variable(value) using the state update function(handleChange) which are
// passed down by parent component
const Message = ({ value, handleChange }) => {
    return (
        <div className="input-field">
            <label htmlFor="message" className="message-label">message</label>
            <textarea
                rows={getTextareaRows()}
                placeholder="Enter your message here"
                name="message"
                value={value}
                onChange={(e) => handleChange(e.target.value)}
            ></textarea>
        </div>
    )
}

const getTextareaRows = () => {
    const screenWidth = document.body.offsetWidth;

    if (screenWidth > 768 && screenWidth < 1025) {
        return 3;
    } else {
        return 4;
    }
}

export default Message;