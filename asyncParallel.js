function createAsyncTask() {
  const value = Math.floor(Math.random() * 9);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value < 5) {
        reject(value)
      } else {
        resolve(value);
      }
    }, value * 1000);
  })
}

const asyncTasksList = [
  createAsyncTask();
  createAsyncTask();
  createAsyncTask();
  createAsyncTask();
  createAsyncTask();
]

function executeAsyncTasksInParallel(asyncTasks, callback) {
  const results = [];
  const errors = []; 
  let completed = 0;
  
  asyncTasks.forEach(asyncTask => {
    asyncTask
      .then(res => results.push(res));
      .catch(err => errors.push(err));
      .finally(() => {
        completed++;
        if (completed >= asyncTasks.length) {
          callback(results, errors);
        }
      })
  })
}

executeAsyncTasksInParallel(asyncTasksList, (data, errors) => {
  console.log(data, errors);
})
