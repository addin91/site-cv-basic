icones = document.querySelectorAll('.icone > a')

for(icone of icones){
    icone.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        if(confirm(`Vous voulez accéder au ${e.originalTarget.alt}`)){
            console.log(e)
        }
    })
}

