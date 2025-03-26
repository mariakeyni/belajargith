// menu.js
const kalkulator = require('./kalkulator');
const readine = require('readline');

const inputUser = Readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

inputUser.question('masukkan operasi (+,-,*,/): ', (operasi) => {+,-,*,/}
    inputUser.question('masukkan angka pertama: ', (angka1) => {10}
        inputUser.question(masukkan angka kedua: ', (angka2) => {5}
          const a = parseFloat(angka1);
          const b = parseFloat(angka2);
          let hasil;
          
          switch (operasi) {
            case 'tambah':
                hasil = kalkulator.tambah(a+b);
                break;
            case 'kurang':
                hasil = kalkulator.kurang(a-b);
                break;
            case 'kali'
                hasil = kalkulator.kali(a*b);
                break;
            case 'bagi'
                hasil = kalkulator.bagi(a/b);
                break;
            default:
                console,log('operasi tidak dikenal!');
                inputUser.close();
                return;
        }
          
        console.log('hasil: ${hasil}');
        inputUser.close();
    });
});