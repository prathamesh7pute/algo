
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

const items = [0, 1, 2, 4, 6, 8, 9];
const index = binarySearch(items, 6, 0, items.length);
console.log(index);