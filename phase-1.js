function stretch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done stretching");
      resolve();
    }, 2000);
  });
}

function runOnTreadmill() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done running on treadmill");
      resolve();
    }, 3000);
  });
}

function liftWeights() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done lifting weights");
      resolve();
    }, 4000);
  });
}
// refactor this function to handle Promises using async/await instead of
  // .then and .catch
async function workout() {
   const sw = await stretch()
  .catch(err => console.log('Error: ', err));
    const rw = await runOnTreadmill()
    const lw = await liftWeights()
   
}
async function ne() {
  const nw = await workout()
  console.log("done working out");
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


ne();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out