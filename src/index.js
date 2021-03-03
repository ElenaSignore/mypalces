/** importiamo la libreria 'react', quindi i suoi metodi, e accediamo a questa libreria attrav erso la variabile React*/
import React from 'react';
import ReactDOM from 'react-dom'

/** -- REACT PURO -- */
/**
 * React.createElement(
 * type,
 * [props],
 * [...children]
 * )
 */

//----------//
// const element = React.createElement(
//     'strong', 
//     null,
//     'Ciao Mondo');
//console.log("element", element)
//----------//

//----------//
// const element = React.createElement(
//     'strong',
//     {
//         className:'Benvenuto'
//     },
//     'Ciao Mondo'
//     )
//----------//
/** per ora abbiamo dato una Stringa all'elemento [...childrean] ora proviamo ad inserire un elemento React */

//ARRAY//
// const contatti=[
//     'Elena',
//     'Marco',
//     'Martina'
// ]
// const element = React.createElement(
//     'ol',
//     null,
//     contatti.map(x => (
//         React.createElement('li',null,x)
//         ))
//     )

//OGGETTI//
// const contatti =[
//     {name: 'Elena', age: 22},
//     {name: 'Marco', age: 44},
//     {name: 'Giovanni', age: 56}
// ]

// const element = React.createElement(
//         'ol',
//         null,
//         contatti.map((x,index) => (
//             React.createElement('li',{key:index},x.name)
//             ))
//         )
//----------//


/** per presentare l'elemento sull'interfaccia dobbiamo utilizzare l'istruzione render per fare il render di element sul DOM */
/** l'id 'root' presente dentro document.getElementById('root') si riferisce all'id dentro <div id="root"></div> presente nella pagina index.html*/


/** -- JSX -- */
//OGGETTI//
const contatti = [
    { name: 'Elena', age: 22 },
    { name: 'Marco', age: 44 },
    { name: 'Giovanni', age: 56 }
]

// const element = <ol>
//     {/* prendo il nome dell'elemento 0 dell'array contatti */}
//     <li>{contatti[0].name}</li>
// </ol>

//nel caso di una LISTA 
const element =
    <ol>
        {
            contatti.map(
                (x, index) => (
                    <li key={index}>
                        {x.name}
                    </li>
                )
            )
        }
    </ol>
//----------//

ReactDOM.render(element, document.getElementById('root'))
