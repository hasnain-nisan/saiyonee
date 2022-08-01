export const checkCheckBox = (el) => {
    let radios = document.querySelectorAll(".form-check-input");
    let selected_checkbox_id = el.id
    radios.forEach((radio) => {
        if(radio.id !== selected_checkbox_id) {
            radio.checked = false
        }
    })
}