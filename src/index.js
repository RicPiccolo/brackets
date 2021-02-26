module.exports = function check(str, bracketsConfig) {

    function removeDuplicateCharacters(string) {
        return string
            .split('')
            .filter(function(item, pos, self) {
                return self.indexOf(item) === pos;
            })
            .join('');
    }
    // your solution
    let far = [];
    bracketsConfig.forEach( elem => far.push(elem.flat().join('')))

    return removeDuplicateCharacters(str) === far.join('');
}
