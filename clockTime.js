// let hi = "hi"

// function set() {
//     const secondHand = document.getElementById('secondH')
//     const minuteHand = document.querySelector("#minuteH")
//     const hourHand = document.querySelector("#hourH")

//     const now = new Date()
//     const seconds = now.getSeconds()
//     let degSeconds = ((seconds/60) * 360);
//     // if (seconds === 0) {
//     //     secondHand.style.cssText= `transform: rotate(90deg)`
//     //     degSeconds = 90;
//     //     // secondHand.style.cssText= `transition: all 0s`
        
//     // }
//     secondHand.style.cssText= `transform: rotate(${degSeconds}deg)`

//     const minutes = now.getMinutes()
//     const degMinutes = ((minutes/60) * 360);
//     minuteHand.style.cssText= `transform: rotate(${degMinutes}deg)`

//     const hours = now.getHours()
//     const degHours = ((hours/12) * 360);
//     hourHand.style.cssText= `transform: rotate(${degHours}deg)`

//     // console.log(seconds)
//     // console.log(degSeconds)
//     function digital() {
//         let hr = document.getElementById("hr")
//         let min = document.getElementById("min")
//         let sec = document.getElementById("sec")
    
//         const now = new Date()
//         let hour= now.getHours()
//         let minute = now.getMinutes()
       
//         let second = now.getSeconds()
        
//         // console.log(second)
        
//         // let secPara = document.createElement("P")
//         // let secState = document.createTextNode(second)
//         // secPara.appendChild(secState)
//         sec.innerHTML= `<p>${second}</p>`
//         min.innerHTML= `<p>${minute}:</p>`
//         hr.innerHTML= `<p>${hour}:</p>`
        
//         if (second < 10 ) {
//             sec.innerHTML= `<p>0${second}</p>`
//         }
//         else if (minute < 10) {
//             min.innerHTML= `<p>0${minute}:</p>`
//         }
//         else if (hour < 10) {
//             hr.innerHTML= `<p>0${hour}:</p>`   
//         }
        
//     }
//     digital()
// }

// setInterval(set, 1000)

// var dots = document.querySelectorAll(".dots")
// // console.log(dots)
// let dotRotate = 0

// function dotss() {
//     for (let i = 0; i < dots.length; i++) {
//         // dots[i].innerHTML = "<p></p>"
//         if (i > 0) {
//             dotRotate += 6
//             dots[i].style.cssText = `transform: rotate(${dotRotate}deg)`
//             // console.log(dotRotate)
//             // dots[i].s
//         }
//         if (i !== 0 && i !== 15 && i !== 30 && i !== 45) {
//             // dots[i].innerHTML = "<p></p>"
//             let dotPara = document.createElement('P')
//             let dotText = document.createTextNode('')
//             dotPara.appendChild(dotText)
//             dots[i].appendChild(dotPara)
//             dotPara.classList.add("dotsPara")
//         }
//         // console.log(dotVal)
//         // console.log(dots[i])
//         // console.log(dotarr)
        
//         else if (i == 0) {
//             let dotRotate = 0
//             dots[i].style.cssText = `transform: rotate(${dotRotate}deg)`
//             let dotPara = document.createElement('P')
//             let dotText = document.createTextNode('12')
//             dotPara.appendChild(dotText)
//             dots[i].appendChild(dotPara)
//             dotPara.classList.add("dotPara")
//         }
//         else if (i == 15) {
//             let dotRotate = 90
//             dots[i].style.cssText = `transform: rotate(${dotRotate}deg)`
//             let dotPara1 = document.createElement('P')
//             dotPara1.style.cssText = `
//             transform: rotate(270deg);
//             right: 7px;
//             top: 1px;
//             `
//             let dotText1 = document.createTextNode('3')
//             dotPara1.appendChild(dotText1)
//             dots[i].appendChild(dotPara1)
//             dotPara1.classList.add("dotPara")
//         }
//         else if (i == 30) {
//             let dotRotate = 180
//             dots[i].style.cssText = `transform: rotate(${dotRotate}deg)`
//             let dotPara = document.createElement('P')
//             let dotText = document.createTextNode('6')
//             dotPara.style.cssText = `
//             transform: rotate(180deg);
//             right: 1px;
//             top: 10px;
//             `
//             dotPara.appendChild(dotText)
//             dots[i].appendChild(dotPara)
//             dotPara.classList.add("dotPara")
//         }
//         else if (i == 45) {
//             let dotRotate = 270
//             dots[i].style.cssText = `transform: rotate(${dotRotate}deg)`
//             let dotPara = document.createElement('P')
//             dotPara.style.cssText = `
//             transform: rotate(90deg);
//             left: 9px;
//             top: 3px;
//             `
//             let dotText = document.createTextNode('9')
//             dotPara.appendChild(dotText)
//             dots[i].appendChild(dotPara)
//             dotPara.classList.add("dotPara")
//         }
//     }
// }
// dotss()