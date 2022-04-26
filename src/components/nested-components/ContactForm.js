import {useState} from 'react';

const ContactForm = () => {

    return(
        <div className="contact-form-container">
            <h2><span>Feedback?</span> Get in touch</h2>

            <Input name="email" type="email" placeholder="example@example.com" />

            <div className="input-group">
                <Input name="name" placeholder="Josette" />
                <Input name="subject" placeholder="Your subject" />
            </div>

            <Message />
            <Button />
        </div>
    )
}

const Input = ({name, type, placeholder}) => {
    const [text, setText] = useState('');

    return (
        <div className="input-field">
            <label htmlFor={name}>{name}</label>
            <input 
                value={text} 
                type={type?type:"text"} 
                name={name} 
                placeholder={placeholder} 
                onChange={(e) => setText(e.target.value)}
                required />
        </div>
    )
}

const Message = () => {
    const [message, setMessage] = useState('');

    return (
        <div className="input-field">
            <label htmlFor="message" className="message-label">message</label>
            <textarea
                rows={getTextareaRows()}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message here"
                value={message}
                name="message"
            ></textarea>
        </div>
    )
}

const Button = () => {
    return(
        <button>
            <span>Send</span>
            <svg className="fa-solid fa-paper-plane"></svg>
        </button>
    )
}

const getTextareaRows = () => {
    const screenWidth = document.body.offsetWidth;
    
    if (screenWidth > 768 && screenWidth < 1025) {
        return 3;
    }else{
        return 4;
    }
}

export default ContactForm;