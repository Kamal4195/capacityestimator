function calculate() {
    let a =parseInt(document.getElementById("Number").value);
    let total=calculatepeople(a);
    document.getElementById("result").innerHTML ="People per course:" +total;
  }
  function calculatepeople(n){
    return n+2;
  }
  