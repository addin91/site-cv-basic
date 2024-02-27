icones = document.querySelectorAll('.icone > a')

for(icone of icones){
    icone.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        if(confirm(`Vous voulez accéder au ${e.originalTarget.alt}`)){
            if(e.originalTarget.alt == "facebook"){
                var url = "https://facebook.com"
            }else if(e.originalTarget.alt == "twitter"){
                var url = "https://twitter.com"
            }else if(e.originalTarget.alt == "instagram"){
                var url = "https://instagram.com"
            }
            location.replace(url)
        }
    })
}

