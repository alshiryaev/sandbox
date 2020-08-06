module.exports = calculate = (width, height) => {
    if (width !== height) {
        const min = Math.min.call(null, width, height);
        const max = Math.max.call(null, width, height);
        let delta = min;
        while (delta + min < max) {
            delta += min;
        }

        const side = max - delta;
        return calculate(min, side);
    }
    return [width, height];
}
