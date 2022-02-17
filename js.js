if(parseempl[i].Department=="Administration")
    {
      Adm=Adm+1;  
      sum+=parseempl[i].salary;
      av=sum/Adm;
    }
    else if(parseempl[i].Department=="Marketing"){
      Mar.push(parseempl[i].Department);   
      sum1+=parseempl[i].salary;
      av1=sum1/Mar;
    }
    else if(parseempl[i].Department=="Development"){
     Dev++; 
     sum2+=parseempl[i].salary;  
     av2=sum2/Dev;   
 }
 else if(parseempl[i].Department=="Finance"){
 Fin=Fin+1; 
 sum3+=parseempl[i].salary; 
 av3=sum3/Fin;     
 }
