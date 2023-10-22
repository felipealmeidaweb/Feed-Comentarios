
import Handle from "./hooks/Handle"



 export default function App() {
  const {autor,setAutor,content,setContent,comments,handleSubmit} = Handle()


 return(
  <div id="app">
    <h2> feed de comentarios</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="autor">Email:</label>
      <input type="email"
      id="autor"
       name="autor"
       value={autor}
       onChange={(ev) =>setAutor(ev.target.value)}
        required/>

      <label htmlFor="content">Comentario:</label>
      <textarea name="content"
       id="content" 
       cols="30"
        rows="6" 
        value={content}
        onChange={(ev)=> setContent(ev.target.value)}
        required>
        </textarea>


      <button type="submit">Enviar</button>


    </form>
    <hr />
    <section id="comments">
     <div>
      {comments.length >0 ?(
        comments.map((comment)=>(
          <div key={comment.id}>
            <h3>{comment.autor}</h3>
            <span> Em {comment.data.toLocaleString()} 
            </span>
            <p>{comment.content}</p>

            </div>
        ))
      ):(
        <p>seja o primeiro a comentar</p>
      )}
     </div>
    </section>
   
  </div>
  
  
    

  )
}


