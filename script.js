function getQueryParam(param) {
const urlParams = new URLSearchParams(window.location.search);
return urlParams.get(param);
}
const invoiceRef = getQueryParam("ref");
const invoiceRefElement = document.getElementById("invoiceRef");
const invalidMessage = document.getElementById("invalidMessage");
const invoiceBox = document.getElementById("invoiceBox");
if (!invoiceRef) {
invoiceBox.style.display = "none";
invalidMessage.textContent = "Invalid invoice link. Please contact support.";
} else {
invoiceRefElement.textContent = invoiceRef;
}
document.getElementById("confirmBtn").addEventListener("click", function() {
if (!invoiceRef) return;
const message = `Hello,%0AInvoice Reference: ${invoiceRef}%0APayment Method Used:%0ASender Name:%0AAdditional Details:`;
window.location.href = `https://t.me/GuangzhouWS?text=${message}`;
});
document.querySelectorAll(".support-link").forEach(link => {
link.addEventListener("click", function(e) {
e.preventDefault();
if (!invoiceRef) return;
const user = this.dataset.user;
const message = `Hello,%0AInvoice Reference: ${invoiceRef}%0ACountry:%0AInquiry:`;
window.location.href = `https://t.me/${user}?text=${message}`;
});
});
