// const newDate = new Date().toDateString();
// console.log(newDate)

function timeConverter(UNIX_timestamp) {
  var a = new Date(1644924365 * 1000);
  var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var time = date + 'th' + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
  return time;
}
console.log(
  new Date(1644924365 * 1000) > Math.round(new Date().getTime() / 1000),
);
console.log(timeConverter());
console.log(Math.round(new Date().getTime() / 1000));