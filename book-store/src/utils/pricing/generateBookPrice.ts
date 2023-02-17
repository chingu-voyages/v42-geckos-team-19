/* Formula to generate price from book title */
 function generateBookPrice(title: string) {
        let sum = 0;
        for (var i = 0; i < title.length; i++) {
            sum += title.charCodeAt(i);
        }
        /* If title is undefined or non-English */
        if (sum == 0) {
            sum = 1000;
        }

        /* We want prices to be $10-25 */
        while (sum < 1000) {
            sum += 1000;
        }
        if (sum < 1000) {
            // max sum will be is 999
            // so just add 1000
            sum += 1000;
            // so max sum will be now is 1999;

        }
        while (sum > 2500) {
            sum -= 1000;
        }
        if (sum > 2500) {
            // sum % 1500 gives a value of 1 and 1499
            sum = sum % 1500 + 1000
        }
        return (sum / 100).toFixed(2); // keep trailing zeros
    }

    function sumCharCodes(title: string) {
        let sum = 0;
        for (var i = 0; i < title.length; i++) {
            sum += title.charCodeAt(i);
        }
        return sum;
    }



    console.log('The Great Gatsby');

    export default generateBookPrice;