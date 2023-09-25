function timeConversion(s) {
    // Write your code here
    const pm = 'PM';
    const am = 'AM';
    const arr = s.split(':');
    let hour = parseInt(arr[0]);
    let minute = arr[1];
    let second = s.includes(pm) ? arr[2].replace(pm, '') : arr[2].replace(am, '');
    if (s.includes(pm) && hour < 12) {
        hour += 12;
    } else if (s.includes(am) && hour === 12) {
        hour -= 12;
    }
    hour = hour < 10 ? `0${hour}` : hour;
    return `${hour}:${minute}:${second}`
}

console.log(timeConversion('07:05:45PM'));
console.log(timeConversion('12:00:00AM'));
console.log(timeConversion('01:00:00AM'));
