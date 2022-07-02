/*
Function: 
IN > OUT: String > Number
Psuedo Code:
    create array containing roman numerals in accending order
        store in romanNumerals
    split and reverse romanStr into an array
        store value in romanArr
    create result varibale
        set to 0
    for loop through romanArr
        if(first element of romanArr)
            romanNumerals = romanNumerals spliced from current element to end of romanNumerals
            result += element int value
        else if (current element is not the same as previous element)
            if(current element is inside romanNumerals)
                romanNumerals = romanNumerals spliced from current element to end of romanNumerals
                result += element int value
            else 
                result -= element int value
        else 
            result += element int value

*/

const romanToInt = romanStr => {
    let romanNumerals = "IVXLCDM".split('');
    let romanArr = romanStr.split('').reverse('');
    let result = 0;

    for(let i = 0; i < romanArr.length; i++) {
        if(i == 0) {
            romanNumerals = romanNumerals.slice(romanNumerals.indexOf(romanArr[i]));
            result += numeralToInteger(romanArr[i]);
        }
        else if(romanArr[i] != romanArr[i-1]) {
            if(romanNumerals.includes(romanArr[i])) {
                romanNumerals = romanNumerals.slice(romanNumerals.indexOf(romanArr[i]));
                result += numeralToInteger(romanArr[i]);
            } else {
                result -= numeralToInteger(romanArr[i]);
            }  
        } else {
            result += numeralToInteger(romanArr[i]);
        }
    }

    return result;
}


/* IN > OUT : Character > Int
 * Switch(numeral)
 * If numeral matches case
 *      then return corresponding number
 */
const numeralToInteger = numeral => {
    let result = 0;
    
    switch(numeral) {
        case 'I':
            result += 1;
            break;
        case 'V':
            result += 5;
            break;
        case 'X':
            result += 10;
            break;
        case 'L':
            result += 50;
            break;
        case 'C':
            result += 100;
            break;
        case 'D':
            result += 500;
            break;
        case 'M':
            result += 1000;
            break;
    }
    return result;
}

// Tests
console.log(`Input: III, Expected: 3, Output: ${romanToInt("III")}`);
console.log(`Input: IV, Expected: 4, Output: ${romanToInt("IV")}`);
console.log(`Input: LVIII, Expected: 58, Output: ${romanToInt("LVIII")}`);
console.log(`Input: MCMXCIV, Reverse: VICXMCM, Expected: 1994, Output: ${romanToInt("MCMXCIV")}`);