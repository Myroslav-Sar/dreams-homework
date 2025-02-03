let age = 25;

switch (true) {
    case age < 18:
        console.log("Minor");
        break;
    case age >= 18 && age < 60:
        console.log("Adult");
        break;
    default:
        console.log("Senior");
}
