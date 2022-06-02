//Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
function rot13(str) {
    var Str = '';
    for (var i = 0; i < str.length; i++) {
        var ch = str.charCodeAt(i);
        if (ch >= 65 && ch <= 90) {
            if (ch >= 78) {
                ch = ch - 13;
            }
            else {
                ch = ch + 13;
            }
        }
        Str += String.fromCharCode(ch);
    }
    return Str;
}

