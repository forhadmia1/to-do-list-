let count = 0;
document.getElementById('add-btn').addEventListener('click', function(){
    const content= document.getElementById('input');
    if(content.value===''){
        alert('Please Enter your Text:')
    }else{
        count++;
        const tr=document.createElement('tr');
        tr.innerHTML= `<td>${count}</td>
        <td>${content.value}</td>
        <td><button class="btn btn-danger delete">Delete</button><button class="btn btn-success done">Done</button></td>
        `
        document.getElementById('append').appendChild(tr);
        const dBotton = document.getElementsByClassName('delete');
        const aBotton = document.getElementsByClassName('done');
        for(const button of dBotton){
            button.addEventListener('click', function(event){
                event.target.parentNode.parentNode.remove();
            })
        }
        for(const button of aBotton){
            button.addEventListener('click', function(event){
                console.log(event.target.parentNode.parentNode.style.color="green")
            })
        }
        content.value="";

        document.getElementById('clear').addEventListener('click', function(){
            document.getElementById('append').removeChild(tr);
        })

    }
})