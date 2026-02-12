function swap(a,b) {

}

function permuatation(str, level, length) {
    if(level === length) {
        print(str);
    } else {
        for(let i = level; i<=length; i++) {
            swap(str, i, )
            permuatation(str, i, length);
        }
    }
}

permuatation('ABC', 1, 3);