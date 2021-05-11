import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {

    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        status: 'submit'
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ status: "Sending" });

        const { name, email, subject, message } = this.state;

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const body = JSON.stringify({ name, email, subject, message })

        try {
            axios.post('/api/email/contact', body, config);
            alert('Email Sent');
            this.setState({ name: '', email: '', subject: '', message: '', status: 'submit'});
        } catch (err) {
            alert(err);
        }
    }

    handleChange = e => {
        const field = e.target.id;
        if (field === 'name') {
            this.setState({ name: e.target.value });
        } else if (field === 'email') {
            this.setState({ email: e.target.value })
        } else if (field === 'subject') {
            this.setState({ subject: e.target.value });
        } else {
            this.setState({ message: e.target.value });
        }
    }

    render() {
        return (
            <section className='mb-4'>
                <h2 className='h1-responsive font-weight-bold text-center my-4'>Contact Us</h2>
                <p className='text-center w-responsive mx-auto mb-5'>
                    Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.
                </p>

                <div className='row justify-content-center'>
                    <div className='col-md-9 mb-md-0 mb-5'>
                        <form id='contact-form' onSubmit={this.handleSubmit.bind(this)} method='POST'>
                            <div className='row'>

                                <div className='col-md-6'>
                                    <div className='md-form mb-0'>
                                        <input
                                            type='text'
                                            id='name'
                                            className='form-control'
                                            value={this.state.name}
                                            onChange={this.handleChange.bind(this)}
                                            required />
                                        <label className=''>Your name</label>
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className='md-form mb-0'>
                                        <input type='text'
                                            id='email'
                                            name='email'
                                            className='form-control'
                                            value={this.state.email}
                                            onChange={this.handleChange.bind(this)}
                                            required />
                                        <label className=''>Your email</label>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className='md-form mb-0'>
                                        <input type='text'
                                            id='subject'
                                            name='subject'
                                            className='form-control'
                                            value={this.state.subject}
                                            onChange={this.handleChange.bind(this)}
                                            required />
                                        <label className=''>Subject</label>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className='md-form'>
                                        <textarea
                                            type='text'
                                            id='message'
                                            rows='2'
                                            className='form-control md-textarea'
                                            value={this.state.message}
                                            onChange={this.handleChange.bind(this)}
                                            required>
                                        </textarea>
                                        <label>Your message</label>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>

                                <div className='text-center text-md-left col'>
                                    <button className='btn btn-primary' type='submit'>Send</button>
                                </div>

                                <div className='col'>
                                    <ul className='list-unstyled mb-0'>
                                        <li><i className='mt-4 fa-2x'></i>
                                            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-envelope' viewBox='0 0 16 16'>
                                                <path d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z' />
                                            </svg>
                                            <p>jadenhums51@gmail.com</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className='col'>
                                    <ul className='list-unstyled mb-0'>
                                        <li><i className='mt-4 fa-2x'></i>
                                            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-telephone' viewBox='0 0 16 16'>
                                                <path d='M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z' />
                                            </svg>
                                            <p>+1 (905) 806 0672</p>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </form>
                    </div>

                </div>
            </section>
        )
    }
}

export default Contact;