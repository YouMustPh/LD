// Para rodar o codigo apenas abra o arquivo no navegador


function binaryFloat(x) {
  var sign = x < 0 ? 1 : 0;

  x = Math.abs(x);

  var integer = Math.floor(x);
  var fraction = x - integer;

  var floatNumber = "";

  if (x > Math.pow(2, 32) || x < -Math.pow(2, 32)) {
    document.getElementById("result").innerHTML = "Valor Invalido";
    document.getElementById("result2").style.opacity = "1";
    document.getElementById("teste2").style.opacity = "1";
    document.getElementById(
      "teste"
    ).innerHTML = `Coloque um valor entre -${Math.pow(2, 32)} e ${Math.pow(
      2,
      32
    )}`;
    document.getElementById("img").style.opacity = "1";

    return;
  } else if (x === 0) {
    for (var i = 0; i < 32; i++) {
      floatNumber += "0";
    }
  } else if (x >= 1) {
    var expoent = Math.floor(Math.log2(integer)) + 127;
    var inverseBinaryExpoent = "";

    while (expoent >= 1) {
      inverseBinaryExpoent += expoent % 2;
      expoent = Math.floor(expoent / 2);
    }

    if (inverseBinaryExpoent.length < 8) {
      for (var i = 0; i < 8 - inverseBinaryExpoent.length; i++) {
        inverseBinaryExpoent += "0";
      }
    }

    var binaryExpoent = "";

    for (var i = inverseBinaryExpoent.length; i > 0; i--) {
      binaryExpoent += inverseBinaryExpoent[i - 1];
    }

    var inverseBinaryInteger = "";

    while (integer > 1) {
      inverseBinaryInteger += integer % 2;
      integer = Math.floor(integer / 2);
    }

    var binaryInteger = "";

    for (var i = inverseBinaryInteger.length - 1; i >= 0; i--) {
      binaryInteger += inverseBinaryInteger[i];
    }

    floatNumber = `${sign}${binaryExpoent}${binaryInteger}`;

    var binaryFraction = "";

    while (fraction !== 0) {
      binaryFraction += Math.floor(fraction * 2);
      fraction = fraction * 2 - Math.floor(fraction * 2);
    }

    floatNumber += binaryFraction;

    if (floatNumber.length < 32) {
      var zeros = 32 - floatNumber.length;
      for (var i = 0; i < zeros; i++) {
        floatNumber += "0";
      }
    } else if (floatNumber.length > 32) {
      floatNumber = floatNumber.slice(0, 32);
    }
  } else {
    var expoent = 0;

    while (fraction < 1) {
      fraction *= 2;
      expoent--;
    }

    expoent += 127;

    var inverseBinaryExpoent = "";

    while (expoent >= 1) {
      inverseBinaryExpoent += expoent % 2;
      expoent = Math.floor(expoent / 2);
    }

    if (inverseBinaryExpoent.length < 8) {
      for (var i = 0; i < 8 - inverseBinaryExpoent.length; i++) {
        inverseBinaryExpoent += "0";
      }
    }

    var binaryExpoent = "";

    for (var i = inverseBinaryExpoent.length; i > 0; i--) {
      binaryExpoent += inverseBinaryExpoent[i - 1];
    }

    floatNumber = `${sign}${binaryExpoent}`;

    var binaryFraction = "";

    if (fraction > 1) {
      fraction -= 1;
    }

    while (fraction !== 0) {
      binaryFraction += Math.floor(fraction * 2);
      fraction = fraction * 2 - Math.floor(fraction * 2);
    }

    floatNumber += binaryFraction;

    if (floatNumber.length < 32) {
      var zeros = 32 - floatNumber.length;
      for (var i = 0; i < zeros; i++) {
        floatNumber += "0";
      }
    } else if (floatNumber.length > 32) {
      floatNumber = floatNumber.slice(0, 32);
    }
  }

  document.getElementById("result").innerHTML = `${floatNumber}`;
  document.getElementById("result2").style.opacity = "01";
  document.getElementById("teste2").style.opacity = "1";
  document.getElementById("teste").innerHTML = `O professor de LD é o melhor`;
  document.getElementById("img").style.opacity = "1";
}
