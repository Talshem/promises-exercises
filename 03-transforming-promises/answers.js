/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
    const newP = promise
      .catch((error) => reject(error))
      .then((value) => transformer(value));

    newP.then((r) => resolve(r))
        .catch((error) => reject(error));
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise) {
  return numberPromise.then((res) => {
    return new Promise((resolve, reject) => {
      if (!isNaN(res)) {
        resolve(res*= res);
      } else {
        reject(`Cannot convert '${res}' to a number!`);
      }
    }).catch();
  });
}


/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise){
  return squarePromise(promise)
    .catch(res => {
     return new Promise((resolve, reject) => {
       const inputP = promise;
       if (!isNaN(res))
       {
       resolve(res*= res)
       }
       else
       {
       resolve(0)
       }
    });
})
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */

function switcheroo(promise){
  return promise.then(
  (successCb)=> {
    return new Promise((resolve,reject) => {
      reject (successCb)})
                }
  ,(failureCb) => {
    return new Promise((resolve,reject) => {
      resolve (failureCb)})
                  }
    )
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};