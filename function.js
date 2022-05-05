// Arrow function & function like parameter
execute=( nameFunction, nameFunction2 )=>{
    let box1 = document.getElementById("value1").value;
    let box2 = document.getElementById("value2").value;

    nameFunction(box1, box2);
    nameFunction2(box1, box2);
}

sum = (v1, v2)=>{   
    let rest = parseInt(v1) + parseInt(v2);
    alert("Suma: " + rest);
}
rest = (v1, v2)=>{   
    let rest = parseInt(v1) - parseInt(v2);
    alert("Resta: " + rest);
}

findMinorValue = (x, y )=>{
    let minor = (x>y) ? x : y;
    alert(" El menor es "+minor);
}