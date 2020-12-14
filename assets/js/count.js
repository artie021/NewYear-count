let newYear = '01/01/2021'
current = ()=>{
    
    const date = new Date()
    const anoNovo = new Date(newYear)
    let second = (anoNovo - date)  / 1000

    const days = Math.floor(second / 3600 / 24)
    const hours =  Math.floor(second / 3600) % 24
    const minutes = Math.floor(second / 60) %60
    const secr = second % 60
   
    var day =document.getElementById('day').textContent = days
    var hour = document.getElementById('hour').textContent = hours
    var min = document.getElementById('min').textContent = minutes
    var sec =document.getElementById('sec').textContent = secr.toFixed([0])
  
}
current()
setInterval(current, 1000)





       
        
       
        
        






    
    



