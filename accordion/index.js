// let accordions = document.querySelectorAll('.accordion-container .accordion');
// accordions.forEach(acco => {
//     acco.onclick = () =>{
//         accordions.forEach(subAcco => {
//             subAcco.classList.remove('active')
//         })
//         acco.classList.add('active');
//     }
// })

// or
let accordions = document.querySelectorAll('.accordion-container .accordion');
accordions.forEach(acco => {
    acco.addEventListener("click", () => {
        acco.classList.toggle('active')
    })
})
