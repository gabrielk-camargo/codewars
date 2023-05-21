function solution(number) {
    if (number < 1 || number > 3999) {
      return "Invalid input. Please enter a number between 1 and 3999.";
    }
  
    const romanSymbols = [
      { value: 1000, symbol: "M" },
      { value: 900, symbol: "CM" },
      { value: 500, symbol: "D" },
      { value: 400, symbol: "CD" },
      { value: 100, symbol: "C" },
      { value: 90, symbol: "XC" },
      { value: 50, symbol: "L" },
      { value: 40, symbol: "XL" },
      { value: 10, symbol: "X" },
      { value: 9, symbol: "IX" },
      { value: 5, symbol: "V" },
      { value: 4, symbol: "IV" },
      { value: 1, symbol: "I" }
    ];
  
    let romanNumeral = "";
    for (let i = 0; i < romanSymbols.length; i++) {
      while (number >= romanSymbols[i].value) {
        romanNumeral += romanSymbols[i].symbol;
        number -= romanSymbols[i].value;
      }
    }
  
    return romanNumeral;
}