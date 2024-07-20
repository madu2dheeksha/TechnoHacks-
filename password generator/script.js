document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generate-btn');
    const passwordLengthInput = document.getElementById('password-length');
    const includeUppercaseCheckbox = document.getElementById('include-uppercase');
    const includeLowercaseCheckbox = document.getElementById('include-lowercase');
    const includeNumbersCheckbox = document.getElementById('include-numbers');
    const includeSpecialCheckbox = document.getElementById('include-special');
    const generatedPasswordInput = document.getElementById('generated-password');

    generateBtn.addEventListener('click', function() {
        const passwordLength = parseInt(passwordLengthInput.value);
        const includeUppercase = includeUppercaseCheckbox.checked;
        const includeLowercase = includeLowercaseCheckbox.checked;
        const includeNumbers = includeNumbersCheckbox.checked;
        const includeSpecial = includeSpecialCheckbox.checked;

        const password = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSpecial);
        generatedPasswordInput.value = password;
    });

    function generatePassword(length, uppercase, lowercase, numbers, special) {
        let charset = '';
        if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (numbers) charset += '0123456789';
        if (special) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }

        return password;
    }
});
