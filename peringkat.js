const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');


// mengirim input
// celciusInput.addEventListener('click', function(){
//     console.log('hi');
//     console.log('hallo');
// })

celciusInput.addEventListener('input', function(){
    // input Value= yg di ketik di tab Celcius
    const cTemp=parseFloat(celciusInput.value);


    // proses yg akan di kirim
    const fTemp=(cTemp*(9/5)+32);
    const kTemp=(cTemp+273.15);

    // perintah kirim/output ke -
   kelvinInput.value=kTemp;
   fahrenheitInput.value=fTemp;

});

fahrenheitInput.addEventListener('input', function(){
    // input Value= yg di ketik di tab fahrenheit
    const fTemp=parseFloat(fahrenheitInput.value);
  // proses yg akan di kirim
    const cTemp=(fTemp-32*(5/9));
    const kTemp=(fTemp-32*(5/9)+273.15);

    // perintah kirim/output ke -
    celciusInput.value=cTemp;
    kelvinInput.value=kTemp
});

kelvinInput.addEventListener('input', function(){
    // input Value= yg di ketik di tab kelvin
    const kTemp=parseFloat(kelvinInput.value);
    // fedback/hasil dari input yg dikirimkan input lain
    const cTemp=(kTemp+273.15);
    const fTemp=((kTemp-273.15*(9/5)+32))

    // perintah kirim/output ke -
    celciusInput.value=cTemp;
    fahrenheitInput.value=fTemp;
});

