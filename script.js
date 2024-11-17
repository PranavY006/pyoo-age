
// Put your birthdate here
const year_user = 2004;
const month_user = 1;
const day_user = 6;


// Inisial Logic
/* 
function updateTime() {
    const now = new Date();
    const year = now.getFullYear() - year_user;
    const month = (now.getMonth() - month_user) /12;
    const day = (now.getDate() - day_user) / (30 * 12);
    const hours = now.getHours() / (24 * 365);
    const minutes = now.getMinutes() / (60 * 24 * 365);
    const seconds = now.getSeconds() / (60 * 60 * 24 * 365);
    const milliseconds = now.getMilliseconds() / (1000 * 60 * 60 * 24 * 365);

    
    const time =  year + month + hours + day + minutes + seconds;

    const finalage = time.toFixed(11);

    document.getElementById('age').innerText = finalage;
}
*/ 

// Updated Logic

function updateTime() {
    const now = new Date();
    const birthDate = new Date(year_user, month_user - 1, day_user);
    const ageInMilliseconds = now - birthDate;

    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // Including leap years
    const ageInYears = ageInMilliseconds / millisecondsInYear;

    // Format the total age to 6 decimal places
    const formattedAge = ageInYears.toFixed(10);

    document.getElementById('age').innerText = formattedAge;
}

updateTime();
setInterval(updateTime, 100);

