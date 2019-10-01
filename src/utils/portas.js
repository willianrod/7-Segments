const and = (...entradas) => {
    return entradas.reduce((acc = 1, curr) => acc && curr);
}

const or = (...entradas) => {
    return entradas.reduce((acc = 0, curr) => acc || curr);
}

const xor = (a, b) => {
    return Number((a && !b) || (!a && b));
}

const xnor = (a, b) => {
    return Number(!xor(a,b));
}

const not = entrada => {
    return Number(!entrada);
}

const nand = (...entradas) => {
    return Number(!entradas.reduce((acc = 1, curr) => and(acc, curr)));
}

const nor = (...entradas) => {
    return Number(!entradas.reduce((acc = 1, curr) => or(acc, curr)));
}

module.exports = {
    and,
    or,
    xor,
    xnor,
    not,
    nand,
    nor,
}