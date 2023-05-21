function XO(str) {
    var countX = 0;
    var countO = 0;
  
    for (var i = 0; i < str.length; i++) {
      var char = str.charAt(i).toLowerCase();
      if (char === 'x') {
        countX++;
      } else if (char === 'o') {
        countO++;
      }
    }
  
    return countX === countO;
  }
  