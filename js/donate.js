// Donate for Flood at Noakhali, Bangladesh
document.getElementById('noakhali-donate-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const mainDonationBalance = getTextValueById('main-donation-balance');
        const donationAmount = getInputValueById('noakhali-input-field');
        const balanceRemaining = mainDonationBalance - donationAmount;  //Going to top right bar
        const noakhaliGotDonation = getTextValueById('noakhali-donation-amount');
        const noakhaliTotalDonation = noakhaliGotDonation + donationAmount;

        if (mainDonationBalance < donationAmount) {
            alert('You have not enoung Balance');
            return;
        }

        if (donationAmount > 0 && isNaN(donationAmount) == !true) {
            document.getElementById('noakhali-donation-amount').innerText = noakhaliTotalDonation;
            document.getElementById('main-donation-balance').innerText = balanceRemaining;

        }
        else {
            alert('Invalid Input')
        }

    })

// Donate for Flood Relief in Feni,Bangladesh
document.getElementById('feni-donate-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const mainDonationBalance = getTextValueById('main-donation-balance');
        const donationAmount = getInputValueById('feni-input-field');
        const balanceRemaining = mainDonationBalance - donationAmount;  //Going to top right bar
        const feniGotDonation = getTextValueById('feni-donation-amount');
        const feniTotalDonation = feniGotDonation + donationAmount;

        if (mainDonationBalance < donationAmount) {
            alert('You have not enoung Balance');
            return;
        }

        if (donationAmount > 0 && isNaN(donationAmount) == !true) {
            document.getElementById('feni-donation-amount').innerText = feniTotalDonation;
            document.getElementById('main-donation-balance').innerText = balanceRemaining;

        }
        else {
            alert('Invalid Input')
        }
    })