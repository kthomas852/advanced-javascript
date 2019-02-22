const request = require('request')
const fs = require('fs')
// Note: we're going to be using fakeAxios instead of axios. It's just a simulation.
// It doesn't really contact the internet so it's much faster. It uses promises
// so should get the point across exactly the same.
const fakeAxios = require('./fakeAxios')






// What order are these printed in? Draw a picture like from the video.
// Think about it, then uncomment it and run it.
// How could we change it?
// console.log('1')
// fakeAxios.get('some url').then(response => {
//   console.log('2')
// })
// console.log('3')








// Look, it's the same with async callbacks. Think about it, then uncomment it and run it.
// console.log('1')
// setTimeout(() => console.log('2'), 100)
// console.log('3')






// Watch this video until 17:30:
// https://www.youtube.com/watch?v=8aGhZQkoFbQ&vl=en









// Challenge. Write a function called setTimeout2 that takes milliseconds first and a callback
// second, but otherwise behaves like setTimeout.
// function waitAndThenDoStuff(mil, func){
//     return setTimeout(func, mil)
// }

// console.log('first')
// waitAndThenDoStuff(3000, () => console.log('call'))
// console.log('second')

// request('https://jsonplaceholder.typicode.com/todos/1', (err, res, body) =>{
//     if(err){
//         console.log(err)
//     }
//     console.log(body)
// })

// request('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?', 
// {headers:{
//         'Authorization': `Bearer Vqg1xCWqf2neA1vpx1waUksNlp7u4jpdOQPISGCODfXH2ntIrtNT9p8-BHWLidQuMFd1PlJB6wuBEedykLmYYCoOYMn_rRXV7YUWoZbnhemS23D4lenEdyTfWAyjW3Yx`
//         }},
// (err, res, body) =>{
//     if(err){
//         console.log(err)
//     }
//     console.log(body)
// })

// fs.readFile('./lecture/async.js', (err, text)=>{
//     if(err){
//         console.error(err)
//     }
//     console.log(`Text Hagen: ${text}`)
// })

// const p = new Promise(resolve => {
//     setTimeout(resolve, 500)
// })

// p.then(() => {
//     console.log("done")
// })

// function delay (time) {
//     return new Promise((resolve) => {
//     setTimeout(resolve, time)
// })
// }

// delay(4000).then(()=>{
//     console.log('doner')
// })

// function readFilePromise (fileName){
//     //resolve(
//     return new Promise((resolve, reject)=>{
//         fs.readFile(fileName, 'utf8', (err, data) => {
//             if(err){
//                 console.error(err)
//             }
//             console.log(data)
//         })
//         reject(new Error('Bad stuff'))
//     })
// }

// readFilePromise('./lecture/fakeAxios.js').then(contents => {
//     console.log('contents', contents)
// })

// //Broken promise :(.....
// readFilePromise('./lecture/fakeAxios.js').then(contents => {
//     console.log('contents', contents).catch(err=>{
//         console.log(err)
//     })
// })



// How can we get this code to not resemble callback hell (nesting)?
// Try to clean it up and produce the same result (console.log the results array).
// const results = []
// fakeAxios.post('www.getlatlon.fake', { ip: 'fake' }).then(response1 => {
//     results.push(response1.data)
// })
// fakeAxios.post('www.getaddressfromlatlon.fake', results[0]).then(response2 => {
//     results.push(response2.data)
// })
// fakeAxios.get('www.registerhereforspam.fake', results[1]).then(response3 => {
// results.push(response3.data)
//       console.log('results', results)
// })

// const pChain = []
// fakeAxios.post('www.getlatlon.fake', { ip: 'fake' }).then(response => {
//     pChain.push(response.data)
//     return fakeAxios.post('www.getaddressfromlatlon.fake', {latlong: response.data})
// }).then(response => {
//     pChain.push(response.data)
//     return fakeAxios.get('www.registerhereforspam.fake', {latlong: response.data})
// }).then(response =>{
//     pChain.push(response.data)
//     console.log('pChain', pChain)
// })

async function allPromise (array){
    const promiseArray = []
    for(let i=0; i < array.length; i++){
        let p = new Promise(resolve => array[i])
        promiseArray.push(p)
    }
    let done = false
    while(!done){
        let count = 0
    for(let x=0; x < promiseArray.length; x++){
        if(promiseArray[x].then(res => res)){
            count++
        }
    }
    if(count === promiseArray.length){
        done = true
    }
    }
    return promiseArray;
}

allPromise([
    fakeAxios.get('1'),
    fakeAxios.get('2')
]).then(([response1, response2])=>{
    console.log('response1', response1)
    console.log('response1', response2)
})