'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            comments: ''
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('this.state', event);
    }


    render() {
        return (
            <form id="contactForm" onSubmit={this.handleSubmit}>
                <div className="form-floating mb-3">
                    <input className="form-control" id="fullName" name="fullName" type="text" placeholder="Enter your name 2..." value={this.state.fullName} onChange={this.handleInputChange} />
                    <label htmlFor="fullName">Full name</label>
                    <div className="invalid-feedback">A name is required.</div>
                </div>
                <div className="form-floating mb-3">
                    <input className="form-control" id="email" type="email" name="email" placeholder="name@example.com" value={this.state.email} onChange={this.handleInputChange} />
                    <label htmlFor="email">Email address</label>
                    <div className="invalid-feedback">An email is required.</div>
                    <div className="invalid-feedback">Email is not valid.</div>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" id="comments" name="comments" placeholder="Enter your message here..." value={this.state.comments} style={{height: '10rem'}} onChange={this.handleInputChange}></textarea>
                    <label htmlFor="comments">Message</label>
                    <div className="invalid-feedback">A message is required.</div>
                </div>
                <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center mb-3">
                        <div className="fw-bolder">Form submission successful!</div>
                        <br />
                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                    </div>
                </div>
                <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                <button className="btn btn-primary btn-xl" id="submitButton" type="submit">Send</button>
            </form>    
        );
    }
}

