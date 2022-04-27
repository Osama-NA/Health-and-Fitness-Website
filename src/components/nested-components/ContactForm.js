import {useState, useRef, useEffect, useContext} from 'react';
import Input from './Input';
import Message from './Message';
import { useSearchParams } from 'react-router-dom';
import { TO_SEARCH_PARAM } from '../../utils/globalConstants';
import { ScrollContext } from '../../context/Scroll'

// TODO: CHANGE TO CLIENT EMAIL MASK STRING
const FORM_SUBMIT_REQUEST_URL = "https://formsubmit.co/ajax/621e0efc2a2244d5d0cf1b1d3dfc2fe3";

const ContactForm = () => {
    const [searchParams] = useSearchParams();

    const { scroll } = useContext(ScrollContext);

    const contactFormRef = useRef(null);

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

    // Checks if browser search params contains "to"
    // "to=Contact" is added to search params when user click "Contact" in navigation menu
    // on page render or on update of global state(scroll), if "to=Contact", page scrolls to contact form
    useEffect(() => {
        const scrollTo = searchParams.get(TO_SEARCH_PARAM);
        if (scrollTo === "Contact") {
            contactFormRef.current.scrollIntoView();
        }
    }, [searchParams, scroll])

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