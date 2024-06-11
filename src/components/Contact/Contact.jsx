import React, { useState, useRef } from 'react';
import ContactInfo from './ContactInfo';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import Container from '../Shared/Container/Container';

const Contact = () => {
    const [username, setUsername] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")

    const form = useRef();

    // ========== Email Validation start here ==============
    const emailValidation = () => {
        return String(email)
            .toLocaleLowerCase()
            .match(/^\w+([-]?\w+)*@\w+([-]?\w+)/);
    };
    // ========== Email Validation end here ================

    const handleSend = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_mllxfw9',
            'template_nb28dfa',
            form.current, 'H2HvfX0k2XB-eJVCL')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
            }, (error) => {
                console.log(error.text);
            });

        if (username === "") {
            Swal.fire({
                icon: 'error',
                title: 'Username is required!',
                text: 'Please provide your username!',
            })
            setSuccessMsg("")
        } else if (phoneNumber === "") {
            Swal.fire({
                icon: 'error',
                title: 'Phone number is required!',
                text: 'Please provide your phone number!',
            })
            setSuccessMsg("")
        } else if (email === "") {
            Swal.fire({
                icon: 'error',
                title: 'Please give your Email!',
                text: 'Please provide your email!',
            })
            setSuccessMsg("")
        } else if (!emailValidation(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Give a valid Email!',
                text: 'Please provide your valid email!',
            })
            setSuccessMsg("")
        } else if (subject === "") {
            Swal.fire({
                icon: 'error',
                title: 'Plese give your Subject!',
                text: 'Please provide your subject!',
            })
            setSuccessMsg("")
        } else if (message === "") {
            Swal.fire({
                icon: 'error',
                title: 'Message is required!',
                text: 'Please some type your message!',
            })
            setSuccessMsg("")
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Messages has been sent Successfully!',
                text: `Thank you dear ${username}, Your Messages has been sent Successfully!`,
            })
            setErrMsg("");
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
        }
    };

    return (
        <Container>
            <div  id='contact' className='my-10 md:my-12 xl:my-16'>
                <h1 className='font-serif text-4xl'>Get In Touch</h1>
                <p className='font-serif text-gray-500 text-lg'>Feel free to drop us a line to contact us</p>
            </div>

            <div className='w-full pt-10'>
                <div className='xl:flex gap-20 items-center justify-center'>
                    <div className='w-full xl:w-[40%] xl:-mt-14'>
                        <ContactInfo></ContactInfo>
                    </div>

                    {/* right side */}
                    <div className='w-full xl:w-[60%] h-full px-4 md:px-0 md:-mt-24 from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne flex flex-col'>
                        <form ref={form} onSubmit={handleSend} className='w-full flex flex-col gap-6 py-2 pt-4 md:pt-32 xl:pt-4'>
                            {/* error and success message */}
                            {errMsg && (
                                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-yellow-400 text-base tracking-wide animate-bounce">
                                    {errMsg}
                                </p>
                            )}
                            {successMsg && (
                                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                                    {successMsg}
                                </p>
                            )}

                            <div className='w-full flex gap-10'>
                                {/* name */}
                                <div className='w-1/2 flex flex-col gap-4'>
                                    <p className='text-sm text-orange-400 uppercase tracking-wide font-serif'>Your Name</p>
                                    <input onChange={(e) => setUsername(e.target.value)} value={username} name='from_name' type="text" placeholder="name" className={`${errMsg === "Username is required!"
                                        } contactInput`} />
                                </div>

                                {/* phone number */}

                                <div className='w-1/2 flex flex-col gap-4'>
                                    <p className='text-sm text-orange-400 uppercase tracking-wide font-serif'>phone number</p>
                                    <input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} type="text" placeholder="phone" className={`${errMsg === "Phone number is required!" &&
                                        "outline-designColor"
                                        } contactInput`} />
                                </div>
                            </div>

                            <div className='w-full flex gap-10'>
                                {/* email */}
                                <div className='w-1/2 flex flex-col gap-4'>
                                    <p className='text-sm text-orange-400 uppercase tracking-wide font-serif'>email</p>
                                    <input onChange={(e) => setEmail(e.target.value)} value={email} name='user_email' type="email" placeholder="email" className={`${errMsg === "Please give your Email!" &&
                                        "outline-designColor"
                                        } contactInput`} />
                                </div>

                                {/* subject */}
                                <div className='w-1/2 flex flex-col gap-4'>
                                    <p className='text-sm text-orange-400 uppercase tracking-wide font-serif'>subject</p>
                                    <input onChange={(e) => setSubject(e.target.value)} value={subject} type="text" placeholder="subject" className={`${errMsg === "Plese give your Subject!" &&
                                        "outline-designColor"
                                        } contactInput`} />
                                </div>
                            </div>

                            {/* message */}
                            <div className='flex flex-col gap-4'>
                                <p className='text-sm text-orange-400 uppercase tracking-wide font-serif'>message</p>
                                <textarea onChange={(e) => setMessage(e.target.value)} value={message} name='message' rows="10" className={`${errMsg === "Message is required!" && "outline-designColor"} font-serif w-full p-4 border-[1px] border-orange-500 rounded-lg`} placeholder='Your Message'>
                                </textarea>
                            </div>

                            <div className='text-center'>
                                <input type="submit" className="btn btn-block font-serif btn-outline duration-300 btn-warning" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Contact;