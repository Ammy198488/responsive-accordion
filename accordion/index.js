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
accordions.forEach(accordions => {
    accordions.addEventListener("click", () => {
        accordions.classList.toggle('active')
    })
})
