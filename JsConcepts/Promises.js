async function getData() {
    fetch('https://gdfsservice.aangeles.com/api/auth/getsession').then(r => {
        console.log(r)
    })

    console.log('after result')
}

async function getTest() {
    let test = "Antes de la Promesa"
    console.log(test)
    test = new Promise(resolve =>
        resolve('Resultado 1')
        //setTimeout(() => resolve('despues'), 0)
    ).then(r => console.log(r))

    console.log('Continuacion Sincrona ', test)

    let test2 = await new Promise(resolve =>
        //resolve('Resultado 2')
        setTimeout(() => resolve('Resultado 2'), 0)
    )

    console.log('Continuacion Sincrona 2', test2)
}

getTest()