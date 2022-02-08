export default function validName(name) {
    if(/^[A-Za-z\s]+$/.test(name) == false) {
        return false;
    }else {
        return true;
    }
};