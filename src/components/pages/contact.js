import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import Loader from 'react-loader-spinner';

//components  
import NavBar from '../nav-bar/nav-bar';

function InputTag(props) {
    const { type, value, onChange, label } = props;
    return (
        <div>
            <label htmlFor={type}>{label}</label>
            <input required type={type} name={type} value={value} onChange={onChange} />
        </div>
    );
}

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValue: '',
            emailValue: '',
            messageValue: '',
            loader: false,
            loaderStyle: ['Bars', 'Ball-Triangle', 'Circles', 'Oval', 'Rings', 'Puff', 'TailSpin']
        };
        this.handleChange = this.handleChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    componentWillReceiveProps() {
        document.title = "Contact - Rai Talha Rehman Khan";
    }

    componentDidMount() {
        document.title = "Contact - Rai Talha Rehman Khan";
    }

    handleChange(key, event) {
        this.setState({ [key]: event.target.value });
    }

    sendMessage(event) {
        event.preventDefault();
        let context = this;
        this.setState({ loader: true });

        emailjs.init("user_dNOyVSSDZr2JNtu7WwefX");
        emailjs.send("gmail", "talha-rehman", { name: this.state.nameValue, email: this.state.emailValue, message: this.state.messageValue }).then(function (response) {
            context.setState({ loader: false });
            Swal.fire('Thanks ' + context.state.nameValue, 'Hopfuly i will reply ASAP!', 'success')

        }, function (err) {
            context.setState({ loader: false });
            Swal.fire('Oops...', 'Something went wrong!', 'error')
        });;

        //reset form
        this.setState({ nameValue: '' });
        this.setState({ emailValue: '' });
        this.setState({ messageValue: '' });
    }

    render() {
        return (
            <div className="contact-page">
                <NavBar page="contact" />
                <div className="contact-container">
                    <h2>Contact</h2>
                    {this.state.loader ?
                        <div className="loader">
                            <Loader
                                type={this.state.loaderStyle[Math.floor(Math.random() * this.state.loaderStyle.length)]}
                                color="#00BFFF"
                                height="100"
                                width="100"
                            />
                        </div>
                        : <div></div>
                    }
                    <form className="contact-form" onSubmit={this.sendMessage}>
                        <InputTag label="Name" type="text" value={this.state.nameValue} onChange={this.handleChange.bind(this, 'nameValue')} />
                        <InputTag label="Email" type="email" value={this.state.emailValue} onChange={this.handleChange.bind(this, 'emailValue')} />
                        <label htmlFor="message">Message</label>
                        <textarea required name="message" rows="4" value={this.state.messageValue} onChange={this.handleChange.bind(this, 'messageValue')}></textarea>
                        <button type="submit" className="button send">
                            <span className="icon is-small"><i className="fa fa-envelope"></i></span>
                            Send Message
                    </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;