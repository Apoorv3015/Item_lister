const form = document.querySelector('#addForm');
const items = document.querySelector('#items');
const filter = document.querySelector('#filter');

form.addEventListener('submit',addItem);
items.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItem);

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

    //create element, add className and appendChild the textNode
    const editbtn = document.createElement('button');
    editbtn.className='btn btn-primary btn-sm mr-1 float-right edit';
    editbtn.appendChild(document.createTextNode('edit'));
    //appendChild editbtn to li
    new_li.appendChild(editbtn);

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

function filterItem(e){
    //console.log(filter.value.toLowerCase());
    const text =filter.value.toLowerCase();
    const li = items.getElementsByTagName('li');
    Array.from(li).forEach((item)=>{
        const itemText = item.firstChild.textContent;
        if(itemText.toLowerCase().indexOf(text) != -1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    });
}