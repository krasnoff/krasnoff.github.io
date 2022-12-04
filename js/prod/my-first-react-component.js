'use strict';

var e = React.createElement;

function LikeButton() {
    var handleSubmit = function handleSubmit() {
        console.log('submitted');
    };

    return React.createElement(
        'form',
        { id: 'contactForm', onSubmit: function onSubmit() {
                return handleSubmit();
            } },
        React.createElement(
            'div',
            { className: 'form-floating mb-3' },
            React.createElement('input', { className: 'form-control', id: 'fullName', type: 'text', placeholder: 'Enter your name...' }),
            React.createElement(
                'label',
                { htmlFor: 'fullName' },
                'Full name'
            ),
            React.createElement(
                'div',
                { className: 'invalid-feedback' },
                'A name is required.'
            )
        ),
        React.createElement(
            'div',
            { className: 'form-floating mb-3' },
            React.createElement('input', { className: 'form-control', id: 'email', type: 'email', placeholder: 'name@example.com' }),
            React.createElement(
                'label',
                { htmlFor: 'email' },
                'Email address'
            ),
            React.createElement(
                'div',
                { className: 'invalid-feedback' },
                'An email is required.'
            ),
            React.createElement(
                'div',
                { className: 'invalid-feedback' },
                'Email is not valid.'
            )
        ),
        React.createElement(
            'div',
            { className: 'form-floating mb-3' },
            React.createElement('textarea', { className: 'form-control', id: 'comments', type: 'text', placeholder: 'Enter your message here...', style: { height: '10rem' } }),
            React.createElement(
                'label',
                { htmlFor: 'comments' },
                'Message'
            ),
            React.createElement(
                'div',
                { className: 'invalid-feedback' },
                'A message is required.'
            )
        ),
        React.createElement(
            'div',
            { className: 'd-none', id: 'submitSuccessMessage' },
            React.createElement(
                'div',
                { className: 'text-center mb-3' },
                React.createElement(
                    'div',
                    { className: 'fw-bolder' },
                    'Form submission successful!'
                ),
                React.createElement('br', null),
                React.createElement(
                    'a',
                    { href: 'https://startbootstrap.com/solution/contact-forms' },
                    'https://startbootstrap.com/solution/contact-forms'
                )
            )
        ),
        React.createElement(
            'div',
            { className: 'd-none', id: 'submitErrorMessage' },
            React.createElement(
                'div',
                { className: 'text-center text-danger mb-3' },
                'Error sending message!'
            )
        ),
        React.createElement(
            'button',
            { className: 'btn btn-primary btn-xl', id: 'submitButton', type: 'submit' },
            'Send'
        )
    );
}