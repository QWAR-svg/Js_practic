 let textInput = document.querySelector('#text-input');

 const key = {
    'a': '432',
    'b': '543',
    ' ': 'y',
    'h': 'b',
    'e': 'k',
    'i': 'z',
    'p': 'u'
};
document.querySelector('button').addEventListener('click', () => {
   
    let str = textInput.value;
    let str_2 = '';
    
    for (let i = 0; i < str.length; i++) {
        console.log(key[str[i]]);
        str_2 += '&'; 
    }

    document.querySelector('#out').textContent = str_2;

})