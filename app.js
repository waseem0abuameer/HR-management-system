 let allpr=[];
function employee (ID,FullName,Department,Level,salary,img ){
    this.ID=ID;
    this.FullName=FullName;
    this.Department=Department;   
    this.Level=Level;
    this.img=`./img/${this.FullName}.png`;
    this.salary=salary ;
    allpr.push(this);
}

employee.prototype.render=function(){
    document.write(`<div class="card" style="width: 18rem;">
    <img src="${this.img}" class="card-img-top" >
    <div class="card-body">
      <h3 class="card-title">${this.FullName}</h3>
      <h3 class="card-title">${this.Department}</h3>
      <h3 class="card-title">${this.Level}</h3>
      <h3 class="card-title">${this.salary }</h3>
     </div>
    </div>`);
    
        }
//=============================================================================
let Dep = new Array ("Administration","Marketing","Development","Finance");
let Le =new Array("Junior","Mid-Senior","Senior");
///============================================================================
let Sen=Math.floor(Math.random() * 2000) + 1500;
let MidSen=Math.floor(Math.random() * 1500) + 1000;
let Jun=Math.floor(Math.random() * 1000) + 500;

//===========================================================================
let TheFirstPar=new employee("1001","WaseemAbaumeer",Dep[0],Le[0],(Jun=Jun-(Jun/7.5)),);

let ThesecendPar=new employee("13355","sdsdsad",Dep[1],Le[2],(MidSen=MidSen-(MidSen/7.5)));
console.log(TheFirstPar);
//===========================================================================
for(let i=0;i<allpr.length;i++)
{
    allpr[i].render();

}
