function calcularMedia() {
    var valoresInput = document.getElementById("calcula__media").value;
    var listaValores = valoresInput.split(",").map(Number);

    if (listaValores.length === 0) {
      document.getElementById("resultado__media").innerHTML = "0";
    } else {
      var soma = listaValores.reduce(function (a, b) {
        return a + b;
      });
      var media = soma / listaValores.length;
      document.getElementById("resultado__media").innerHTML = media.toFixed(2);
    }
  }