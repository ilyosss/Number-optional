function FindNumber(){
    let code = Math.floor(Math.random() * (100 - 90) + 90);
    let number = Math.floor(Math.random() * (1000-100)) + 100;
    let firstnumber =  Math.floor(Math.random() * 100).toString().padStart(2,'0');
    let lastnumber =  Math.floor(Math.random() * 100).toString().padStart(2,'0');
document.getElementById('label').innerText =  (   ` +998  ${code} ${number} ${firstnumber} ${lastnumber}  `)
}
FindNumber()


