//! Donate for Flood at Noakhali, Bangladesh

document.getElementById('noakhali-donate-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const mainDonationBalance = getTextValueById('main-donation-balance');
        const donationAmount = getInputValueById('noakhali-input-field');
        const balanceRemaining = mainDonationBalance - donationAmount;  //Going to top right bar
        const noakhaliGotDonation = getTextValueById('noakhali-donation-amount');
        const noakhaliTotalDonation = noakhaliGotDonation + donationAmount;

        if (mainDonationBalance < donationAmount) {
            alert('You have not enough Balance');
            return;
        }

        if (donationAmount > 0 && isNaN(donationAmount) == !true) {
            document.getElementById('noakhali-donation-amount').innerText = noakhaliTotalDonation;
            document.getElementById('main-donation-balance').innerText = balanceRemaining;
            document.getElementById('my_modal_5').showModal();


            const p = document.createElement('p');
            p.innerText = `You Donated ${donationAmount} BDT for Flood at Noakhali, Bangladesh`
            document.getElementById('modal-container').appendChild(p);

            const div = document.createElement('div');
            div.innerHTML = `<div class="border p-8 w-full mb-3 rounded-lg"><h1 class="font-semibold text-xl ">${donationAmount} Taka is Donated for Flood at Noakhali, Bangladesh</h1>
            <p> Date: ${new Date()}</p></div>                      
            `
            document.getElementById('history-added').appendChild(div);

        }
        else {
            alert('Invalid Input')
        }

    })

//! Donate for Flood Relief in Feni,Bangladesh

document.getElementById('feni-donate-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const mainDonationBalance = getTextValueById('main-donation-balance');
        const donationAmount = getInputValueById('feni-input-field');
        const balanceRemaining = mainDonationBalance - donationAmount;  //Going to top right bar
        const feniGotDonation = getTextValueById('feni-donation-amount');
        const feniTotalDonation = feniGotDonation + donationAmount;

        if (mainDonationBalance < donationAmount) {
            alert('You have not enough Balance');
            return;
        }

        if (donationAmount > 0 && isNaN(donationAmount) == !true) {
            document.getElementById('feni-donation-amount').innerText = feniTotalDonation;
            document.getElementById('main-donation-balance').innerText = balanceRemaining;
            document.getElementById('my_modal_5').showModal();

            const p = document.createElement('p');
            p.innerText = `You Donated ${donationAmount} BDT for Flood Relief in Feni,Bangladesh`
            document.getElementById('modal-container').appendChild(p);

            const div = document.createElement('div');
            div.innerHTML = `<div class="border p-8 w-full mb-3 rounded-lg"><h1 class="font-semibold text-xl ">${donationAmount} Taka is Donated for Flood Relief in Feni,Bangladesh</h1>
            <p> Date: ${new Date()}</p></div>                      
            `
            document.getElementById('history-added').appendChild(div);


        }
        else {
            alert('Invalid Input')

        }
    })

//! Donate for Injured in the Quota Movement

document.getElementById('quota-input-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const mainDonationBalance = getTextValueById('main-donation-balance');
        const donationAmount = getInputValueById('quota-input-field');
        const balanceRemaining = mainDonationBalance - donationAmount;  //Going to top right bar
        const quotaGotDonation = getTextValueById('quota-donation-amount');
        const quotaTotalDonation = quotaGotDonation + donationAmount;

        if (mainDonationBalance < donationAmount) {
            alert('You have not enough Balance');
            return;
        }

        if (donationAmount > 0 && isNaN(donationAmount) == !true) {
            document.getElementById('quota-donation-amount').innerText = quotaTotalDonation;
            document.getElementById('main-donation-balance').innerText = balanceRemaining;
            document.getElementById('my_modal_5').showModal();

            const p = document.createElement('p');
            p.innerText = `You Donated ${donationAmount} BDT for Injured in the Quota Movement`
            document.getElementById('modal-container').appendChild(p);

            const div = document.createElement('div');
            div.innerHTML = `<div class="border p-8 w-full mb-3 rounded-lg"><h1 class="font-semibold text-xl ">${donationAmount} Taka is Donated for Injured in the Quota Movement</h1>
            <p> Date: ${new Date()}</p></div>                      
            `
            document.getElementById('history-added').appendChild(div);

        }
        else {
            alert('Invalid Input')

        }
    })

//! Modal Message Reset

document.getElementById('close-modal-btn').addEventListener('click', function () {
    const modal = document.getElementById('my_modal_5');
    modal.close();

    setTimeout(function () {
        const modalMessage = document.getElementById('modal-container');
        modalMessage.innerText = '';
    },);
});
