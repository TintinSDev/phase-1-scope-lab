// Write your solution in this file!
var customerName = 'bob';
function upperCaseCustomerName() {
    if (typeof window.customerName === 'string') {
        window.customerName = window.customerName.toUpperCase();
    }
}


function setBestCustomer() {
    bestCustomer = 'not bob'; 
    return bestCustomer;
    
}

function overwriteBestCustomer(newBestCustomer) {
    bestCustomer = newBestCustomer;
    
}
const leastFavoriteCustomer = 'bob';
function changeLeastFavoriteCustomer() {
     leastFavoriteCustomer = 'not bob';
}