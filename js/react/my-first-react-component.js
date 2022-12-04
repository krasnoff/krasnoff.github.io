'use strict';

const e = React.createElement;

function LikeButton() {
    const handleSubmit = () => {
        console.log('submitted')
    }

    return (
        <form id="contactForm" onSubmit={() =>handleSubmit()}>
        <div className="form-floating mb-3">
            <input className="form-control" id="fullName" type="text" placeholder="Enter your name..." />
            <label htmlFor="fullName">Full name</label>
            <div className="invalid-feedback">A name is required.</div>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="email" type="email" placeholder="name@example.com" />
            <label htmlFor="email">Email address</label>
            <div className="invalid-feedback">An email is required.</div>
            <div className="invalid-feedback">Email is not valid.</div>
        </div>
        <div className="form-floating mb-3">
            <textarea className="form-control" id="comments" type="text" placeholder="Enter your message here..." style={{height: '10rem'}}></textarea>
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