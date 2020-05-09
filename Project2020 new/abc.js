// const start = document.querySelector("#start")
// const stop = document.querySelector("stop")
// let Pos = []
// const cor = []

// start.addEventListener("click",() => {
//     navigator.geolocation.watchPosition(
//         data =>
//         {
//             console.log(data);
//             cor.push([data.coords.latitude, data.coords.longitude])
//             window.localStorage.setItem("cor",JSON.stringify(cor))
//             Pos.push(localStorage)
//             console.log(JSON.parse(Pos[0].cor)[0][0])
//             console.log(JSON.parse(Pos[0].cor)[0][1])
//             console.log(Pos)

//         },
//         error => console.log(error),    
//         {
//             enableHighAccuracy: true
//         }       
//     )
// }) 
let abc = [[1,2],[2,3]]
console.log(abc)
abc.push([4,3])
console.log(abc[2])
console.log(abc[1])
console.log(abc[0])



