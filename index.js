const rateState = document.querySelector(".rating-state");
const submitButton = document.querySelector(".submit");
const resubmitButton = document.querySelector("#resubmit");
const thankState = document.querySelector(".thanks-container");
const textScore = document.querySelector("#score-text");
const inputField = document.querySelectorAll(".rating-input");
const form = document.forms.namedItem("rating-form");

const setForm = ()=> {
    inputField.forEach(input => {
        input.addEventListener('change', () => {
            submitButton.disabled = false;
        });
    });
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const scoreSubmit = formData.get("rating");
        textScore.innerHTML = scoreSubmit;
        rateState.classList.add("hidden");
        thankState.classList.remove("hidden");
    });
    
    resubmitButton.addEventListener("click", (e)=> {
        e.preventDefault();
        thankState.classList.add("hidden");
        rateState.classList.remove("hidden");
        inputField.forEach(input => {
            input.checked = false;
        });
    });
};

setForm();
