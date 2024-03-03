function sum2DArray(arr) {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(Array.isArray(arr)) {
            setTimeout(() => {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                        sum += arr[i];
                    }
                console.log('resolving ... ');
                resolve(sum);
            }, 0);
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
        console.log('returning from sum');
    });
}
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let promise1 = sum2DArray(array2D[0]);
let promise2 = sum2DArray(array2D[1]);
let promise3 = sum2DArray(array2D[2]);

Promise.all([promise1, promise2, promise3])
    .then((responses) => {
        let sum = 0
        for (const response of responses) {
            sum = sum + response
        }
        console.log(sum);
    })
    .catch((error) => {
        console.error(`Failed to fetch: ${error}`);
    });