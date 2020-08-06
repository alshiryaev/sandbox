
function timeConversion(s) {
    const [hh, mm, ss] = s.split(':');
    const formatedSeconds = `${ss[0]}${ss[1]}`;
    if (ss.includes('PM')) {
        const formatedHours = +hh === 12 ? '00' : +hh;
        return `${+formatedHours + 12}:${mm}:${formatedSeconds}`;
    } else {
        const formatedHours = +hh === 12 ? '00' : hh;
        return `${formatedHours}:${mm}:${formatedSeconds}`;
    }
}
module.exports = timeConversion;