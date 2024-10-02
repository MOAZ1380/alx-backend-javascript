/// promise 


// const myPromise = new Promise((resolve, reject) => {
//     // Simulating an asynchronous operation
//     let success = true;
    
//     if (success) {
//       resolve("The operation was successful!");
//     } else {
//       reject("There was an error.");
//     }
//   });
  
//   // Handling the Promise
//   myPromise
//     .then(result => {
//       console.log(result);  // Output: "The operation was successful!"
//     })
//     .catch(error => {
//       console.log(error);   // Only runs if reject is called
//     })
//     .finally(() => {
//       console.log("Promise has been settled.");
//     });
  




// const fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { name: "John", age: 30 };
      
//       if (!data) {
//         resolve(data);
//       } else {
//         reject("Failed to fetch data.");
//       }
//     }, 2000);  // Simulates a delay of 2 seconds
//   });
  
//   // Using the Promise
//   fetchData.then(
//     (response) => console.log("Data received:", response)
// ).catch(
//     (error) => console.log(error)
// ); // Output: Data received: { name: "John", age: 30 }

//     // .catch(error => console.log(error);



// Promise All

// const myFirstPromise = new Promise((resolve, reject) => {
//     let connect = true;
//     if (connect) {
//       resolve("First Promise Resolved");
//     } else {
//       reject("First Promise Rejected");
//     }
//   });
  
//   const mySecondPromise = new Promise((resolve, reject) => {
//     let settings = true;
//     if (settings) {
//       resolve("Second Promise Resolved");
//     } else {
//       reject("Second Promise Rejected");
//     }
//   });
  
//   Promise.all([myFirstPromise, mySecondPromise]).then((result) => {
//     console.log(result);
//   });
  
//   Promise Race
  
//   const myFirstPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("First Promise Resolved");
//     }, 150);
//   });
  
//   const mySecondPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Second Promise Resolved");
//     }, 100);
//   });
  
//   // myFirstPromise.then((result) => console.log(result));
//   // mySecondPromise.then((result) => console.log(result));
  
//   Promise.all([myFirstPromise, mySecondPromise]).then((result) => {
//     console.log(result);
//   });




// sync await



// function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const data = { name: "Alice", age: 25 };
//         resolve(data); // Simulating a successful data fetch
//       }, 2000); // Simulates a 2-second delay
//     });
//   }
  
//   async function getData() {
//     console.log("Fetching data...");
    
//     try {
//       let result = await fetchData();
//       console.log("Data received:", result); // Output: Data received: { name: "Alice", age: 25 }
//     } catch (error) {
//       console.log("Error:", error); // In case the Promise was rejected
//     }
//   }
  
// getData();
  






//             0-promise.js       //

// function getResponseFromAPI() {            
//     return Promise.resolve()
// }





// const response = getResponseFromAPI();
// console.log(response instanceof Promise)




//             1-promise.js           //  

// function getFullResponseFromAPI(success) {
//     return new Promise((res, reject) => {
//       if (success) {
//         res({
//           status: 200,
//           body: 'Success',
//         });
//       } else {
//         reject(Error('The fake API is not working currently'));
//       }
//     });
//   }

// console.log(getFullResponseFromAPI(true));
// console.log(getFullResponseFromAPI(false));



//                   2-then.js        //

// function handleResponseFromAPI(promise) {
//     return promise
//       .then(() => ({
//         status: 200,
//         body: 'success',
//       }))
//       .catch(() => new Error())
//       .finally(console.log('Got a response from the API'));
// }

// const promise = Promise.resolve();
// handleResponseFromAPI(promise);




//                   3-all.js        //



// import { uploadPhoto, createUser } from './utils';

// 



//           4-user-promise.js   //

// function signUpUser(firstName, lastName) {
//         return Promise.resolve({
//             firstName,
//             lastName,
//         });
// }



// console.log(signUpUser("Bob", "Dylan"));






//           5-photo-reject.js     //



// function uploadPhoto(filename) {
//     return Promise.reject(new Error (`${filename} cannot be processed`));
// }

// function uploadPhoto() {
//     return Promise.resolve({
//       status: 200,
//       body: 'photo-profile-1',
//     });
//   }
  
  
// function createUser() {
//     return Promise.resolve({
//       firstName: 'Guillaume',
//       lastName: 'Salva',
//     });
//   }


// console.log(uploadPhoto('guillaume.jpg'));


//           6-final-user.js     //

// import signUpUser from './4-user-promise';
// import uploadPhoto from './5-photo-reject';

// export default async function handleProfileSignup(
//         signUpUser(firstName, lastName),
//         uploadPhoto(fileName)
//     ]).then((results) => {
//         return results.map((result) => ({
//             status: result.status,
//             value: result.status === 'fulfilled' ? result.value : result.reason
//         }));
//     });
// }


// console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));





//              7 -



// function loadBalancer(chinaDownload, USDownload) {
//     return Promise.race([chinaDownload,USDownload]);
// }

// const ukSuccess = 'Downloading from UK is faster';
// const frSuccess = 'Downloading from FR is faster';

// const promiseUK = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 100, ukSuccess);
// });

// const promiseUKSlow = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 400, ukSuccess);
// });

// const promiseFR = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 200, frSuccess);
// });

// const test = async () => {
//     console.log(await loadBalancer(promiseUK, promiseFR));
//     console.log(await loadBalancer(promiseUKSlow, promiseFR));
// }

// test();



//      8
// function divideFunction(numerator, denominator) {
//     if( denominator <= 0){
//         throw new Error("cannot divide by 0")
//     }
//     else{
//         return numerator / denominator
//     }
// }

// console.log(divideFunction(10, 2));
// console.log(divideFunction(10, 0));


// 9

// export default function guardrail(mathFunction) {
//   const queue = [];
//   let value;

//   try {
//     value = mathFunction();
//   } catch (err) {
//     value = err.toString();
//   }

//   queue.push(value);
//   queue.push('Guardrail was processed');

//   return queue;
// }



// console.log(guardrail(() => { return divideFunction(10, 2)}));
// console.log(guardrail(() => { return divideFunction(10, 0)}));



// 100
// async function asyncUploadUser() {
//     try {
//         return { photo: await uploadPhoto(), user: await createUser() };
//     } catch (error) {
//         return { photo: null, user: null };
//     }
// }

// function uploadPhoto() {
//     return Promise.resolve({
//       status: 200,
//       body: 'photo-profile-1',
//     });
//   }
  
  
// function createUser() {
//     return Promise.resolve({
//       firstName: 'Guillaume',
//       lastName: 'Salva',
//     });
//   }


// const test = async () => {
//     const value = await asyncUploadUser();
//     console.log(value);
// };

// test();
