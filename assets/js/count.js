    setInterval(() => {
        const date = new Date()
        let year = date.getFullYear()
        let newYear = `01/01/${year + 1}`
        let anoNovo = new Date(newYear)
        
        
        
        
        let second = (anoNovo - date)  / 1000
    
        const days = Math.floor(second / 3600 / 24)
        const hours =  Math.floor(second / 3600) % 24
        const minutes = Math.floor(second / 60) %60
        const secr = second % 60
       
        document.getElementById('day').textContent = days
        document.getElementById('hour').textContent = hours
        document.getElementById('min').textContent = minutes
        document.getElementById('sec').textContent = secr.toFixed([0])

        if( date.toLocaleDateString() == newYear){
    
            let vid = document.getElementById('gifF')
            let tela = document.getElementById('tel')
            let img =document.getElementById('ft')
        
            vid.style.display = 'grid'
            tela.style.display = 'none'
            img.style.display ='none'
          
           
        }  
        console.log(newYear) 
    },1000)
     
    








