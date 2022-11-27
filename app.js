document.querySelector('#add').onclick = function(){


    if(document.querySelector('#createlist').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#tasklist').innerHTML += `
        <div class="task">
        <span id="taskname"><i class="ri-focus-fill" id="point"></i>${document.querySelector("#createlist").value} </span>
         <div class="icon">
          <i class="ri-delete-bin-5-fill"></i>
         </div>
          </div>
        `;

        var current_tasks = document.querySelectorAll(".icon");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }



        var task = document.querySelectorAll(".task");
        for(var i=0; i<task.length; i++){
            task[i].addEventListener("click", function(){
              this.style.backgroundColor = "green"
            })
        }



    }
  }


  document.querySelector("#add").addEventListener("click", function(){
    document.querySelector("#createlist").value = " ";
  })