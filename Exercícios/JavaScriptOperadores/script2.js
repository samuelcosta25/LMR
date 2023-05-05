let HT;
let VH;
let PD;
let TD;
let SB;
let SL;


HT = prompt('DiGITE AS HORAS','Digite um valor');
VH = prompt('VALOR DA HORA ', 'Digite um numero');
PD = prompt('DESCONTO: ','PORCENTAGEM');
SB = parseFloat(HT)*parseFloat(VH);
TD = parseFloat(PD)*SB/100;
SL = SB-TD;

document.write('SALARIO: ', SL);