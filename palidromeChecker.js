
    function palindrome(str) {
        // Good luck!
        var newStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        var newStrRev = newStr.split('').reverse().join('');
        return newStr === newStrRev;
    }
    palindrome("eye");
    