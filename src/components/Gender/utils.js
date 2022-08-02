export const changeSelectedGender = (e) => {
  const el = e.target;
  console.log(el);
  const genderRadios = document.getElementsByName("genderRadio");
  for (let i = 0; i < genderRadios.length; i++) {
    const genderDiv = genderRadios[i].nextElementSibling.getElementsByTagName("div")[0];
    const genderText = genderRadios[i].nextElementSibling.getElementsByTagName("p")[0];
    if (genderRadios[i].checked) {
      genderDiv.className = "user-gender-options user-form-gender-option-selected";
      genderText.className = "user-form-gender-option-text-selected";
    } else {
        genderDiv.className = "user-gender-options user-form-gender-option-not-selected";
        genderText.className = "user-form-gender-option-text-not-selected";
    }
  }
};
