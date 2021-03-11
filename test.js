let x = 4;
let v = '';
for (let i=x; i>0; i--){
    v = '';
    for (let j = i; j>0; j-- ){
        v += '*';
    }
    console.log(v);
}
