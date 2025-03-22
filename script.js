function convertToRoman(num) {
    // Define the Roman numeral symbols and their values
    const romanSymbols = [
        ['M', 1000],
        ['D', 500],
        ['C', 100],
        ['L', 50],
        ['X', 10],
        ['V', 5],
        ['I', 1]
    ];

    let result = '';

    // Iterate through the symbols
    for (let i = 0; i < romanSymbols.length; i++) {
        const [symbol, value] = romanSymbols[i];

        // While the number is greater than or equal to the value
        while (num >= value) {
            result += symbol; // Append the symbol to the result
            num -= value; // Subtract the value from the number
        }
    }

    return result; // Return the final Roman numeral
}

// Example usage:
console.log(convertToRoman(14));   // Output: XIV

