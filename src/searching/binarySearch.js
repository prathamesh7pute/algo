/*
*   binarySearch to find position of element in the array
*/
const binarySearch = (items, x, low, high) => {

    if (low > high) {
        return -1;
    }

    const middle = Math.floor((low + high) / 2);

    if (items[middle] === x) {
        return middle;
    } else if (items[middle] > x) {
        return binarySearch(items, x, low, middle - 1);
    } else {
        return binarySearch(items, x, middle + 1, high);
    }

};

export default binarySearch;