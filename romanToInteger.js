/*
Function: 
IN > OUT: String > Number
Psuedo Code:
    create new array romanArr and store:
        split romanStr into array
        reverse resulting array
    loop over romanNumerals
        loop over romanArr
        if(romanNumerals[i+1] = romanArr[j])
            break;
        else if(romanArr[j] is a value that substracts) // figure out the condtion
            result -= numeralToInteger(romanArr[j]);
        else
            result += numeralToInteger(romanArr[j]);
*/

const romanToInt = romanStr => {
    const romanNumerals = "IVXLCDM".split('');
    let romanArr = romanStr.split('').reverse('');
    let result = 0;

    console.log(romanArr);
    return result;
}
/*
Function:
IN > OUT: Character > Number
*/
const numeralToInteger = char => {

}

romanToInt("Test");