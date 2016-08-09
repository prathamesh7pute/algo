/*
*   binarySearch to find position of element in the array
*/
const binarySearchRecursive = (items, x, low, high) => {

    if (low > high) {
        return -1;
    }

    const middle = Math.floor((low + high) / 2);

    if (items[middle] === x) {
        return middle;
    } else if (items[middle] > x) {
        return binarySearchRecursive(items, x, low, middle - 1);
    } else {
        return binarySearchRecursive(items, x, middle + 1, high);
    }

};

const binarySearchIterative = (items, x) => {

    let low = 0;
    let high = items.length;

    while (low <= high) {

        const middle = Math.floor((low + high) / 2);

        if (items[middle] === x) {
            return middle;
        } else if (items[middle] < x) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }

    }

}

export { binarySearchRecursive, binarySearchIterative };