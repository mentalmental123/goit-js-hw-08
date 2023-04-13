import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form') ,
    input: document.querySelector('input'),
    textarea : document.querySelector('textarea')
}

const formData = {
    email: '',
    message: ''
}

refs.form.addEventListener('input', throttle( getFormData,500));
function getFormData(evt) {

    if (evt.target.nodeName == 'TEXTAREA') {
        formData.message = evt.target.value;
    } else if (evt.target.nodeName == 'INPUT') {
        formData.email = evt.target.value;
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    return;

}


try {
const getStorageData = JSON.parse(localStorage.getItem("feedback-form-state"));

if (getStorageData.email !== '') {
    refs.input.value = getStorageData.email;
    // formData.email = getStorageData.email;
}
if(getStorageData.message !== '') {
    refs.textarea.value = getStorageData.message;
    // formData.message = getStorageData.message;
}
} catch (error) {
    console.log(error.message);
}

refs.form.addEventListener('submit', logFormData)

function logFormData(evt) {
    evt.preventDefault();
    if (refs.input.value === '' || refs.textarea.value === '') {
        alert('Please fill all the field"s!!');
        return;
    }
    console.log(formData);
    refs.form.reset();
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    // getStorageData.email = '';
    // getStorageData.message = '';
}


