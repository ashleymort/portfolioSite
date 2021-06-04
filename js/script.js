
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 20) {
    greeting = 'Good Night';

}else if (hourNow > 18) {
    greeting = 'Good Evening';

}else if (hourNow > 12) {
    greeting = 'Good Afternoon';

}else if (hourNow > 6) {
    greeting = 'Good Morning';

}else {
    greeting = 'Welcome';
}

document.write('<h1>' + greeting + '</h1>'); 


