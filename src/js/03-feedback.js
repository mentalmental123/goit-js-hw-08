import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form') ,
    input: document.querySelector('input'),
    texarea : document.querySelector('textarea')
}

const formData = {
    email: '',
    message: ''
}


refs.form.addEventListener('input', throttle( getFormData,500));

function getFormData(evt) {
    if (evt.target.nodeName == 'TEXTAREA'  ) {
        formData.message = evt.target.value;
    } else if (evt.target.nodeName == 'INPUT') {
        formData.email = evt.target.value;
    }
    localStorage.setItem("feedback-form-state",JSON.stringify(formData));
    return;
}

refs.form.addEventListener('submit', logFormData)

function logFormData(evt) {
    evt.preventDefault();
    console.log(formData);
    refs.form.reset();
    localStorage.clear();
}

const getStorageData = JSON.parse(localStorage.getItem("feedback-form-state"));

if (getStorageData.email !== '' && getStorageData.message !== '') {
    refs.input.value = getStorageData.email;
    refs.texarea.value = getStorageData.message;
}
    
