let bubbleComparisons = 0;
let quickComparisons = 0;

// Bubble Sort
function bubbleSort(arr, key, ascending = true) {

    bubbleComparisons = 0;

    const result = [...arr];

    for (let i = 0; i < result.length - 1; i++) {

        for (let j = 0; j < result.length - i - 1; j++) {

            bubbleComparisons++;

            const condition = ascending
                ? result[j][key] > result[j + 1][key]
                : result[j][key] < result[j + 1][key];

            if (condition) {
                [result[j], result[j + 1]] =
                [result[j + 1], result[j]];
            }
        }
    }

    return result;
}

// Quick Sort
function quickSort(arr, key, ascending = true) {

    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];

    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {

        quickComparisons++;

        const condition = ascending
            ? arr[i][key] < pivot[key]
            : arr[i][key] > pivot[key];

        if (condition) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [
        ...quickSort(left, key, ascending),
        pivot,
        ...quickSort(right, key, ascending)
    ];
}

function resetQuickComparisons() {
    quickComparisons = 0;
}

module.exports = {
    bubbleSort,
    quickSort,
    resetQuickComparisons,
    getBubbleComparisons: () => bubbleComparisons,
    getQuickComparisons: () => quickComparisons
};