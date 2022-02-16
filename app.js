 let allpr=[];
 let form=document.getElementById("dataForm");
 let emplall=document.getElementById("allEm");
 let employeeArea=document.getElementById("employeeArea");
 let int11=document.getElementById("int11");
 
function employee (ID,FullName,Department,Level,salary,img ){
    this.ID=ID;
    this.FullName=FullName;
    this.Department=Department;   
    this.Level=Level;
    this.img=img;
    this.salary=salary ;
    allpr.push(this);
}
 employee.prototype.randsal=function(){
    if(this.Level=="Junior")
    this.salary=sa(500,1000);
    else if(this.Level=="Mid-Senior")
    this.salary= sa(1000,1500);
    else if(this.Level=="Senior")
    this.salary=sa(1500,2000);
    
    }
    employee.prototype.randID=function(){
        this.ID= Math.floor(1000 + Math.random() * 9000);

        
        }
employee.prototype.render=function(){
    let div1 = document.createElement("div");
    let div = document.createElement("div");

    div1.classList.add("col");
    employeeArea.appendChild(div);
    div.appendChild(div1);
    div.classList.add("card1");
    let img = document.createElement("img");
    img.setAttribute("src", this.img);
    div.appendChild(img);

    let FullName = document.createElement("p");
    FullName.textContent = `Name: ${this.FullName}`;
    div.appendChild(FullName);

    let ID = document.createElement("p");
    ID.textContent = `ID: ${this.ID}`;
    div.appendChild(ID);

    let Department = document.createElement("p");
    Department.textContent = `Department: ${this.Department}`;
    div.appendChild(Department);

    let Level = document.createElement("p");
    Level.textContent = `Level: ${this.Level}`;
    div.appendChild(Level);

    let salary = document.createElement("p");
    salary.textContent = `Salary: ${this.salary}`;
    div.appendChild(salary);

    let br = document.createElement("br");
    br.textContent = br;
    div.appendChild(br);
    
        }
//=============================================================================
let Dep = new Array ("Administration","Marketing","Development","Finance");
let Le =new Array("Junior","Mid-Senior","Senior");
///============================================================================
function sa(min ,max){
    return Math.floor(Math.random() * max) + min;

}

//===========================================================================
/*let TheFirstPar=new employee("1001","WaseemAbaumeer",Dep[0],Le[0],sa(500,1000));

let ThesecendPar=new employee("13355","sdsdsad",Dep[1],Le[2],sa(500,1000));*/
let ghazi = new employee(1000,"Ghazi Samer", "Administration ", "Senior", sa(1500,2000),"img/Ghazi.jpg");  
let lana = new employee(1001,"Lana Ali", "Finance ", "Senior",sa(1500,2500), "img/Lana.jpg");    
let tamara = new employee(1003,"Tamara Ayoub", "Marketing", "Senior", sa(1500,2000),"img/Tamara.jpg"); 
let saif = new employee(1004,"Safi Walid", "Administration", "Mid-Senior",sa(1000,1500), "img/Safi.jpg");  
let omar = new employee(1005,"Omar Zaid    ", "Development", "Senior", sa(1500,2000),"img/Omar.jpg");  
let rana = new employee(1006,"Rana Saleh", "Development ", "Junior", sa(500,1000),"img/Rana.jpg"); 
let hadi = new employee(1007,"Hadi Ahmad", "Finance ", "Mid-Senior",sa(1000,1500), "img/Hadi.jpg");
//console.log(TheFirstPar);
//===========================================================================

//===========================================================================
form.addEventListener("submit",handelSubmit )
function handelSubmit(event){
    event.preventDefault();
    let name=event.target.name.value;
    let dep=event.target.dep.value;
    let Level=event.target.level.value;
    let img=event.target.img.value;

    let newEm=new employee(0,name,dep,Level,0,img);
    newEm.randsal();
    newEm.randID();
    newEm.render();
    renderall();
    form.reset();
}
console.log(allpr);
function renderall(){ 
    employeeArea.innerHTML="";
for(let i=0;i<allpr.length;i++)
{  
     allpr[i].render();
    }

}
console.log(allpr);

