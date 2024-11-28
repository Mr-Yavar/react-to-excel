export function isTimeFormat(text:string):boolean {
    // Regular expression pattern for time format (HH:MM)
    const timePattern = /^(?:[01]\d|2[0-3]):[0-5]\d$/;

    return timePattern.test(text);
}