const ksuid = require('ksuid');

const generateButton = document.getElementById("generateButton");
const ksuidEl = document.getElementById("ksuid");
const copyBtn = document.getElementById("copyBtn");
const ksuidContainer = document.getElementsByClassName("ksuid-container")[0];

generateButton.addEventListener("click", generateKSUID);
copyBtn.addEventListener("click", copyKSUID);

function generateKSUID() {
    const ksuidValue = ksuid.randomSync().string;
    document.getElementById("ksuid").innerHTML = ksuidValue;
    ksuidContainer.classList.add("show");
    copyBtn.classList.add("show");
}

function copyKSUID() {
    navigator.clipboard.writeText(ksuidEl.innerText).then(function () {
        // Change button text to "Copied!"
        copyBtn.innerHTML = "Copied!";

        // Reset button text after 1.5 seconds
        setTimeout(function () {
            copyBtn.innerHTML = "Copy to Clipboard";
        }, 1500);
    });
}

ksuidEl.addEventListener('click', function () {
    copyBtn.classList.add("show");
});
