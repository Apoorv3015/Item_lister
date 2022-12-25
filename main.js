const form = document.querySelector('#addForm');
const items = document.querySelector('#items');

form.addEventListener('submit',addItem);
items.addEventListener('click',removeItem);

function addItem(e){
    e.preventDefault();
    //Get input value
    const inputValue = document.querySelector('#item').value;
    //create element, add className and appendChild the textNode
    const new_li = document.createElement('li');
    new_li.className='list-group-item';
    new_li.appendChild(document.createTextNode(inputValue));
    
    //create element, add className and appendChild the textNode
    const deletebtn = document.createElement('button');
    deletebtn.className='btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('X'));
    //appendChild deletebtn to li
    new_li.appendChild(deletebtn);
    //appendChild li to ul
    items.appendChild(new_li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure?")){
            const li = e.target.parentElement;
            items.removeChild(li);
        }
    }
}