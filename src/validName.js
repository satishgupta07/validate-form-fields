function validName(name) {
    if(/^[A-Za-z\s]+$/.test(name) == false) {
        return false;
    }else {
        return true;
    }
}

module.exports = validName;