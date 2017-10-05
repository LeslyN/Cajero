var dinero ={ //creación del objeto 
    billetes100 :100,
    billetes50  :50,
    billetes20  :200,
    billetes10  :300,
    billetes5   :500,
    billetes1   :800
 }
 
 var retiro = function(money){ // creación de la función donde recibe un parametro
   
   
    // hallando el residuo 
  var residuo = money%100; 
 // calculamos cuantos billetes de 100 hay en el monto  
   if(residuo===0){// si hay exacto
    
     var bille100 = money/100;           
     var bille50=0;
     var bille20=0;
     var bille10=0;
     var bille5=0;
     var bille1=0;
     
   }
   
   else {
  
     bille100= parseInt(money/100);
    var restante1 =money - bille100*100;
    
   if(restante1>=50){
       // cantidad de billetes de 50
       bille50 = parseInt(restante1/50);
      //restante
       var restante2 = restante1 - bille50*50;
       //cantidad de billetes de 20
        bille20 = parseInt(restante2/20);
   
      var restante3 = restante2 - bille20*20;
       //cantidad de billetes de 10
      bille10 = parseInt(restante3/10);
    
     var restante4 = restante3 - bille10*10;
      //cantidad de billetes de 5
     bille5 = parseInt(restante4/5);
    //cantidad de billetes de 1
     bille1 = restante4 - bille5*5;
     
   } 
    else if (restante1<50 && restante1>=20) {
       bille50=0;
       bille20 = parseInt(restante1/20);
       restante3 = restante1 - bille20*20;
       bille10 = parseInt(restante3/10);
    
      restante4 = restante3 - bille10*10;
     
      bille5 = parseInt(restante4/5);
   
      bille1 = restante4 - bille5*5;
        
  
   }
 
 else {
    bille10 = parseInt(restante1/10);
    restante4 = restante1 - bille10*10;
    bille5 = parseInt(restante4/5);
    bille1 =restante4 - bille5*5   
    bille50=0;
    bille20=0;
        
 }
 
 // Definiendo los restantes
 dinero.billetes100-=bille100;
 dinero.billetes50 -=bille50;
 dinero.billetes20 -= bille20;
 dinero.billetes10 -= bille10;
 dinero.billetes5 -= bille5;
 dinero.billetes1 -= bille1;
 
 // Calculando el total de billetes
 var sumBille = bille100 + bille50+bille20+bille10+bille5+bille1;
 
 
 
   }
   // Imprimiendo en consola los resultados solicitados
 return console.log("Monto solicitado :" + money +"\n" 
                   +"Se entregan " + sumBille + " billetes" +"\n" 
                   +"En el cajero quedan :" +"\n" +
                   "100 :" + dinero.billetes100 +"\n" +
                   "50  :" + dinero.billetes50 +"\n" + 
                   "20  :" + dinero.billetes20 +"\n" +
                   "10  :" + dinero.billetes10 +"\n" + 
                   "5   :" + dinero.billetes5 +"\n" + 
                   "1   :" + dinero.billetes1 +"\n" + 
                   "billetes de 100 : " + bille100 +"\n" +
                   "billetes de 50  : " + bille50 +"\n" + 
                   "billetes de 20  : " + bille20  +"\n" + 
                   "billetes de 10  : " + bille10 +"\n" + 
                   "billetes de 5   : " + bille5 +"\n"+ 
                   "billetes de 1   : " + bille1 );
 
 
 }
 
 
 retiro(250);
 retiro(1456);