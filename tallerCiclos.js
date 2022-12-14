// console.log("Taller de ciclos ")
// console.log("ejercicio 1")
// let suma =0,num = 0
// while (num>=0){
//     num=+prompt("digite un numero,para terminar digite un numero negativo")
//     if(num>=0){
//     suma+=num
//     }
// }
// console.log(`la suma es de ${suma}`)

// console.log("\nejercicio 2")

// let num =1
// while (num!=0){
//     num = Math.floor(Math.random()*10);
//     console.log(num)
// }

// console.log("\nejercicio 3")

// for(i=1;i<=20;i++){
//     let ale = Math.floor(Math.random()*1000)
//     console.log(ale)
// }

// console.log("ejercicio 4")
// let num=+prompt("digite un numero positivo")
// for(i=1;i<=num;i++){
//     if(i%2!=0){
//         console.log(i)
//     }
// }
// console.log("\nejercicio 5 ")
// let edad=0,peso=0,niños=0,jove=0,adul=0,viejos=0,cNiños=0,cJove=0,cAdul=0,cViejos=0
// for(i=1;i<=20;i++){
//     edad=+prompt("digite la edad")
//     peso=+prompt("digite el peso")
//     if(edad >=0 && edad <=12){
//         niños+=peso
//         cNiños++
//     }else if (edad <= 29){
//         jove+=peso
//         cJove++
//     }else if (edad <= 59){
//         adul+=peso
//         cAdul++

//     }else if (edad>=60){
//         viejos+=peso    
//         cViejos++
//     }
// }   
// console.log(`promedio de los niños ${niños/cNiños}`)
// console.log(`promedio de los jovenes ${jove/cJove}`)
// console.log(`promedio de los adultos ${adul/cAdul}`)
// console.log(`promedio de los viejos ${viejos/cViejos}`)

// console.log("ejercicio 6")
// for(i=1;i<=1;i++){
//     for(let s=1;s<=5;s++){
//         for(let d =1;d<=4;d++){
//             document.write(` ${i} ${s} ${d}- `)
//         }
//         document.write(`<br>`)
//     }
// }

// console.log("ejercicio 7")

// let edad=0,jira=0,jira2=0,jira3=0,elef=0,elef2=0,elef3=0,chim=0,chim2=0,chim3=0
// let zoo=+prompt(`1.elefante
// 2.jirafa
// 3.chimpance
// Digite la opcion de el animal que va a estudiar `)
// if (zoo == 1){
//     for (i=0;i<20;i++){
//         edad=+prompt(`digite la edad de el elefante ${i+1}`)
//         if (edad >= 0 && edad <=1){
//             elef++
//         }else if (edad >1 && edad <3){
//             elef2++
//         }else if(edad >=3){
//             elef3++
//         }else{
//             console.log('error')
//         }
        
//     }
//     console.log(`el porcentaje de los elefantes de 0 a 1 año es de ${elef*100/i}`)
//     console.log(`el porcentaje de los elefantes de mas 1 a menos de 3 año es de ${elef2*100/i}`)
//     console.log(`el porcentaje de los elefantes de 3 o mas años es de ${elef3*100/i}`)


// }else if (zoo == 2){
//     for (i=0;i<15;i++){
//         edad=+prompt(`digite la edad de la jirafa ${i+1}`)
//         if (edad >= 0 && edad <=1){
//             jira++
//         }else if (edad <3){
//             jira2++
//         }else if(edad >=3){
//             jira3++
//         }else{
//             console.log('error')
//         }

//     }
//     console.log(`el porcentaje de las jirafas de 0 a 1 año es de ${jira*100/i}`)
//     console.log(`el porcentaje de las jirafas de mas 1 a menos de 3 año es de ${jira2*100/i}`)
//     console.log(`el porcentaje de las jirafas de 3 o mas años es de ${jira3*100/i}`)
// }else if (zoo == 3){
//     for (i=0;i<20;i++){
//         edad=+prompt(`digite la edad de los chimpances ${i+1}`)
//         if (edad >= 0 && edad <=1){
//             chim++
//         }else if (edad <3){
//             chim2++
//         }else if(edad >=3){
//             chim3++
//         }else{
//             console.log('error')
//         }
//     }
//     console.log(`el porcentaje de los chimpances de 0 a 1 año es de ${chim*100/i}`)
//     console.log(`el porcentaje de los chimpances de mas 1 a menos de 3 año es de ${chim2*100/i}`)
//     console.log(`el porcentaje de los chimpances de 3 o mas años es de ${chim3*100/i}`)
// }

// console.log("ejercicio 8")
// let vende =+prompt("digite la cantida de vendedores")
// let sueldo=0,venta=0,comision=0
// for(i = 1;i<=vende;i++){
//     sueldo=+prompt(`digite el el sueldo base de el vendedor ${i} `)
//     for(l=1;l<=3;l++){
//         venta=+prompt(`digite el valor de la venta ${l}`)
//         comision+=venta
//     }
//     console.log(`comision: ${comision*0.10}\nsueldo total: ${sueldo+(comision*0.10)}`)
//     comision=0
// }
// console.log("ejercicio 9")
// let aVendido=+prompt("digite cuantos autos se vendieron ")
// let salario = 950000,comision=170000*aVendido,venta=0,suma=0
// for(i=1;i<= aVendido;i++){
//     venta=+prompt(`digite el valor de la venta de el auto`)
//     suma+=venta
// } 
// console.log(`el salario total de el vendedor es de ${salario+comision+(suma*0.05)}`)

// console.log("\ejercicio 10")

// let nota1=0,nota2=0,sNota1=0,sNota2=0
// let nombre=prompt("digite el nombre de el estudiante")
// for(i=1;i<=2;i++){
//     nota1=+prompt("digite la nota de el estudiante")
//     sNota1+=nota1

// }
// for(i=1;i<=3;i++){
//     nota2=+prompt("digite la nota de el estudiante")
//     sNota2+=nota2
// }
// console.log(`${nombre} tiene un promedio de calificaciones de ${(sNota1*0.40/2)+(sNota2*0.60/3)} `)