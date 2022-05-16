
window.onload = function(){
//No.1

let Input1 = document.getElementById('Input1');
let Button1 = document.getElementById('Button1');
let Print1 = document.getElementById('Print1');
Button1.addEventListener('click',function(){
    let ans = 0;
    x = Input1.value * 1000;
    if(x<=1500){
        ans = 70;
    }
    else{
        ans = 70 + Math.ceil((x - 1500) / 500)*5;
    }
    Print1.innerHTML = '車資為：' + ans;
},false);

//No.2

let Input2 = document.getElementById('Input2');
let Button2 = document.getElementById('Button2');
let Print2 = document.getElementById('Print2');
let str = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let num = [10,11,12,13,14,15,16,17,34,18,19,20,21,22,35,23,24,25,26,27,28,29,32,30,31,33];
Button2.addEventListener('click',function(){
    let ans1 = 0;
    let InStr = Input2.value.split('');
    for(i=0;i<26;i++){
        if(InStr[0]==str[i]){
            xn = num[i];
        }
    }
    ans1 = Math.floor(xn / 10) + ((xn % 10) * 9);
    for(j=1;j<9;j++){
        ans1 += (9-j)*parseInt(InStr[j]);
    }
    ans1 += parseInt(InStr[9]);
    if(ans1%10==0){
        Print2.innerHTML = '此為身分證為：真';
    }
    else{
        Print2.innerHTML = '此為身分證為：假';
    }
},false);

//No.3

let Button3 = document.getElementById('Button3');
let Print3 = document.getElementById('Print3');
Button3.addEventListener('click',function(){
    Print3.innerHTML = '';
    let br1 = document.createElement('br');
    Print3.append('1.');
    Print3.append(br1);
    for(i=0;i<5;i++){
        for(j=0;j<5;j++){
            Print3.append('*');
            let space = document.createElement('span');
            space.innerHTML = '&ensp;';
            Print3.append(space);
        }
        let br = document.createElement('br');
        Print3.append(br);
    }
    let br2 = document.createElement('br');
    Print3.append('2.');
    Print3.append(br2);
    for(i=1;i<6;i++){
        for(j=0;j<i;j++){
            Print3.append('*');
            let space = document.createElement('span');
            space.innerHTML = '&ensp;';
            Print3.append(space);
        }
        let br = document.createElement('br');
        Print3.append(br);
    }
    let br3 = document.createElement('br');
    Print3.append('3.');
    Print3.append(br3);
    for(i=1;i<6;i++){
        for(j=5-i;j>0;j--){
            let space = document.createElement('span');
            space.innerHTML = '&ensp;';
            Print3.append(space);
        }
        for(k=0;k<i;k++){
            Print3.append('*');
            let space = document.createElement('span');
            space.innerHTML = '&ensp;';
            Print3.append(space);
        }
        let br = document.createElement('br');
        Print3.append(br);
    }
    let br4 = document.createElement('br');
    Print3.append('4.');
    Print3.append(br4);
    for(i=1;i<6;i++){
        if(i==1||i==5){
            for(j=0;j<5;j++){
                Print3.append('*');
                let space = document.createElement('span');
                space.innerHTML = '&ensp;';
                Print3.append(space);
            }
        }
        else{
            Print3.append('*');
            for(j=0;j<7;j++){
                let space = document.createElement('span');
                space.innerHTML = '&ensp;';
                Print3.append(space);
            }
            Print3.append('*');
        }
        let br = document.createElement('br');
        Print3.append(br);
    }
    let br5 = document.createElement('br');
    Print3.append('5.');
    Print3.append(br5);
    for(i=1;i<6;i++){
        Print3.append('*');
        for(j=2;j<i;j++){
            if(i!=5){
                let space = document.createElement('span');
                space.innerHTML = '&ensp;';
                Print3.append(space);
            }
            else{
                Print3.append('*');
            }
        }
        if(i!=1){
            Print3.append('*');
        }
        let br = document.createElement('br');
        Print3.append(br);
    }
},false);

//No.4

let Input4 = document.getElementById('Input4');
let Button4 = document.getElementById('Button4');
let Select4 = document.getElementById('Select4');
Input4.addEventListener('blur',function(){
    alert('你不要我了');
},false);
Button4.addEventListener('click',function(){
    let Data = new Date();
    let str = '今天是'+Data.getFullYear()+" 年 "+(Data.getMonth()+1)+" 月 "+Data.getDate()+" 日";
    alert(str);
},false);
Select4.addEventListener('change',function(){
    let ans = '選項' + Select4.value + '在這';
    alert(ans);
},false);

//No.21

let Input21 = document.getElementById('Input21');
let Button21 = document.getElementById('Button21');
let Print21 = document.getElementById('Print21');
Button21.addEventListener('click',function(){
    Print21.innerHTML = '';
    str21 = Input21.value.split(' ');
    let max = str21[0];
    let min = str21[0];
    for(i=0;i<str21.length;i++){
        if(max<str21[i]){
            max = str21[i];
        }
        if(min>str21[i]){
            min = str21[i];
        }
    }
    Print21.append('最大值為：' + max + ',');
    Print21.append('最小值為：' + min);
    let br211 = document.createElement('br');
    Print21.append(br211);
    for(i=str21.length-1;i>-1;i--){
        for(j=0;j<i;j++){
            if(str21[j]<str21[j+1]){
                let temp = str21[j+1];
                str21[j+1] = str21[j];
                str21[j] = temp;
            }
        }
    }
    Print21.append('排序後為');
    for(i=0;i<str21.length;i++){
        Print21.append(str21[i]);
        if(i!=str21.length-1){
            Print21.append(',');
        }
    }
    /*
    for(i=str21.length-1;i>-1;i--){
        for(j=0;j<i;j++){
            if(str21[j]>str21[j+1]){
                let temp = str21[j+1];
                str21[j+1] = str21[j];
                str21[j] = temp;
            }
        }
    }*/
    let br214 = document.createElement('br');
    Print21.append(br214);
    Print21.append('排序反轉後為');
    str21.reverse();
    for(i=0;i<str21.length;i++){
        Print21.append(str21[i]);
        if(i!=str21.length-1){
            Print21.append(',');
        }
    }
},false);


let Input213 = document.getElementById('Input213');
let Button213 = document.getElementById('Button213');
let Print213 = document.getElementById('Print213');
Button213.addEventListener('click',function(){
    Print213.innerHTML = '';
    let z213 = Input213.value;
    let ans213 = str21[z213-1];
    Print213.innerHTML = '第' + z213 + '個元數為：' + ans213;
},false);

let Button215p = document.getElementById('Button215p');
let Button215d = document.getElementById('Button215d');
let Button216d = document.getElementById('Button216d');
let Print215 = document.getElementById('Print215');
Button215p.addEventListener('click',function(){
    let ans215p = str21.push(Input213.value);
    Print215.innerHTML = '已新增第' + ans215p + '個元素：' + Input213.value;
    let br = document.createElement('br');
    Print215.append(br);
    for(i=0;i<str21.length;i++){
        Print215.append(str21[i]);
        if(i!=str21.length-1){
            Print215.append(',');
        }
    }
},false);
Button216d.addEventListener('click',function(){
    let ans216d = str21.splice(Input213.value-1,1);
    Print215.innerHTML = '已刪除第' + Input213.value + '筆資料，值為：' + ans216d;
    let br = document.createElement('br');
    Print215.append(br);
    for(i=0;i<str21.length;i++){
        Print215.append(str21[i]);
        if(i!=str21.length-1){
            Print215.append(',');
        }
    }
},false);
Button215d.addEventListener('click',function(){
    let ans215d = str21.pop();
    Print215.innerHTML = '已移除最後一個元素：' + ans215d;
    let br = document.createElement('br');
    Print215.append(br);
    for(i=0;i<str21.length;i++){
        Print215.append(str21[i]);
        if(i!=str21.length-1){
            Print215.append(',');
        }
    }
},false);

//No.22

let Input22 = document.getElementById('Input22');
let Button22 = document.getElementById('Button22');
let Print22 = document.getElementById('Print22');
let abc22 = ['.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..']
Button22.addEventListener('click',function(){
    Print22.innerHTML = '';
    let line22 = Input22.value.split('\n');
    for(i=0;i<line22.length;i++){
        let line = line22[i];
        str22 = line.split(' ');
        for(j=0;j<str22.length;j++){
            for(k=0;k<26;k++){
                if(str22[j]==abc22[k]){
                    str22[j] = String.fromCharCode(65+k);
                    Print22.append(str22[j]);
                }
            }
        }
        if(i != line22.length-1){
            Print22.append(' ');
        }
    }
},false);

//No.23

let Input23 = document.getElementById('Input23');
let Button23 = document.getElementById('Button23');
let Print23 = document.getElementById('Print23');
Button23.addEventListener('click',function(){
    let line23 = Input23.value.split('\n');
    A23 = new Array();
    let max = 0;
    for(i=0;i<line23.length;i++){
        A23[i] = new Array();
        let line = line23[i];
        let B23 = line.split(' ');
        if(B23.length>max){
            max = B23.length;
        }
        for(j=0;j<B23.length;j++){
            A23[i][j] = B23[j];
        }
    }
    C23 = new Array();
    for(i=0;i<max;i++){
        C23[i] = new Array();
        for(j=0;j<A23.length;j++){
            if(A23[j][i] != undefined){
                C23[i][j] = A23[j][i];
            }
            else{
                C23[i][j] = '&ensp';
            }
        }
    }
    for(i=0;i<C23.length;i++){
        for(j=0;j<C23[i].length;j++){
            if(C23[i][j] != '&ensp'){
                Print23.append(C23[i][j]);
                Print23.append(' ');
            }
            else{
                let space = document.createElement('span');
                space.innerHTML = '&ensp;';
                Print23.append(space);
                Print23.append(' ');
            }
        }
        let br = document.createElement('br');
        Print23.append(br);
    }
},false);

//No.24

let Input24 = document.getElementById('Input24');
let Button24 = document.getElementById('Button24');
let Print24 = document.getElementById('Print24');
Button24.addEventListener('click',function(){
    Print24.innerHTML='';
    let line24 = Input24.value.split('\n');
    A24 = new Array();
    let m24 = line24.length;
    for(i=0;i<m24;i++){
        A24[i] = new Array();
        let B24 = line24[i].split(' ');
        n24 = B24.length;
        for(j=0;j<n24;j++){
            A24[i][j] = B24[j];
        }
        console.log(1);
    }
    Print24l(A24,m24,n24);
},false);

function Print24l(A24,m24,n24){
    let xt = 0;
    let xr = 1;
    let xb = 0;
    let xl = 0;
    for(z=0;z<(m24+n24/2);z++){
        for(i=xt;i<n24-xt;i++){
            Print24.append(A24[xt][i]);
            Print24.append(' ');
            console.log(1);
        }
        xt+=1;
        for(j=xr;j<m24+1-xr;j++){
            Print24.append(A24[j][n24-xr]);
            Print24.append(' ');
            console.log(2);
        }
        xr+=1;
        for(k=n24-2-xb;k>=xb;k--){
            Print24.append(A24[m24-1-xb][k]);
            Print24.append(' ');
            console.log(3);
        }
        xb+=1;
        for(l=m24-2-xl;l>xl;l--){
            Print24.append(A24[l][xl]);
            Print24.append(' ');
            console.log(4);
        }
        xl+=1;
    }
}

//No.25

let Input25_10 = document.getElementById('Input25_10');
let Input25_2 = document.getElementById('Input25_2');
let Input25_8 = document.getElementById('Input25_8');
let Input25_16 = document.getElementById('Input25_16');
let str25 = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
let Button25 = document.getElementById('Button25');
let Print25 = document.getElementById('Print25');
Input25_10.addEventListener('change',function(){
    HexConverter(10);
},false);
Input25_2.addEventListener('change',function(){
    HexConverter(2);
},false);
Input25_8.addEventListener('change',function(){
    HexConverter(8);
},false);
Input25_16.addEventListener('change',function(){
    HexConverter(16);
},false);
Button25.addEventListener('click',function(){
    clear25(MsgBox25);
},false);

function HexConverter(base){
    //給10進制
    if(base==10){
        //10-2
        let value10 = Input25_10.value;
        let j10 = Input25_10.value;
        let max2 = 0;
        for(i=0;i<j10;i++){
            if(Math.pow(2,i)>j10){
                max2 = i;
                j10=-1;
            }
            else if(Math.pow(2,i)==j10){
                max2 = i+1;
                j10=-1;
            }
        }
        console.log('max:' + max2);
        let ans2=0;
        for(i=max2;i>-1;i--){
            if(value10 == 1){
                ans2+=1;
                value10-=1;
            }
            else if(value10-(Math.pow(2,i))>=0){
                ans2+=1*Math.pow(10,i);
                value10-=Math.pow(2,i);
            }
        }
        Input25_2.value=ans2;
        //2-8
        To8(ans2);
        //2-16
        To16(ans2);
    }
    //給2進制
    if(base==2){
        ans2 = Input25_2.value;
        To10(ans2);
        To8(ans2);
        To16(ans2);
    }
    //給8進制
    if(base==8){
        ans8=Input25_8.value;
        num = Input25_8.value;
        max8=0;
        while(num>=1){
            num = num/10;
            max8++;
        }
        let ans2 = 0;
        for(i=0;i<max8;i++){
            let t8 = (ans8 / Math.pow(10,i)) % 10;
            if(t8>=4){
                ans2+=(100*Math.pow(1000,i));
                t8-=4;
            }
            if(t8>=2){
                ans2+=(10*Math.pow(1000,i));
                t8-=2;
            }
            if(t8>=1){
                ans2+=(1*Math.pow(1000,i));
                t8-=1;
            }
        }
        Input25_2.value = ans2;
        To10(ans2);
        To16(ans2);
    }
    //給16進制
    if(base==16){
        ans16=Input25_16.value.split('');
        max16 = ans16.length;
        let ans2 = 0;
        for(i=0;i<max16;i++){
            for(j=0;j<str25.length;j++){
                if(ans16[i]==str25[j]){
                    t16 = j;
                }
            }
            if(t16>=8){
                ans2+=(1000*Math.pow(10000,max16-i-1));
                t16-=8;
            }
            if(t16>=4){
                ans2+=(100*Math.pow(10000,max16-i-1));
                t16-=4;
            }
            if(t16>=2){
                ans2+=(10*Math.pow(10000,max16-i-1));
                t16-=2;
            }
            if(t16>=1){
                ans2+=(1*Math.pow(10000,max16-i-1));
                t16-=1;
            }
        }
        Input25_2.value = ans2;
        To10(ans2);
        To8(ans2);
    }
    return;
}

function To10(ans2){
    num = ans2;
    max2=0;
    while(num>=1){
        num = num/10;
        max2++;
    }
    let ans10 = 0;
    for(i=max2-1;i>=0;i--){
        t2 = Math.floor(ans2/Math.pow(10,i))%10;
        ans10 += t2 * Math.pow(2,i);
    }
    Input25_10.value = ans10;
}

function To8(ans2){
    num = ans2;
    max2=0;
    while(num>=1){
        num = num/10;
        max2++;
    }
    let max8 = 0;
    if(max2%3==0){
        max8 = Math.floor(max2/3)
    }
    else{
        max8 = Math.floor(max2/3)+1;
    }
    let ans8 = 0;
    for(i=0;i<max8;i++){
        let t8 = Math.floor(ans2*(Math.pow(0.001,i)));
        t8 = t8 % 1000;
        ans8 += ((t8%10) + (((Math.floor(t8/10))%10)*2) + (((Math.floor(t8/100))%10)*4)) * Math.pow(10,i);
    }
    Input25_8.value=ans8;
    return;
}

function To16(ans2){
    num = ans2;
    max2=0;
    while(num>=1){
        num = num/10;
        max2++;
    }
    let max16 = 0;
    if(max2%4==0){
        max16 = Math.floor(max2/4)
    }
    else{
        max16 = Math.floor(max2/4)+1;
    }
    let ans16 = '';
    for(i=0;i<max16;i++){
        let t16 = Math.floor(ans2*(Math.pow(0.0001,i)));
        t16 = t16 % 10000;
        p16 = ((t16%10) + (((Math.floor(t16/10))%10)*2) + (((Math.floor(t16/100))%10)*4) + (((Math.floor(t16/1000))%10)*8));
        p16 = str25[p16];
        ans16 = p16 + ans16;
    }
    Input25_16.value=ans16;
    return;
}

//No.6

function clear25(MB25){
    Input25_10.value = '';
    Input25_2.value = '';
    Input25_8.value = '';
    Input25_16.value = '';
    MB25();
    return;
}

function MsgBox25(){
    alert('所有欄位已清空');
    return;
}

//No.7

let Button27 = document.getElementById('Button27');
Button27.addEventListener('click',function(){
    let Person = {
        Name:'Li',
        Phone:'0918268776',
        age:'20'
    }
    console.log('新增前:');
    console.log(Person);
    console.log('String:'+JSON.stringify(Person));
    let score = ['score1','score2','score3']
    for(i=0;i<3;i++){
        Person[score[i]]=i+1;
    }
    console.log('新增後:');
    console.log(Person);
    console.log('String:'+JSON.stringify(Person));
},false);

//No.28

let Input28_1=document.getElementById('Input28_1');
let Input28_2=document.getElementById('Input28_2');
let Button28=document.getElementById('Button28');
let Print28=document.getElementById('Print28');
let table28=document.getElementById('table28');
let tbody28=document.getElementById('tbody28');
let Data28={};
let Data28title=['Id','UserName','Password'];
let Data28Id = 0;
Print28fn();
Input28_1.addEventListener('focus',function(){
    Input28_1.value = '';
},false);
Input28_2.addEventListener('focus',function(){
    Input28_2.value = '';
},false);
Button28.addEventListener('click',function(){
    let line28 = {Id:`${Data28Id+1}`,UserName:`${Input28_1.value}`,Password:`${Input28_2.value}`};
    Data28[Data28Id] = line28;
    Data28Id++;
    Print28fn();
},false);
document.addEventListener('click',function(e){
    let Data28IdName = e.target.id.split('_')[0];
    let Data28ActionId = e.target.id.split('_')[1];
    if(Data28IdName == 'Data28Delete'){
        delete Data28[Data28ActionId];
        Print28fn();
    }
    if(Data28IdName == 'Data28Edit'){
        let Data28UserName=document.getElementById(`Data28UserName_${Data28ActionId}`);
        let Data28Password=document.getElementById(`Data28Password_${Data28ActionId}`);
        Data28UserName.style.display='none';
        Data28Password.style.display='none';
        let Input28UserName=document.getElementById(`Input28UserName_${Data28ActionId}`);
        let Input28Password=document.getElementById(`Input28Password_${Data28ActionId}`);
        Input28UserName.style.display='block';
        Input28Password.style.display='block';
        let Button28Delete=document.getElementById(`Data28Delete_${Data28ActionId}`);
        let Button28Edit=document.getElementById(`Data28Edit_${Data28ActionId}`);
        Button28Delete.style.display='none';
        Button28Edit.style.display='none';
        let Button28Enter=document.getElementById(`Data28Enter_${Data28ActionId}`);
        Button28Enter.style.display='block';
        Button28Enter.addEventListener('click',function(){
            Data28[Data28ActionId].UserName = Input28UserName.value;
            Data28[Data28ActionId].Password = Input28Password.value;
            Print28fn();
        },false);
    }
},false);

function Print28fn(){
    tbody28.innerHTML='';
    for(i=0;i<Data28Id;i++){
        if(Data28[i] != undefined){
        let Print28line=document.createElement('tr');
        Print28line.innerHTML=`
            <td>
                ${Data28[i].Id}
            </td>
            <td>
                <div id='Data28UserName_${i}'>${Data28[i].UserName}</div>
                <input type="text" class="input_Data" id="Input28UserName_${i}" value="${Data28[i].UserName}"></input>
            </td>
            <td>
                <div id='Data28Password_${i}'>${Data28[i].Password}</div>
                <input type="text" class="input_Data" id="Input28Password_${i}" value="${Data28[i].Password}"></input>
            </td>
            <td style='display:flex'>
                <button id='Data28Delete_${i}' class='Data28Delete'>Delete</button>
                <button id='Data28Edit_${i}' class='Data28Edit'>Edit</button>
                <button id='Data28Enter_${i}' class='Data28Edit' style='display:none'>Enter</button>
            </td>
        `;
        tbody28.append(Print28line);
        }
    }
}

//No.29

let Button29=document.getElementById('Button29');
let Button29_E=document.getElementById('Button29_E');
let Print29=document.getElementById('Print29');
Button29.addEventListener('click',function(){
    window.addEventListener('keydown',Print29fn,false);
    Button29.style.display='none';
    Button29_E.style.display='inline';
},false);
Button29_E.addEventListener('click',function(){
    window.removeEventListener('keydown',Print29fn,false);
    Print29.innerHTML='';
    Button29.style.display='inline';
    Button29_E.style.display='none';
},false);

function Print29fn(){
    asc = event.keyCode;
    console.log(asc);
    if(asc == 27||asc==8||asc==9||asc==16||asc==192||asc==20||asc==17||asc==18||asc==32||asc==13||asc==144){
        if(asc==27){
            Print29.innerHTML='Esc';
        }
        if(asc==8){
            Print29.innerHTML='Backspace';
        }
        if(asc==9){
            Print29.innerHTML='Tab';
        }
        if(asc==16){
            Print29.innerHTML='Shift';
        }
        if(asc==192){
            Print29.innerHTML="`";
        }
        if(asc==20){
            Print29.innerHTML="CAPS LOCK";
        }
        if(asc==17){
            Print29.innerHTML="CTRL";
        }
        if(asc==18){
            Print29.innerHTML="ALT";
        }
        if(asc==32){
            Print29.innerHTML="Space";
        }
        if(asc==13){
            Print29.innerHTML="Enter";
        }
        if(asc==144){
            Print29.innerHTML="NUM LOCK";
        }
    }
    else{
        key = String.fromCharCode(asc);
        str  = key;
        Print29.innerHTML = str;
    }
    alert(Print29.innerHTML);
}


//No.210

let Button210=document.getElementById('Button210');
let Button210_E=document.getElementById('Button210_E');
let Print210=document.getElementById('Print210');
Button210.addEventListener('click',function(){
    window.addEventListener('keydown',Print210fn,false);
    Button210.style.display='none';
    Button210_E.style.display='inline';
},false);
Button210_E.addEventListener('click',function(){
    window.removeEventListener('keydown',Print210fn,false);
    Print210.innerHTML='';
    Button210.style.display='inline';
    Button210_E.style.display='none';
},false);

function Print210fn(){
    let oEvent = window.event;
    asc = event.keyCode;
    if(oEvent.altKey && asc != 18){
        key = String.fromCharCode(asc);
        str  = key;
        Print210.innerHTML = 'Alt + ' + str;
        alert(Print210.innerHTML);
    }
    if(oEvent.crtlKey && asc != 17){
        key = String.fromCharCode(asc);
        str  = key;
        Print210.innerHTML = 'Crtl + ' + str;
        alert(Print210.innerHTML);
    }
    if(oEvent.shiftKey && asc != 16){
        key = String.fromCharCode(asc);
        str  = key;
        Print210.innerHTML = 'Shift + ' + str;
        alert(Print210.innerHTML);
    }
}

//No.31

let Day31 = document.getElementById('Day31');
let Time31 = document.getElementById('Time31');
const Month31 = ["January","February","March","April","May","June","July","August","September","October","November","December"];
setInterval(function(){
    let now = new Date();
    Day31.innerHTML = Month31[now.getMonth()] + '&ensp;' + now.getDate() + ',&ensp;' + now.getFullYear();
    Time31.innerHTML = (now.getHours()<10?'0' + now.getHours():now.getHours()) + '&ensp;:&ensp;' + now.getMinutes() + '&ensp;:&ensp;' + now.getSeconds() + '&ensp;:&ensp;' + now.getMilliseconds();
},1);

//No.32

let Print32 = document.getElementById('Print32');
let product_type = [{"id": 1,"name": "飲料"},{"id": 2,"name": "電器"},{"id": 3,"name": "書籍"},{"id": 4,"name": "食品"},{"id": 5,"name": "鞋"},{"id": 6,"name": "電腦"},{"id": 7,"name": "清潔用品"},{"id": 8,"name": "玩具"}];
let product = [
    {"id": 1,"type_id": 1,"type_name": "飲料","name": "礦泉水","describe": "最天然的水","price": 250,"create_time": "2019-01-01 08:00:00"},
    {"id": 2,"type_id": 2,"type_name": "電器","name": "熱水器","images": "yellow","describe": "好用的熱水器","price": 1000,"create_time": "2020-01-01 08:00:00"},
    {"id": 3,"type_id": 3,"type_name": "書籍","name": "美食書籍","describe": "教會你怎麼煮菜","price": 799,"create_time": "2020-01-01 08:00:00"},
    {"id": 4,"type_id": 4,"type_name": "食品","name": "開心果","describe": "好吃的開心果","price": 300,"create_time": "2020-02-01 08:00:00"},
    {"id": 5,"type_id": 5,"type_name": "鞋","name": "步鞋","describe": "好穿的鞋子","price": 250,"create_time": "2018-03-26 08:00:00"},
    {"id": 6,"type_id": 6,"type_name": "電腦","name": "電競主機","describe": "不會lag的電腦","price": 24999,"create_time": "2018-12-24 08:00:00"},
    {"id": 7,"type_id": 7,"type_name": "清潔用品","name": "好神掃把","describe": "掃不乾淨可以退貨","price": 599,"create_time": "2018-12-24 08:00:00"},
    {"id": 8,"type_id": 8,"type_name": "鋼彈","name": "很厲害的鋼彈","describe": "鋼彈盪單槓","price": 299,"create_time": "2018-12-24 08:00:00"}
];
let Button32 = document.getElementById('Button32');
let Input32 = document.getElementById('Input32');
Print32fn(product);
Button32.addEventListener('click',function(){
    search32 = Input32.value;
    let SearchProduct = product.filter(function(value){
        return (value.name.includes(search32) || value.describe.includes(search32));
    })
    Print32fn(SearchProduct);
},false);

function Print32fn(arr){
    Print32.innerHTML = '';
    let PrintProduct = arr.map(function(value){
        return value;
    })
    for(i=0;i<PrintProduct.length;i++){
        let box32 = document.createElement('div');
        box32.setAttribute('class','box32');
        Print32.append(box32);
        let text32 = document.createElement('div');
        text32.setAttribute('class','text32');
        box32.append(text32);
        let type_name32 = document.createTextNode(`${PrintProduct[i].type_name}`);
        text32.append(type_name32);
        br32 = document.createElement('br');
        text32.append(br32);
        let name32 = document.createTextNode(`${PrintProduct[i].name}`);
        text32.append(name32);
        br32 = document.createElement('br');
        text32.append(br32);
        let describe32 = document.createTextNode(`${PrintProduct[i].describe}`);
        text32.append(describe32);
        br32 = document.createElement('br');
        text32.append(br32);
        let price32 = document.createTextNode(`價格：${PrintProduct[i].price}`);
        text32.append(price32);
        br32 = document.createElement('br');
        text32.append(br32);
        let create_time32 = document.createTextNode(`${PrintProduct[i].create_time}`);
        text32.append(create_time32);
    }
}

//No.33

let block33_1 = document.getElementById('block33_1');
let block33_2 = document.getElementById('block33_2');
let block33_3 = document.getElementById('block33_3');
let block33_4 = document.getElementById('block33_4');
let block33_5 = document.getElementById('block33_5');
block33_1.addEventListener('click',Action33fn);
block33_2.addEventListener('click',Action33fn/*(2,'GIVE','RECEIVE')*/);
block33_3.addEventListener('click',Action33fn/*(3,'EXPERIENCE','TODAY')*/);
block33_4.addEventListener('click',Action33fn/*(4,'GIVE','YOU CAN')*/);
block33_5.addEventListener('click',Action33fn/*(5,'LIFE','MOTION')*/);

function Action33fn(){
    bn = 1
    t= 'HEY';
    b= 'DANCE';
    let text_t = document.getElementById(`text33_${bn}_t`);
    let text_b = document.getElementById(`text33_${bn}_b`);
    text_t.setAttribute('class','text33_op');
    text_b.setAttribute('class','text33_op');
    text_t.innerHTML = t;
    text_b.innerHTML = b;
    let button33 = document.getElementById(`block33_${bn}`);
    button33.removeEventListener('click',Action33fn);
    button33.addEventListener('click',function(){
        text_t.setAttribute('class','text33_t');
        text_b.setAttribute('class','text33_b');
        button33.addEventListener('click',Action33fn);
    },false);
}




}