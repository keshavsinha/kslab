document.getElementById('password').addEventListener('input', function() {

    var password = this.value;

    var strengthBar = document.getElementById('strengthBar');

    var strengthText = document.getElementById('strengthText');

    var timeToHack = document.getElementById('timeToHack');

    var criteria = {

        length: document.getElementById('length'),

        lowercase: document.getElementById('lowercase'),

        uppercase: document.getElementById('uppercase'),

        number: document.getElementById('number'),

        special: document.getElementById('special')

    };

    var strength = 0;



    // Check length

    if (password.length >= 8) {

        criteria.length.classList.remove('invalid');

        criteria.length.classList.add('valid');

        strength += 1;

    } else {

        criteria.length.classList.remove('valid');

        criteria.length.classList.add('invalid');

    }



    // Check lowercase letters

    if (password.match(/[a-z]/)) {

        criteria.lowercase.classList.remove('invalid');

        criteria.lowercase.classList.add('valid');

        strength += 1;

    } else {

        criteria.lowercase.classList.remove('valid');

        criteria.lowercase.classList.add('invalid');

    }



    // Check uppercase letters

    if (password.match(/[A-Z]/)) {

        criteria.uppercase.classList.remove('invalid');

        criteria.uppercase.classList.add('valid');

        strength += 1;

    } else {

        criteria.uppercase.classList.remove('valid');

        criteria.uppercase.classList.add('invalid');

    }



    // Check numbers

    if (password.match(/[0-9]/)) {

        criteria.number.classList.remove('invalid');

        criteria.number.classList.add('valid');

        strength += 1;

    } else {

        criteria.number.classList.remove('valid');

        criteria.number.classList.add('invalid');

    }



    // Check special characters

    if (password.match(/[\W_]/)) {

        criteria.special.classList.remove('invalid');

        criteria.special.classList.add('valid');

        strength += 1;

    } else {

        criteria.special.classList.remove('valid');

        criteria.special.classList.add('invalid');

    }



    var strengthColors = ['#ddd', '#f00', '#f90', '#ff0', '#9f0', '#0f0'];

    var strengthTexts = ['Too Short', 'Very Weak', 'Weak', 'Medium', 'Strong', 'Very Strong'];



    strengthBar.innerHTML = `<div style="width: ${strength * 20}%; background-color: ${strengthColors[strength]}"></div>`;

    strengthText.textContent = strengthTexts[strength];



    // Calculate time to hack

    var charsetSize = 0;

    if (password.match(/[a-z]/)) charsetSize += 26;

    if (password.match(/[A-Z]/)) charsetSize += 26;

    if (password.match(/[0-9]/)) charsetSize += 10;

    if (password.match(/[\W_]/)) charsetSize += 33; // Approximation for special characters



    var attemptsPerSecond = 1000000000; // 1 billion attempts per second

    var totalAttempts = Math.pow(charsetSize, password.length);

    var secondsToHack = totalAttempts / attemptsPerSecond;



    // Convert seconds to more readable time

    var timeText = '';

    var years = Math.floor(secondsToHack / (60 * 60 * 24 * 365));

    var days = Math.floor((secondsToHack % (60 * 60 * 24 * 365)) / (60 * 60 * 24));

    var hours = Math.floor((secondsToHack % (60 * 60 * 24)) / (60 * 60));

    var minutes = Math.floor((secondsToHack % (60 * 60)) / 60);

    var seconds = Math.floor(secondsToHack % 60);



    if (years > 0) {

        timeText = `${years} years, ${days} days`;

    } else if (days > 0) {

        timeText = `${days} days, ${hours} hours`;

    } else if (hours > 0) {

        timeText = `${hours} hours, ${minutes} minutes`;

    } else if (minutes > 0) {

        timeText = `${minutes} minutes, ${seconds} seconds`;

    } else {

        timeText = `${seconds} seconds`;

    }



    timeToHack.textContent = 'Time to hack: ' + timeText;

});
