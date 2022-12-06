'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var LikeButton = function (_React$Component) {
    _inherits(LikeButton, _React$Component);

    function LikeButton(props) {
        _classCallCheck(this, LikeButton);

        var _this = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

        _this.state = {
            fullName: '',
            email: '',
            comments: ''
        };

        _this.handleInputChange = _this.handleInputChange.bind(_this);
        return _this;
    }

    _createClass(LikeButton, [{
        key: 'handleInputChange',
        value: function handleInputChange(event) {
            this.setState(_defineProperty({}, event.target.name, event.target.value));
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            console.log('this.state', event);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { id: 'contactForm', onSubmit: this.handleSubmit },
                React.createElement(
                    'div',
                    { className: 'form-floating mb-3' },
                    React.createElement('input', { className: 'form-control', id: 'fullName', name: 'fullName', type: 'text', placeholder: 'Enter your name 2...', value: this.state.fullName, onChange: this.handleInputChange }),
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
                    React.createElement('input', { className: 'form-control', id: 'email', type: 'email', name: 'email', placeholder: 'name@example.com', value: this.state.email, onChange: this.handleInputChange }),
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
                    React.createElement('textarea', { className: 'form-control', id: 'comments', name: 'comments', placeholder: 'Enter your message here...', value: this.state.comments, style: { height: '10rem' }, onChange: this.handleInputChange }),
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
    }]);

    return LikeButton;
}(React.Component);