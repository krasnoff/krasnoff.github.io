var submitit = false;

function handleSubmit() {
    event.preventDefault();
    var form = document.getElementById("contactForm");
    var data = {
        email: form[1].value,
        fullName: form[0].value,
        comments: form[2].value
    }
    console.log('form', form[0].value);
    console.log('data', data);

    return false;
}