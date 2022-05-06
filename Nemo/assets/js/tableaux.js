document.write('<h3>Daniel</h3>');
document.write('<table border="1" "style="border-collapse:collapse color: navy; ">');
document.write('<tr>');
for (let i = 0; i <= 9 ; i++) {
       document.write('<td "style=padding: 10px;">'+ i +'</td>');
}
document.write('</tr>');
document.write('</table>');

document.write('<h3>Daniel</h3>');
document.write('<table border="1" "style="border-collapse:collapse color: navy; ">');
document.write('<tr>');
for (let i = 0; i <= 9 ; i++) {
       document.write('<td "style=padding: 10px;">'+ i +'</td>');
      document.write('</tr>');
}

document.write('</table>');

document.write('<br>');

document.write('<table border="1" "style=border-collapse:collapse color: navy; ">');
document.write('<tr>');
for (let i = 0; i <= 9 ; i++) {
       //document.write('<td "style=padding: 10px;">'+ i +'</td>');//
    if (i % 2 === 0){
       document.write('<td style="background-color: red; padding: 10px;">' + i + '</td>');
    }   
     else {
        document.write('<td style="background-color: green; padding: 10px;">' + i + '</td>'); 
    }
}
document.write('</tr>');
document.write('</table>');

document.write('<br>');
document.write('<table cellspacing="0">');
document.write('<tr>');
for (let i = 0; i < 9; i++){
    for (let i = 0; i <= 9; i++){
        if (i % 2 == 0){
            document.write("<td style='background-color: yellow; border: 1px solid black; padding: 15px;'>" + i + "</td>");
        }
        else{
            document.write("<td style='background-color: cyan; border: 1px solid black; padding: 15px;'>" + i + "</td>");
        }
    }
    document.write('<tr>');
}
document.write('<tr>');
document.write('</table>');

document.write('<table cellspacing="0">');
document.write('<tr>');
for (let i = 0; i <= 99; i++){
        if(i % 10 == 0){
            document.write('</tr><tr>');
        }

        if (i % 2 == 0){
            document.write("<td style='background-color: blue; border: 1px solid black; padding: 15px;'>" + i + "</td>");
            
        }
        
        else{
            document.write("<td style='background-color: pink; border: 1px solid black; padding: 15px;'>" + i + "</td>");
        }

}
document.write('<tr>');
document.write('</table>');

document.write('<table cellspacing="0">');
document.write('<tr>');
for (let i = 0; i <= 99; i++){
        if(i % 10 == 0){
            document.write('</tr><tr>');
        }

        if (i % 11 == 0){
            document.write("<td style='background-color: pink; border: 1px solid black; padding: 15px;'>" + i + "</td>");
            
        }
        
        else{
            document.write("<td style='background-color: blue; border: 1px solid black; padding: 15px;'>" + i + "</td>");
        }

}
document.write('<tr>');
document.write('</table>');