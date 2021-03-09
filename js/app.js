'use strect';
function Student (email,num,tuition){
  this.email=email,
  this.num=num,
  this.tuition=tuition,
  this.age=this.getRndInteger(18,24);
  Student.all.push(this);
}
Student.all=[];
Student.prototype.getRndInteger=function (min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

Student.prototype.gitName=function(){};

const form = document.getElementById('form');
form.addEventListener('submit',handelSubmit);

function handelSubmit (event){
    event.preventDefault();
    let email = event.target.studentEmail.value;
    let num= event.target.studentNum.value;
    let tuition= event.target.tuition.value;
    new Student (email,num,tuition);
    console.log(Student.all);
    renderTable();
    save();
}
const table = document.getElementById('table-div');
function renderheder (){
  const trEL = document.createElement('tr');
  table.appendChild(trEL);
  const id = document.createElement('th');
  trEL.appendChild(id);
  id.textContent='id';
  const td2 = document.createElement('td');
  trEL.appendChild(td2);
  td2.textContent='Name';
  const td3 = document.createElement('td');
  trEL.appendChild(td3);
  td3.textContent='Email';
  const td4 = document.createElement('td');
  trEL.appendChild(td4);
  td4.textContent='Mobile';
  const td5 = document.createElement('td');
  trEL.appendChild(td5);
  td5.textContent='age';
  const td6 = document.createElement('td');
  trEL.appendChild(td6);
  td6.textContent='tuition';

}
renderheder();


function renderTable (){
    table.innerHTML='';
    renderheder();
    for(let i=0 ; i<Student.all.length; i++){
        const trEl= document.createElement('tr')
        table.appendChild(trEl);
        const td1 = document.createElement('td');
        trEl.appendChild(td1);
        td1.textContent=i+1;
        const td2 = document.createElement('td');
        trEl.appendChild(td2);
        td2.textContent='name';
        const td3 = document.createElement('td');
        trEl.appendChild(td3);
        td3.textContent=Student.all[i].email;
        const td4 = document.createElement('td');
        trEl.appendChild(td4);
        td4.textContent=Student.all[i].num;
        const td5 = document.createElement('td');
        trEl.appendChild(td5);
        td5.textContent=Student.all[i].age;
        const td6 = document.createElement('td');
        trEl.appendChild(td6);
        td6.textContent=Student.all[i].tuition;
    }
}

function save (){
    localStorage.setItem('student-info',JSON.stringify(Student.all))
}
const localStudent= localStorage.getItem('student-info');
if ( localStudent !== null ){
    let localParse = JSON.parse(localStudent);
    for( let i=0 ; i < localParse.length;i++){
        new Student ( localParse[i].email, localParse[i].num, localParse[i].tuition);
    }
    renderTable();
}