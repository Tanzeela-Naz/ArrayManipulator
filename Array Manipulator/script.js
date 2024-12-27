
let myArray = [];

function elementDisplay() {
  const elementDisplay = document.getElementById("elementDisplay");
  elementDisplay.innerHTML = "";
  for (let i = 0; i < myArray.length; i++) {
    const element = document.createElement('div');
    element.className = 'array-item';
    element.textContent = myArray[i];
    elementDisplay.appendChild(element);
  }
}

function addElement(){
  const arrayInput = document.getElementById('element').value; // Changed 'array-input' to 'element'
  if(arrayInput){
    myArray.push(arrayInput);
    elementDisplay(); // Fixed function call
    document.getElementById('element').value = ""; // Clear the input after adding
  }
}

function push(){
  myArray.push(prompt('Write element to push in array..'));
  elementDisplay(); // Fixed function call
  document.getElementById('result-message').textContent = 
  "push() array method adds an element at the end.";
}

function pop(){
  myArray.pop();
  elementDisplay(); // Fixed function call
  document.getElementById('result-message').textContent = 
  "pop() array method removes the last element.";
}

function shift(){
  myArray.shift();
  elementDisplay(); // Fixed function call
  document.getElementById('result-message').textContent = 
  "shift() array method removes the first element.";
}

function unshift(){
  myArray.unshift(prompt("Write element to unshift in array.."));
  elementDisplay(); // Fixed function call
  document.getElementById('result-message').textContent = 
  "unshift() array method adds an element at the start.";
}

function slice(){
  const start = parseInt(prompt("Enter start index for slice."));
  const end = parseInt(prompt("Enter end index for slice."));
  
  if (!isNaN(start) && !isNaN(end) && start >= 0 && end >= 0 && start < end) {
    const slicedArray = myArray.slice(start, end);
    alert("Sliced Array: " + slicedArray);
  } else {
    alert("Invalid indices for slice.");
  }
}

function splice(){
  const index = parseInt(prompt("Enter index to splice."));
  const count = parseInt(prompt("Enter number of elements to remove."));
  
  if (!isNaN(index) && !isNaN(count) && index >= 0 && count >= 0) {
    const removedItems = myArray.splice(index, count);
    alert("Removed Items: " + removedItems);
    elementDisplay(); // Fixed function call
  } else {
    alert("Invalid input for splice.");
  }
}
