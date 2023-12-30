document.querySelector('#push').onclick = function(this: HTMLButtonElement) {
    if((<HTMLInputElement>document.querySelector('#newtask input')).value.length === 0){
        alert("Kindly Enter Task Name!!!!");
    }
    if((<HTMLInputElement>document.querySelector('#newtask input')).value.length > 100){
        alert("Too Big Task!!!");
    }
    else{
        (<HTMLElement>document.querySelector('#tasks')).innerHTML +=
            <div class="task">
            <span id="taskname">
                ${(<HTMLInputElement>document.querySelector('#newtask input')).value}
                </span>
                <button class="delete">
        <i class="far fa-trash-alt"></i>
            </button>
            </div>
        ;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(this: HTMLButtonElement){
                this.parentNode?.remove();
            }
        }
    }
}