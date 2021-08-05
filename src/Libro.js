import React from 'react'


class Book extends React.Component{
  render(){
    const {imagen,titulo,nombreautor}= this.props;
    const botonseleccionado= (e)=>{
      console.log(e)
      console.log(e.target)
      alert("Hello")
    }
    const complex= (t)=>{
      console.log(t)
    }
    return <article className="libroindividual"  onMouseOver={()=>{
      console.log(this.props.titulo);
    } } >
	<img src={imagen} height={160} width={150}/>
	<h1>{titulo}</h1>
	<h4>{nombreautor}</h4>
	<input type="button" onClick={botonseleccionado} value="Referencia"/>
	<input type="button" onClick={()=>complex(titulo)} value="Complejo"/>
      </article>
  }
}

export default Book

