let empl= localStorage.getItem('employee');
let parseempl=JSON.parse(empl);
let Adm=0;
let Dev= 0,Mar=0 ,Fin=0,av=0,av1=0,av2=0,av3=0,sum=0,sum1=0,sum2=0,sum3=0,alls=0;
let table=document.getElementById("table");
table.className=" table";
//=======================================
function renderHeader(){
let tr=document.createElement("tr");
table.appendChild(tr);
//---------------------------------

let dep=document.createElement("th");
dep.textContent="Department";
tr.appendChild(dep);
//---------------------------------
let Level=document.createElement("th");
Level.textContent="Numper OF Employees  ";
tr.appendChild(Level);
//---------------------------------
let img=document.createElement("th");
img.textContent="Average Salary";
tr.appendChild(img);
//---------------------------------
let salary=document.createElement("th");
salary.textContent="Total Salary";
tr.appendChild(salary);
}
//=====================================================
function renderTableBody(){
   
//--------------------------------------------
let Dep = new Array ("Administration","Marketing","Development","Finance");

for (let i = 0; i < parseempl.length; i++) {
    alls+=parseempl[i].salary;
    switch(parseempl[i].Department) {
        case "Administration":
            Adm=Adm+1;  
            sum+=parseempl[i].salary;
            av=sum/Adm;
          break;
        case "Marketing":
          {  Mar++;;   
          sum1+=parseempl[i].salary;
          av1=sum1/Mar;
          break;}
          case "Development":
            Dev++; 
            sum2+=parseempl[i].salary;  
            av2=sum2/Dev; 
          break;
          case "Finance":
            Fin=Fin+1; 
            sum3+=parseempl[i].salary; 
            av3=sum3/Fin;  
          break;
       
      }
  
 }

    
for (let i = 0; i < Dep.length; i++) {
    let tr=document.createElement("tr");
    table.appendChild(tr);
 
    let Department=document.createElement("td");
    Department.textContent=Dep[i];
    tr.appendChild(Department);
    //========================================
    let co=document.createElement("td");
    if(Dep[i]== "Administration")
     co.textContent=Adm;     
    else if(Dep[i]== "Marketing")
     co.textContent=Mar;
    else if(Dep[i]== "Development")
     co.textContent=Dev;
    else if(Dep[i]== "Finance")
     co.textContent=Fin;
     tr.appendChild(co);
     //===========================================
     let avr=document.createElement("td");
     if(Dep[i]== "Administration")
     avr.textContent=av;     
     else  if(Dep[i]== "Marketing")
     avr.textContent=av1;
     else  if(Dep[i]== "Development")
     avr.textContent=av2;
     else  if(Dep[i]== "Finance")
     avr.textContent=av3;
      tr.appendChild(avr);
    //=======================================
     let num=document.createElement("td");
     if(Dep[i]== "Administration")
     num.textContent=sum;     
     else  if(Dep[i]== "Marketing")
     num.textContent=sum1;
     else  if(Dep[i]== "Development")
     num.textContent=sum2;
     else  if(Dep[i]== "Finance")
     num.textContent=sum3;
     //============================
      tr.appendChild(num);
     
 
  
}


 

}

function tafoot(){
    let tfoot=document.createElement("tfoot");
    table.appendChild(tfoot);
    let trallem=document.createElement("tr");
    trallem.textContent= "The Total Number Of Employees "+parseempl.length;
    tfoot.appendChild(trallem);
    let trallsa=document.createElement("tr");
    trallsa.textContent= "The Average Salary For "+(alls/parseempl.length);
    tfoot.appendChild(trallsa);
}

//=====================================================
renderHeader()
renderTableBody()
tafoot()


