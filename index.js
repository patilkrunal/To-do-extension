var password="krunal";
var psswd=prompt("Enter the password.");
if(password===psswd){

    function get_todo(){
        var todo = new Array;
        var todo_str=localStorage.getItem('todo');
        if(todo_str!==null){
            todo=JSON.parse(todo_str);
        }
        return todo;
    }
    function add(){
        var task=document.getElementById('task').value;
        var todo=get_todo();
        todo.push(task);
        localStorage.setItem('todo',JSON.stringify(todo));
        show();
        return false;
    }
    function remove(){
        var id=this.getAttribute('id');
        var todo=get_todo();
        todo.splice(id,1);
        localStorage.setItem('todo',JSON.stringify(todo));
        show();
        return false;
    }
    function show(){
        var todo=get_todo();
        var html='<ul>';
        for(var i=0;i<todo.length;i++){
            html+='<li>&#10148'+todo[i]+'<button class="remove" id="'+i+'">x</button></li>';
        };
        html+='</ul>';
        document.getElementById('todo').innerHTML=html;
        var buttons=document.getElementsByClassName('remove');
        for(var i=0;i<buttons.length;i++){
            buttons[i].addEventListener('click',remove);
        };
    }
    document.getElementById('add').addEventListener('click', add);
    show();
}
else{
    alert("WRONG PASSWORD");
}