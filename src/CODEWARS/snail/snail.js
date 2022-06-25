// Kata https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

/**
 * Get a snail
 * @param {number[][]} arr
 */
function snail(arr) {
    const Direction = {
        Top: 0,
        Right: 1,
        Bottom: 2,
        Left: 3,
    };

    let res = [];
    let top = 0,
        bottom = arr.length,
        left = 0,
        right = arr[0].length,
        direction = Direction.Right;

    while (top <= bottom && left <= right) {
        if (direction === Direction.Right) {
            for (let i = left; i < right; i++) {
                res.push(arr[top][i]);
            }
            direction = Direction.Bottom;
            top++;
        }

        if (direction === Direction.Bottom) {
            for (let i = top; i < bottom; i++) {
                res.push(arr[i][right - 1]);
            }

            direction = Direction.Left;
            right--;
        }

        if (direction === Direction.Left) {
            for (let i = right - 1; i >= left; i--) {
                res.push(arr[bottom - 1][i]);
            }
            direction = Direction.Top;
            bottom--;
        }

        if (direction === Direction.Top) {
            for (let i = bottom - 1; i >= top; i--) {
                const el = arr[i][left];
                res.push(el);
            }

            direction = Direction.Right;
            left++;
        }
    }

    return res;
}

const array = [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
];
const array2 = [
    [1,  2,  3,  4,  5],
    [6,  7,  8,  9,  10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
];
console.log(snail(array));
console.log(snail(array2));
