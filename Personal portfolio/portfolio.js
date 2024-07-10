// 
body=document.querySelector('body')
btnDown=document.querySelector('.button')
btnUp=document.querySelector('.up')
csr=748;
btnDown.addEventListener('click',()=>{
//    body.classList.add('smooth') 
   window.scrollTo(0,`${csr}`)
   body.classList.add('botSmooth')
    
})

btnUp.addEventListener('click',()=>{
   btnUp=true
    window.scrollTo(0,`${-1768}`)
    body.classList.add('smooth')
   
     
 })
 console.log(2518-750)

