// Handle Airtime/Data/Payments
const responseBox = document.getElementById("responseBox");

function showMessage(message) {
    responseBox.style.display = "block";
    responseBox.innerText = message;
}

// Buy Airtime
function buyAirtime() {
    const amount = document.getElementById("airtimeAmount").value;
    const network = document.getElementById("airtimeNetwork").value;

    if (!amount || !network) {
        return showMessage("Please enter amount and select network.");
    }

    showMessage(`Airtime purchase of ₦${amount} on ${network} processed successfully!`);
}

// Buy Data
function buyData() {
    const plan = document.getElementById("dataPlan").value;
    const network = document.getElementById("dataNetwork").value;

    if (!plan || !network) {
        return showMessage("Please select a data plan and network.");
    }

    showMessage(`Data plan (${plan}) on ${network} activated successfully!`);
}

// Transfer Money
function sendMoney() {
    const amount = document.getElementById("sendAmount").value;
    const bank = document.getElementById("sendBank").value;
    const acct = document.getElementById("sendAccount").value;

    if (!amount || !bank || !acct) {
        return showMessage("Please fill all transfer details.");
    }

    showMessage(`₦${amount} sent to account ${acct} at ${bank}.`);
}

// POS Transaction
function posWithdraw() {
    const amount = document.getElementById("posAmount").value;

    if (!amount) {
        return showMessage("Enter withdrawal amount.");
    }

    showMessage(`POS cash withdrawal of ₦${amount} completed.`);
}
