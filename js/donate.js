// Donate for Flood at Noakhali, Bangladesh
// Donate Part

document.getElementById('noakhali-donate-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const mainDonationBalance = getTextValueById('main-donation-balance');
        const donationAmount = getInputValueById('noakhali-input-field');
        const balanceRemaining = mainDonationBalance - donationAmount;  //Going to top right bar
        const noakhaliGotDonation = getTextValueById('noakhali-donation-amount');
        const noakhaliTotalDonation = noakhaliGotDonation + donationAmount;


        if (donationAmount > 0 && isNaN(donationAmount) == !true) {
            document.getElementById('noakhali-donation-amount').innerText = noakhaliTotalDonation;
            document.getElementById('main-donation-balance').innerText = balanceRemaining;

        }
        else {
            alert('Invalid Input')
        }

    })