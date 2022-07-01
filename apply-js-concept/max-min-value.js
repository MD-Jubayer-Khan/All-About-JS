function findLargest(first, second, third){
    if (first > second && first > third){
        return first;
    };
     if (second > first && second > third){
        return second;
    }
    else {
        return third;
    };
}
const largest = findLargest(355, 655, 88);
console.log(largest);

// find smallest

function findSmallest(first, second, third){
    if (first < second && first < third){
        return first;
    };
     if (second < first && second < third){
        return second;
    }
    else {
        return third;
    };
}
const smallest = findSmallest(355, 655, 88);
console.log(smallest);