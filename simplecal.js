function add(numbers) {
    if (!numbers) return 0;

    // Default delimiter is a comma or newline
    let delimiter = /,||\n/;
    
    // Check for custom delimiter
    if (numbers.startsWith("//")) {
        const delimiterEnd = numbers.indexOf("\n");
        delimiter = new RegExp(numbers.substring(2, delimiterEnd));
        numbers = numbers.substring(delimiterEnd + 1);
    }

    const numberArray = numbers.split(delimiter);
    let sum = 0;
    const negatives = [];

    numberArray.forEach(number => {
								  
        const num = parseInt(number);
        if (isNaN(num)) return;
        if (num < 0) negatives.push(num);
        sum += num;
    });

    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return sum;
}

// Examples:
console.log(add("")); // Output: 0
console.log(add("1")); // Output: 1
console.log(add("1,5")); // Output: 6
console.log(add("1\n2,3")); // Output: 6
console.log(add("//;\n1;2")); // Output: 3
