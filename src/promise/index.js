/*Aqui la promesa se ejecuta al cargar el archivo */
const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Whoooops!');
        }
    });
};

somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err));


/*Aqui la promesa no se ejecuta hasta que se llame a la funcion*/

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('Whooops!');
            reject(error);
        }
    }) ;
}

somethingWillHappen2()
.then(response => console.log(response))
.catch(err => console.log(err));


Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
    console.log('Array of results', response);
})
.catch(err => {
    console.error(err);
})