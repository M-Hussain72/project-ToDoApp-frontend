
//           < ------delete the ToDo ------ >


    function deleteToDo(name)
    {
        let num = name[7];
        var a = 'l'+num
        var name = "[name ='"+a+"']";
        var tag = document.querySelector(`${name}`);
        tag.textContent="";

        var items = document.querySelector(".items");
        if(items.lastElementChild == items.firstElementChild){
            var box = document.querySelector(".box");
            box.setAttribute("style","display:block");
        }
        tag.remove();
        
    }


// -----------checkbox (line through the todo)----->>

    function check(name){
        let num = name[5];
        var parent = 'l'+num
        var nam = "[name ='"+parent+"']";
        var spane = document.querySelector(`${nam}`).children[1];
        var a = 'check'+num;
        var check = "[name ='"+a+"']";
        var tag = document.querySelector(`${check}`).checked;
         if(tag == true){
           spane.setAttribute("style","text-decoration: line-through");
        }else{
            spane.setAttribute("style","text-decoration: none");;
        }
        console.log();
    }

// ---------Create ToDo------------------>

    function createToDo(todo,count){
        var checkbox = document.createElement("input");
        checkbox.type="checkbox";
        checkbox.name="check"+count;
        checkbox.setAttribute("onclick","check(name)");
        var newtag = document.createElement("fieldset");
        var newp = document.createElement("span");
        var text = document.createTextNode(todo);
        newtag.appendChild(checkbox);
        newp.appendChild(text);
        newtag.appendChild(newp);
        const deletebtn = document.createElement("button");
        text = document.createTextNode("Delete");
        deletebtn.type="delete";
        deletebtn.name = "delete "+count;
        deletebtn.setAttribute("onclick","deleteToDo(name)");
        deletebtn.appendChild(text);
        newtag.appendChild(deletebtn);
    return newtag;
    }


    // <------- ---- main funtion---------->

    
    let count = 0;
    const addtodo = document.querySelector(".add")
    var newitems = addtodo.addEventListener("click", () => {
        text= document.querySelector("input[type=text]").value
        if(text.length <= 18 && text !="")
            {
                var box = document.querySelector(".box")
                box.setAttribute("style","display:none")
                document.querySelector("input[type=text]").value = null;
                var item = createToDo(text,count);
                item.name="l"+count;
                count++;
                var element = document.querySelector(".items");
                element.appendChild(item)
            }else{
                window.alert("ToDo is not empty or text length must be less then 15");
            }
        });