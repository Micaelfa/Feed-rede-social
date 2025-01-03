import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {

    const [comments, setComments] = useState([
        'post muito bacana, hein !!'
    ])

    const [novoComentarioTexto, setNovoComentarioTexto] = useState('')

    const publishedDateFormatted = format(
      publishedAt,
      "d 'de' LLLL 'às' HH:mm'h'",
      { locale: ptBR }
    );
  
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(){
        event.preventDefault()
        
        setComments([...comments, novoComentarioTexto ]);
        setNovoComentarioTexto('');
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('')
        setNovoComentarioTexto(event.target.value);

    }

    function handleNewCommentInvalid () { 
        event.target.setCustomValidity('Esse campo tem que ser preenchido')

    }

    function deleteComment(commentToDelete){
        const excluindoComentario = comments.filter(comment => {
            return comment !== commentToDelete
        })


        setComments(excluindoComentario)
    }

    return (
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src={author.avatarUrl} />
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>
  
          <time
            title={publishedDateFormatted}
            dateTime={publishedAt.toISOString()}>
            {publishedDateRelativeToNow}                        
          </time>
        </header>
  
        <div className={styles.content}>
         {content.map(Line => {
            if (Line.type == 'paragraph') {
                return <p key={Line.content}> {Line.content} </p>;
            } else if (Line.type == 'link') {
                return <p key={Line.content}><a href="#">{Line.content}</a></p>
            }
         })}
        </div>
  
        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Nos conte o que achou</strong>

          <textarea name='comentario' 
          placeholder="Deixe seu comentário" 
          onChange={handleNewCommentChange}
          value={novoComentarioTexto}
          onInvalid={handleNewCommentInvalid}
          required
          />

          <footer>
            <button type="submit" disabled={novoComentarioTexto.length == 0}>
                Publicar
            </button>
          </footer>
        </form>
  
        <div className={styles.commentList}>
         {comments.map(comment => {
            return (<Comment 
                    key={comment} 
                    content={comment}
                    deleteComment={deleteComment}
                />
            )
         })}
        </div>
      </article>
    ); 
  } 
  