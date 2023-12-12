/**
 * Take the difference between the dates and divide by milliseconds per day.
 * Round to nearest whole number to deal with DST.
 */
function datediff(first, second) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

/**
 * new Date("dateString") is browser-dependent and discouraged, so we'll write
 * a simple parse function for U.S. date format (which does no error checking)
 */
function parseDate(str) {
    var mdy = str.split('/');
    console.log(mdy);
    return new Date(mdy[2], mdy[0] - 1, mdy[1]);

}

let birthdays = {
    '01/15/2024': 'день рождения мамы'
};

let day = Object.values(birthdays)[0];
let first = new Date();
let second = Object.keys(birthdays)[0];

alert('До '+ day + ' осталось дней: ' + datediff(first, parseDate(second)));