console.log("Aqua script is running!");

// Add your script logic here
console.log("Performing additional operations...");

// Example of additional operations
const data = [1, 2, 3, 4, 5];
const result = data.map(num => num * 2);

console.log("Result:", result);

// Additional operations
const filteredData = result.filter(num => num > 5);
console.log("Filtered Data:", filteredData);

// More operations
const sum = filteredData.reduce((acc, num) => acc + num, 0);
console.log("Sum of Filtered Data:", sum);

const average = sum / filteredData.length;
console.log("Average of Filtered Data:", average);

const max = Math.max(...filteredData);
console.log("Max of Filtered Data:", max);

const min = Math.min(...filteredData);
console.log("Min of Filtered Data:", min);

const squaredData = filteredData.map(num => num ** 2);
console.log("Squared Data:", squaredData);

const sortedData = [...filteredData].sort((a, b) => a - b);
console.log("Sorted Data:", sortedData);

const reversedData = [...sortedData].reverse();
console.log("Reversed Data:", reversedData);

const uniqueData = [...new Set(filteredData)];
console.log("Unique Data:", uniqueData);

const dataString = filteredData.join(", ");
console.log("Data as String:", dataString);

const dataObject = filteredData.reduce((obj, num, index) => {
    obj[`num${index}`] = num;
    return obj;
}, {});
console.log("Data as Object:", dataObject);

const dataWithIndex = filteredData.map((num, index) => ({ index, num }));
console.log("Data with Index:", dataWithIndex);

const dataSummary = {
    sum,
    average,
    max,
    min,
    count: filteredData.length
};
console.log("Data Summary:", dataSummary);

const dataAnalysis = filteredData.map(num => ({
    original: num,
    squared: num ** 2,
    sqrt: Math.sqrt(num),
    isEven: num % 2 === 0
}));
console.log("Data Analysis:", dataAnalysis);

// Additional operations
const doubledData = filteredData.map(num => num * 2);
console.log("Doubled Data:", doubledData);

const tripledData = filteredData.map(num => num * 3);
console.log("Tripled Data:", tripledData);

const halvedData = filteredData.map(num => num / 2);
console.log("Halved Data:", halvedData);

const cubedData = filteredData.map(num => num ** 3);
console.log("Cubed Data:", cubedData);

const dataModulo = filteredData.map(num => num % 3);
console.log("Data Modulo 3:", dataModulo);

const dataPower = filteredData.map(num => Math.pow(num, 4));
console.log("Data to the Power of 4:", dataPower);

const dataSqrt = filteredData.map(num => Math.sqrt(num));
console.log("Square Root of Data:", dataSqrt);

const dataCbrt = filteredData.map(num => Math.cbrt(num));
console.log("Cube Root of Data:", dataCbrt);

const dataLog = filteredData.map(num => Math.log(num));
console.log("Natural Log of Data:", dataLog);

const dataExp = filteredData.map(num => Math.exp(num));
console.log("Exponential of Data:", dataExp);

console.log("Aqua script completed!");