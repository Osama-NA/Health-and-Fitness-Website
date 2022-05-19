import {useState} from 'react';
import Input from './Input';
import Message from './Message';
import Loader from './Loader';

const FORM_SUBMIT_REQUEST_URL = `https://formsubmit.co/ajax/${process.env.REACT_APP_FORM_SUBMIT_EMAIL_MASK_DEV}`;

const ContactForm = ({ contactFormRef }) => {
    const [showLoader, setShowLoader] = useState(false);

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
        
        sendEmail({ email, name, subject, message });
    }


    const sendEmail = async (emailData) => {
        setShowLoader(true)
        
        const response = await fetch(FORM_SUBMIT_REQUEST_URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(emailData)
        })

        const data = await response.json();

        if (data.success === 'true') {
            alert('Thank you for your feedback!')
        } else {
            alert(data.message)
        }

        resetContactForm();
        setShowLoader(false)
    }

    const resetContactForm = () => {
        setEmail('')
        setName('')
        setSubject('')
        setMessage('')
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

            {showLoader ? <Loader /> : null}
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

export default ContactForm;