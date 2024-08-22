console.log("HELLO WORLD")
function permutation(x, y) {
    console.log("Valeur de x:" + x + " et la valeur de y : " + y);
    x += y
    y = x - y
    x -= y

    console.log("Nouvelle valeur de x:" + x + " et la nouvelle valeur de y : " + y);
}
permutation(3 , 4);