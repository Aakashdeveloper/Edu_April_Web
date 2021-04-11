 /*function add(){
                var first = document.getElementById('first').value;
                var second = document.getElementById('second').value;
                var out = Number(first)+Number(second)
                document.getElementById('output').innerText=out
            }
            
            var sub = () => {
                var first = document.getElementById('first').value;
                var second = document.getElementById('second').value;
                var out = Number(first)-Number(second)
                document.getElementById('output').innerText=out
            }*/
function calc(opt){
    var first = document.getElementById('first').value;
    var second = document.getElementById('second').value;
    var out = 0
    if(opt=="Add"){
        out = Number(first)+Number(second)
    }else{
        out = Number(first)-Number(second)
    }
    document.getElementById('output').innerText=out
}