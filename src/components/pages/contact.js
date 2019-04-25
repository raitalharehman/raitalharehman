import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
//components  
import NavBar from '../nav-bar/nav-bar';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {nameValue: '', emailValue: '', messageValue: '',
                        nameClass: '', emailClass: '', messageClass: ''};
    
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleMessage = this.handleMessage.bind(this);

        this.sendMessage = this.sendMessage.bind(this);
    }

    componentWillReceiveProps() {
        document.title = "Contact - Rai Talha Rehman Khan";
    }

    componentDidMount() {
        document.title = "Contact - Rai Talha Rehman Khan";
    }

    //Handling the inputs
    handleName(event) {
        this.setState({ nameClass: '' });
        this.setState({nameValue: event.target.value});
    }

    handleEmail(event) {
        this.setState({ emailClass: '' });
        this.setState({emailValue: event.target.value});
    }

    handleMessage(event) {
        this.setState({ messageClass: '' });
        this.setState({messageValue: event.target.value});
    }

    sendMessage(event) {
        let name = this.state.nameValue ;
        if (this.state.nameValue === '') {
            this.setState({ nameClass: 'invalid' });
            return;
        }
        if (this.state.emailValue === '') {
            this.setState({ emailClass: 'invalid' });
            return;
        }
        if (this.state.messageValue === '') {
            this.setState({ messageClass: 'invalid' });
            return;
        }
        
        emailjs.init("user_dNOyVSSDZr2JNtu7WwefX");
        emailjs.send("gmail","talha-rehman",{name: this.state.nameValue, email: this.state.emailValue, message: this.state.messageValue}).then(function(response) {
            Swal.fire('Thanks ' + name, 'Hopfuly i will reply ASAP!', 'success')

         }, function(err) {
            Swal.fire('Oops...', 'Something went wrong!', 'error')
         });;

        //reset form
        this.setState({nameValue: ''});
        this.setState({emailValue: ''});
        this.setState({messageValue: ''});
    }  

  render() {
    return (
        <div className="contact-page">
            <NavBar page="contact"/>
            <div className="contact-container">
                <h2>Contact</h2>
                <div className="contact-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className={this.state.nameClass} id="name" value={this.state.nameValue} onChange={this.handleName} />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className={this.state.emailClass} id="email" value={this.state.emailValue} onChange={this.handleEmail} />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" className={this.state.messageClass} id="message" rows="4" value={this.state.messageValue} onChange={this.handleMessage}></textarea>
                    <div className="button send" onClick={this.sendMessage}>
                        <span className="icon is-small"><i className="fa fa-envelope"></i></span>
                        Send Message
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Contact;