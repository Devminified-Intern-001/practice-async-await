function stretch(timeLeft) {
  return new Promise((resolve, reject) => {
    if (timeLeft < 1000) {

      // if we dont have enough time to complete the action
      // reject the promise with the reason 
      reject('you dont have enough time to stretch')

    } else {

      // decrement timeLeft by time it takes to stretch
      timeLeft -= 1000;

      setTimeout(() => {
        console.log('done stretching');

        // promise resolves with updated amount of time left
        resolve(timeLeft)
      }, 1000)
    }
  })
}


function runOnTreadmill(timeLeft) {
  return new Promise((resolve, reject) => {
    if (timeLeft < 1500) {
      reject('you dont have enough time to run on treadmill')
    } else {
      timeLeft -= 1500;

      setTimeout(() => {
        console.log('done running on treadmill');
        resolve(timeLeft)
      }, 500)
    }

  })
}


function liftWeights(timeLeft) {
  return new Promise((resolve, reject) => {
    if (timeLeft < 3000) {
      reject('you dont have enough time to lift weights')
    } else {
      timeLeft -= 2000

      setTimeout(() => {
        console.log('done lifting weights');
        resolve(timeLeft)
      }, 500)
    }
  })
}


// refactor this function to handle Promises using async/await instead of
  // .then and .catch
async function workout(totalTime) {
  let nes
  try{
    nes =await stretch(totalTime)
  }
  catch(error){
    console.log(error)
  }
  let tr
  try{
    tr =await runOnTreadmill(totalTime)
  }
  catch(error){
    console.log(error)
  }
  let lw
  try{
    lw =await liftWeights(totalTime)
  }
  catch(error){
    console.log(error)
  }
  console.log("done working out with 0.5 second left")

}
async function newas() {
  const nes = await workout(4000)
  
}

newas();

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


// workout(500);
  // should print out the following:
    // Error:  you dont have enough time to stretch


// workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


// workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


// workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left