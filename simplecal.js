function add(numbers) {
    if (!numbers) return 0;

    // Delimiter is a comma or newline
    let delimiter = /,|\\n/;

    const numberArray = numbers.split(delimiter);
    let sum = 0;
    const negatives = [];

    numberArray.forEach(number => {
								  
        const num = parseInt(number);
        if (isNaN(num)) 
            return
        else if (num < 0) 
            negatives.push(num)
            //throw new Error('negavtive')
        else sum += num;
    });

    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return sum;
}
