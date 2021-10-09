var btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    var xhr = new XMLHttpRequest();
    // console.log(xhr);
    //open('type','link/file',async)
    xhr.open('GET','friends.json',true);
    xhr.onload = function(){
        //HTTP statuses
        //200 = 'ok'
        //403 = 'forbidden'
        //404 = 'Nor found'
        if(this.status == 200){
            // console.log(this.responseText);
            var fnd = JSON.parse(this.responseText);
            // console.log(typeof(fnd));
            var output = '';
            for(var i in fnd){
                output += '<ul>' + 
                '<li>Id : '+fnd[i].id+'</li>' +
                '<li>Name : '+fnd[i].fname+'</li>' +
                '<li>Email :'+fnd[i].email+'</li>' + '</ul>';
                document.getElementById('text').innerHTML = output;
            }
        }else if(this.status == 404){
            document.getElementById('text').innerHTML = 'Not found';
        }
    }
    xhr.send();
});