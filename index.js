const ksuid = require('ksuid');

function generateKSUID() {
    const ksuidValue = ksuid.randomSync().string;
    document.getElementById("ksuid").innerHTML = ksuidValue;
}

document.getElementById("generateButton").addEventListener("click", generateKSUID);
