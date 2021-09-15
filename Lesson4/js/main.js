let bigText = 'Let its snow \'G\' man to be happy dlfgdfg,dgfdg dsgd\' dgsgdsfgfds \'fgdsfgfsdfsdfs aren\'t';

console.log('1 задание:',bigText.replace(/'/gm, '"'));
let b = bigText.replace(/(\s\')/gm, ' "');
console.log('2 задание:',b.replace(/(\'\s)/gm, '" '))
