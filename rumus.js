export function kalkulator(l,e,o) {
const l=+prompt("enter first:")
const e=+prompt("enter operator:")
const o=+prompt("enter second:")

switch (o) {
    case "+":
        console.log (l+o);
        break;
    case "-":
        console.log (l+e);
        break;
     case "/"
        console.log (l/e);
        break;
    case "*"
        console.log (l*e);
        break;
    }
    }
    default;
    console.log "Operator tidak valid";
    break;