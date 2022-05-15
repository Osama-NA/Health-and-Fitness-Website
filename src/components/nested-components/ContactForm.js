import {useState} from 'react';
import Input from './Input';
import Message from './Message';

const FORM_SUBMIT_REQUEST_URL = `https://formsubmit.co/ajax/${process.env.REACT_APP_FORM_SUBMIT_EMAIL_MASK}`;

const ContactForm = ({ contactFormRef}) => {

    // variables used to handle form input by user
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    // called when user submits form
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        // Checking if required fields are filled
        if (email === '' || name === '' || message === ''){
            alert('Please fill in the required fields');
            return;
        }

        sendEmail({email, name, subject, message});
    }

    return(
        <form className="contact-form-container" onSubmit={handleFormSubmit}>
            <div ref={contactFormRef} className="contact-ref"></div> {/* used to scroll to contact form when "Contact" is clicked in navigation menu */}
            <h2><span>Feedback?</span> Get in touch</h2>

            <Input name="email" type="email" placeholder="example@example.com" value={email} handleChange={setEmail} required={true}  />

            <div className="input-group">
                <Input name="name" placeholder="Josette" value={name} handleChange={setName} required={true}  />
                <Input name="subject" placeholder="Your subject" value={subject} handleChange={setSubject} />
            </div>

            <Message value={message} handleChange={setMessage} />
            <Button />
        </form>
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

const sendEmail = async (emailData) => {
    const response = await fetch(FORM_SUBMIT_REQUEST_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(emailData)
    })

    const data = await response.json();

    if(data.message) alert(data.message);
}

export default ContactForm;