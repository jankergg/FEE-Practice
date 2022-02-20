export default function consecutive(arr) {
    let zero_start = false;
    let zero_end = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            if (zero_start && zero_end) {
                return false;
            }
            zero_start = true;
        } else {
            if (zero_start) {
                zero_end = true;
            }
        }
    }

    if (!zero_start) {
        return false;
    }
    return true;
}
