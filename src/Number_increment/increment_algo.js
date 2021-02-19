const increment = array => {
  const incrementedArray = []
  let iterate = true
  
  for (let i = array.length -1; i >= 0; i--) {
    let element = array[i];
    // Check if the function should increment the element
    if (iterate) {
      // Check if the element reach 10
      // In that case: 
        // set the current figure to 0
        // iterate the incrementation to the next figure
      if (element == 9) {
        element = "0"
      }else{
        element = (parseInt(element, 10) + 1).toString()
        iterate = false  
      }
    }
    incrementedArray.unshift(element)
    // In case of last element reaching 10, add another figure to the array
    if (element == 0 && i == 0) {
      incrementedArray.unshift("1")
    }
  }
  return incrementedArray
}

export default increment