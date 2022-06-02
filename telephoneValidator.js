//Return true if the passed string looks like a valid US phone number.
//The user may fill out the form field any way they choose as long as it has the format of a valid US number.
function telephoneCheck(str) {
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
}
