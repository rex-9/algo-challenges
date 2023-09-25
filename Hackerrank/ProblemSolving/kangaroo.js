function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    if (x2 < x1 && v2 <= v1) return "NO";
    if (x2 > x1 && v2 >= v1) return "NO";
    
    if ((x2 - x1) % (v1 - v2) == 0)
        // Points will meet at some point
        return "YES";
    else
        // Points will never meet
        return "NO";

    // let counter = 0;
    // while (x1 !== x2) {
    //     console.log(x1, v1)
    //     x1 += v1;
    //     x2 += v2;
    //     counter++;
    //     if (x1 === x2) {
    //         return 'YES';
    //     } else if (counter === 10000) {
    //         return 'NO';
    //     }
    // }
}

console.log(kangaroo(0, 3, 4, 2));
