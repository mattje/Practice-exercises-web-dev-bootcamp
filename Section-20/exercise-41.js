function capitalize(string) {
    let firstLetter = string[0].toUpperCase();
    let unchangedPortion = string.slice(1,);
    return firstLetter + unchangedPortion;
}

// New method without treating strings as immutable
// return string.replace(string[0], string[0].toUpperCase);