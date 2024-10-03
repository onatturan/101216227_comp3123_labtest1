function lowerCaseWords(array) {
    return new Promise((resolve, reject) => {
        try {
            let result = array
                .filter(item => {
                    if (typeof item === 'string') { 
                        return item;
                    }
                })
                .map(str => str.toLowerCase());  
            resolve(result);
        } catch (error) {
            reject('ERROR ' + error);  
        }
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result)) 
    .catch(error => console.log(error));  
