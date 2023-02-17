/* Formula to generate price from book title */
 function generateBookPrice(title: string) {
        let sum = sumCharCodes(title);
        let cents = sum;
        /* If title is undefined or non-English */
        if (cents == 0) {
            cents = 1000;
        }

        /* We want prices to be $10-25 */
        while (cents < 1000) {
            cents += 1000;
        }
        if (cents < 1000) {
            // max cents will be is 999
            // so just add 1000
            cents += 1000;
            // so max cents will be now is 1999;

        }
        while (cents > 2500) {
            cents -= 1000;
        }
        if (cents > 2500) {
            // cents % 1500 gives a value of 1 and 1499
            cents = cents % 1500 + 1000
        }
        return (cents / 100).toFixed(2); // keep trailing zeros
    }

    function sumCharCodes(title: string) {
        let sum = 0;
        for (var i = 0; i < title.length; i++) {
            sum += title.charCodeAt(i);
        }
        return sum;
    }


    let text = 'The Great Gatsby and an Ocelot Na'
    console.log(text, sumCharCodes(text));
    console.log('dollars:', generateBookPrice(text));

    export default generateBookPrice;