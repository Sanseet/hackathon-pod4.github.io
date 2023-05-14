
    const togglebtn=document.querySelector('.toggle-btn')
    const togglebtnicon=document.querySelector('.toggle-btn i')
    const dpdown=document.querySelector('.dropdown')
    togglebtn.onclick=function(){
        dpdown.classList.toggle('open')
        const isopen=dpdown.classList.contains('open')

        togglebtnicon.classList=isopen
        ?'fa-solid fa-xmark'
        :'fa-solid fa-bars'
    }
 