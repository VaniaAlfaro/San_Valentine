let suplicos = ['Di que si','Por fis','Te necesito a mi lado','No puedo vivir sin ti','Eres mi otra mitad','¡Acepta!','¡Por favor, di que sí!','No acepto un no como respuesta','La vida es corta','Te amo','Ultimo intento','Me rompiste el corazón'];
let intentos = -1;
let maximo = 11;
let mensaje = 0;

let btnNO = document.getElementById('btn_no');
let btnSI = document.getElementById('btn_si'); 

function dijo_si()
{
    intentos = -1;
    document.getElementById('imagen').src = "Img/2.png";

    btnSI.id = 'case_si';
    btnSI.value = 'TE';

    btnNO.id = 'case_no';
    btnNO.value = 'AMO';
}

function dijo_no()
{
    intentos++;
    console.log(intentos);

    if (intentos == 0)
    {
        btnNO.value = suplicos[intentos];
        btnSI.id = 'case0_si';
    }

    if (intentos == 1)
    {
        btnNO.value = suplicos[intentos];
        btnSI.id = 'case1_si';
    }

    if (intentos == 2)
    {
        btnNO.value = suplicos[intentos];
        btnSI.id = 'case2_si';
    }

    if (intentos == 3)
    {
        btnNO.value = suplicos[intentos];
        btnSI.id = 'case3_si';
    }

    if (intentos == 4)
    {
        btnNO.value = suplicos[intentos];
        btnSI.id = 'case4_si';
    }

    if (intentos == 5)
    {
        btnNO.value = suplicos[intentos];
        btnSI.id = 'case5_si';
    }

    if (intentos == 6)
    {
        btnNO.value = suplicos[intentos];
        btnSI.id = 'case6_si';
    }

    if (intentos == 7)
    {
        btnNO.value = suplicos[intentos];
        btnSI.id = 'case7_si';
    }

    if (intentos == 8)
    {
        btnNO.value = suplicos[intentos];
        btnSI.id = 'case8_si';
    }

    if (intentos == 9)
    {
        btnNO.value = suplicos[intentos];
        btnSI.id = 'case9_si';
    }

    if (intentos == 10)
    {
        btnNO.value = suplicos[intentos];
        btnSI.id = 'case10_si';
    }

    if (intentos == 11)
    {
        btnNO.value = suplicos[intentos];
        btnSI.id = 'case11_si';
        intentos = -1;
    }
    
    if (intentos == -1)
    {
        btnNO.value = 'No';
        btnSI.id = 'btn_si';
    }
}


