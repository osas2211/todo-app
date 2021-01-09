function DeleteTask(){
    document.getElementById('delete1').addEventListener('click',()=>{
        document.querySelector('.todo').style.display = 'none';
    });
};

DeleteTask();