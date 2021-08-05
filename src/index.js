import React from "react"; 
import ReactDOM from "react-dom";



// Importando css de un archivo
import './index.css'
import {libros} from './ibros';
import Book from "./Libro";
import {greeting} from '../src/testing/testing';


/*
function Enviartitle(){
  return(
    <div>
    <h1>Hola como estas</h1>
    </div>
  )
}

*/

/*
const Enviartitle= ()=>{
  return React.createElement("div",{},
    React.createElement('h1',{},"Hola como estas")    
  )
}
*/

/*
const ReturnSigleElement=()=>{
  return( 
    <>
      <div>
	<h1> Hello a todos </h1>
	<ul>
	  <li>
	      <h1>Hola</h1>
	  </li>
	  <li>
	      <h1>Bien y tu</h1>
	  </li>
	</ul>
      </div>
      <div>
	<ul>
	  <li>
	     <a href="https://www.google.com" target="_blank">Vamos a google</a>
	  </li>
	</ul>
      </div>
    </>
  )
}
*/

/*
const NombreEstudiante=()=>{
  return React.createElement("div",{},React.createElement("ul",{},
    React.createElement("li",{},"Lista uno")
  ))
}

const ReturnSigleElement=()=>{
  return(
    <>
    <Enviartitle/>
    <NombreEstudiante/>
    )
    </>
  );
}
*/



/*
class Image extends React.Component{
  render(){
    return <img src={urlimagen} alt="" width="160" height="150"/>
  }
}
*/
/*
const Title =()=>{
  return <h4 style={{color:"red", fontSize:"0.75em",marginTop:"0.4em"}}
    className="titulobook"> {textotitulo} </h4>
}


class Author extends React.Component {
  render(){
    return <h4>{textonombre}</h4>
  }
}


*/
/*
 * TODO in this section the values were evaluated*/
/*
const primerLibro={
  urlimagen:"https://images-na.ssl-images-amazon.com/images/I/51CTa-6S59L._SY498_BO1,204,203,200_.jpg",
  textotitulo:"I Love You to the Moon",
  textonombre:"Melissa Ivey Staehli"
} 

const segundoLibro={
  urlimagen:"https://m.media-amazon.com/images/I/41LfYrZSQML._AC_UL320_.jpg",
  textonombre:"Paulo Coelho",
  textotitulo:"El Alquimista: Una Fabula Para Seguir Tus Suenos"
}

*/

/*
 * TODO Formas de declarar un objeto*/
/*
class Book extends React.Component{
  render(){
    const {imagen,titulo,nombreautor}= this.props;
    return <article className="libroindividual">
	<img src={imagen} height={160} width={150}/>
	<h1>{titulo}</h1>
	<h4>{nombreautor}</h4>
	<p>{this.props.job}</p>
	<p>{this.props.nuevo}</p>
	<p>{this.props.numero}</p>
	{this.props.children}
	<p>{console.log(this.props)}</p>
      </article>
  }
}

*/




/*
 * TODO Aqui se muestra los resultados*/

const arreglo=["Wes","Como","Estas"]
const mapadenombres = arreglo.map((e)=>{
  return <h1>{e}</h1>
})
console.log(mapadenombres)

const Listalibros=()=>{
  console.log(greeting)
  return <React.Fragment >
    <h1 className="titulo" >Lista de libros</h1>
    <section className="libro" >
    {libros.map((e)=>{
      const {textotitulo,urlimagen,textonombre}= e;
      return <Book key={e.id} imagen={urlimagen} titulo={textotitulo} nombreautor={textonombre}  />
    })}
    </section>
    </React.Fragment>
}

ReactDOM.render(<Listalibros/>,document.querySelector("#root"))
