// JavaScript for displaying current day of the week and UTC time
const currentDate = new Date();
const currentDayOfTheWeek = currentDate.toLocaleDateString(undefined, { weekday: 'long' });
const currentUTCTime = currentDate.toUTCString();

document.getElementById('currentDayOfTheWeek').textContent = `Current Day: ${currentDayOfTheWeek}`;
document.getElementById('currentUTCTime').textContent = `Current UTC Time: ${currentUTCTime}`;
