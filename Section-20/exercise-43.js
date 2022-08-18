const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function returnDay(dayNum) {
    if (dayNum < 1 || dayNum > 7) {
        return null;
    }
    return daysOfWeek[dayNum - 1];
}