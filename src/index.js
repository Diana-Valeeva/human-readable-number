module.exports = function toReadable(number) {
    const words = {
        "0": "zero",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "nineteen",
        "20": "twenty",
        "30": "thirty",
        "40": "forty",
        "50": "fifty",
        "60": "sixty",
        "70": "seventy",
        "80": "eighty",
        "90": "ninety",
    }
    Object.freeze(words);

    function getHundreds(num) {
        num = num.toString();
        if (num.length > 2) {
            return num[0] > 0 ? `${words[num[0]]} hundred` : "";

        }

        return "";
    }

    function getTens(num) {
        num = num.toString();
        if (num.length >= 2) {
            if (num[num.length - 2] < 2) {
                let key = num[num.length - 2] + num[num.length - 1];
                return num[num.length - 2] > 0 ? ` ${words[key]}` : "";
            } else {
                key = num[num.length - 2] * 10;
                return ` ${words[key]}`;
            }

        }

        return "";
    }

    function getNumber(num) {
        num = num.toString();
        if (num.length >= 2) {
            if ((num[num.length - 2] + num[num.length - 1]) > "19" || num[num.length - 2] === "0") {
                return num[num.length - 1] > 0 ? ` ${words[num[num.length-1]]}` : "";

            }
        } else if (num.length === 1) return num[num.length - 1] > 0 ? ` ${words[num[num.length-1]]}` : "";

        return "";
    }


    let resultStr = getHundreds(number) + getTens(number) + getNumber(number);


    return number === 0 ? "zero" : resultStr.trim();
}
