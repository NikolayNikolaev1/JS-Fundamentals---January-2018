function calculateBiggestNumber([n1, n2, n3]) {
    let biggestNum = n1

    if (biggestNum <= n2) {
        biggestNum = n2
    }

    if (biggestNum <= n3) {
        biggestNum = n3
    }

    return biggestNum
}

console.log(calculateBiggestNumber([5, 5, 5]))