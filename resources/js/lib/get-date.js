export function getTimeStamp() {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
    const formattedDate = date.toLocaleDateString('en-SG', options);
    const time = date.toLocaleTimeString('id-ID', timeOptions);
    return `${formattedDate} at ${time}`;
}
