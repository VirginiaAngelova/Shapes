import './style.scss';

let button: HTMLElement = document.getElementById("addButton");

button.addEventListener('click', () => {

    let selectValuePosition = (<HTMLInputElement>document.getElementById('position')).value
    document.getElementById(selectValuePosition).appendChild(figCreate());
})

function figCreate() {
    let selectValueType = (<HTMLInputElement>document.getElementById('selectType')).value;
    let selectValueSize = (<HTMLInputElement>document.getElementById('size')).value;
    let selectValueColor = (<HTMLInputElement>document.getElementById('colorPicker')).value;

    let newDiv: HTMLElement = document.createElement('div');
    newDiv.classList.add(`${selectValueSize}-${selectValueType}`, 'd-flex', 'justify-content-center', 'align-items-center');
    newDiv.style.backgroundColor = selectValueColor;
    newDiv.appendChild(delbtnCreate());
    return newDiv;
}
function delbtnCreate() {
    let button: HTMLElement = document.createElement('button');
    button.classList.add('btn', 'btn-outline-primary')
    button.innerText = "Delete";
    button.addEventListener('click', () => {
        button.parentElement.remove();
    })
    return button;
}    
