function binaryToString(binaryCode) {
    return binaryCode.split(' ').reduce((str, binary) => {
      return str + String.fromCharCode(parseInt(binary, 2));
    }, '');
  }
  //https://www.youtube.com/shorts/ulN8S1PF4Ag
  // split return the binaryMessage into the array
  // reduce perform the operation on it and with first argument (str) it will get return and second is the array on which we perfrom the oepration 
  // parseInt convert the binary code into the int ; // 01001010 is 74 
  // and then String.fromCharCode convert this int or charcode into the string that is J   
  const binaryMessage = "01110011 01110100 01100001 01111001 00100000 01100001 01110111 01100001 01111001 00100000 01100110 01110010 01101111 01101101 00100000 01101000 01100101 01110010";
  console.log(binaryToString(binaryMessage)); // Output: stay away from her
  /*
  Sure! Let's break down the key methods you used in your JavaScript code and explain how each contributes to converting binary to a string.

### 1. **`split(' ')`**
   - **What it does**: Splits the binary code into an array of binary strings.
   - **How it works**: The `split()` method is used to divide a string into an array of substrings. In your case, you split the binary message using a space `' '` as the delimiter since each binary representation of a character is separated by a space.
   - **Example**:
     ```javascript
     const binaryMessage = "01110011 01110100";
     const array = binaryMessage.split(' '); // ['01110011', '01110100']
     ```
     This turns the string into an array of individual binary codes, one for each character.

---

### 2. **`reduce((str, binary) => {...}, '')`**
   - **What it does**: Iterates over the array of binary strings and accumulates the final decoded string.
   - **How it works**: The `reduce()` method takes two arguments:
     - A callback function that takes two parameters: 
       1. The accumulator (`str`), which holds the result of each iteration.
       2. The current element (`binary`), which is the current binary string from the array.
     - An initial value (`''`), which starts the string as an empty string.
     - For each iteration, it converts the binary string into a character (explained below) and adds it to the `str` accumulator, forming the final decoded string.
   
   - **Example**:
     ```javascript
     ['01110011', '01110100'].reduce((str, binary) => {
       return str + String.fromCharCode(parseInt(binary, 2));
     }, ''); // 'st'
     ```
     This reduces the array into a string by converting each binary string into a character and concatenating them.

---

### 3. **`parseInt(binary, 2)`**
   - **What it does**: Converts a binary string into a decimal number (character code).
   - **How it works**: `parseInt()` takes two arguments:
     - The string to be converted (`binary`).
     - The base (`2`), since the string is in binary form.
     This method converts the binary string into its corresponding decimal representation (ASCII code).
   
   - **Example**:
     ```javascript
     parseInt('01110011', 2); // 115
     ```
     The binary string `'01110011'` is converted into the decimal number `115`, which represents the character `'s'` in the ASCII table.

---

### 4. **`String.fromCharCode(parseInt(binary, 2))`**
   - **What it does**: Converts the ASCII code (decimal number) into its corresponding character.
   - **How it works**: The `String.fromCharCode()` method takes a number and returns the corresponding character from the ASCII table.
   
   - **Example**:
     ```javascript
     String.fromCharCode(115); // 's'
     ```
     The number `115` corresponds to the letter `'s'`.

---

### Full Process Example:

Let's apply this to the entire message:

1. **Input**: `"01110011 01110100 01100001 01111001"`
2. **Split** the string into an array:
   ```javascript
   const binaryArray = "01110011 01110100 01100001 01111001".split(' ');
   // ['01110011', '01110100', '01100001', '01111001']
   ```
3. **Reduce** the array, converting each binary string into a character:
   - For `'01110011'`: 
     ```javascript
     parseInt('01110011', 2); // 115
     String.fromCharCode(115); // 's'
     ```
   - For `'01110100'`: 
     ```javascript
     parseInt('01110100', 2); // 116
     String.fromCharCode(116); // 't'
     ```
   - For `'01100001'`: 
     ```javascript
     parseInt('01100001', 2); // 97
     String.fromCharCode(97); // 'a'
     ```
   - For `'01111001'`: 
     ```javascript
     parseInt('01111001', 2); // 121
     String.fromCharCode(121); // 'y'
     ```

4. **Result**: `'stay'`

---

### Summary of How the Code Works:
- **`split(' ')`**: Splits the binary string into an array of individual binary codes.
- **`reduce()`**: Iterates over the array, converting each binary string into a character and concatenating them into a final decoded string.
- **`parseInt(binary, 2)`**: Converts each binary string into a decimal number (character code).
- **`String.fromCharCode()`**: Converts the decimal number into the corresponding character.

This entire process efficiently converts a binary-encoded string into readable text!
  */

 // ------string to binary------------//

// function stringToBinary(str) {
//   return str.split('').map(char => {
//     return char.charCodeAt(0).toString(2).padStart(8, '0');
//   }).join(' ');
// }
//Comma (','): The ASCII code for a comma is 44, which is represented in binary as 00101100.
// const message = "hello dear kesi ho tum , me tumse bahut pyaar krta hu";
// const binaryMessage = stringToBinary(message);
// console.log(binaryMessage);
