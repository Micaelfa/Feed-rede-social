import { ThumbsUp, Trash } from "phosphor-react";
import styles from './Comment.module.css';
import { Avatar } from "./Avatar";
import {useState } from "react";

export function Comment({content, deleteComment}) {
    const [LikeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        deleteComment(content)
    }

    function handleLikeComment() {

        setLikeCount(LikeCount + 1)
    }

    return(
        <div className={styles.comment}>
            <Avatar noBorder={false} src="https://scontent.fcgh38-1.fna.fbcdn.net/v/t39.30808-6/415227694_3493654930947619_5905859970023033324_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH48ThgI3pWdjzu4H0hjcdy3ILlHW-GTpLcguUdb4ZOkqY27LM2ZiHFqvyyboY0NL3W-zJ9O5K5zaivH8sbFDNs&_nc_ohc=_iiKuH9xmtcQ7kNvgEe9qv-&_nc_zt=23&_nc_ht=scontent.fcgh38-1.fna&_nc_gid=Adx6qFVbQzpC5sRN55erbjg&oh=00_AYDioiiYmp5exJ9rj-JOSjvPGQ1-VQYbNUZrZb76iHWGNA&oe=676D0BBF"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Guilherme Elias</strong>
                            <time title='25 de dezembro de 2024 ás 16:35' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p> {content} </p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span> {LikeCount} </span>
                    </button>
                </footer>
            </div>
        </div>
    )
}