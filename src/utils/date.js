export const toTimestamp = (date) => Date.parse(date) / 1000;

export const convertTimeToRelative = (previous) => {
    const current = new Date();
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;

    const elapsed = current - new Date(previous);

    if (elapsed < msPerMinute) {
        return Math.floor(elapsed / 1000) + ' seconds ago';
    } else if (elapsed < msPerHour) {
        return Math.floor(elapsed / msPerMinute) + ' minutes ago';
    } else if (elapsed < msPerDay) {
        return Math.floor(elapsed / msPerHour) + ' hours ago';
    } else if (elapsed < msPerDay * 8) {
        const day = Math.floor(elapsed / msPerDay);
        const dayNoun = day > 1 ? 'days' : 'day';
        return `${day} ${dayNoun} ago`;
    } else {
        return new Date(previous).toLocaleDateString('en-US');
    }
};
