import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import {PencilLine} from 'phosphor-react'

export function Sidebar() {
   return (
    <aside className={styles.sidebar}>
        <img 
        className= {styles.cover}
        src='https://images.unsplash.com/photo-1733690567161-326d5294d3bb?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>    
    </img>
        <div className={styles.profile}>
            
            <Avatar 
            src='https://scontent.fcgh38-1.fna.fbcdn.net/v/t39.30808-6/400802233_2589626174546235_1308858955315221964_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHyJt50oOPu7I0joLqLVU6lkzjG9johHCaTOMb2OiEcJvdDZyy37vIBF7KucsA5HyS3ZN4p4C30H2RAGfu81EnG&_nc_ohc=AM2oFrejUlQQ7kNvgFh9eD-&_nc_zt=23&_nc_ht=scontent.fcgh38-1.fna&_nc_gid=A1lTylD0kQ8kjHTsD_6hAI3&oh=00_AYANfViegt4n8gEvOBYZkyWENZ_79PZ0IrCnTMmlccwDrw&oe=676BFEEC' alt='Foto de perfil'/>
           
            <strong>Micael  Farias</strong>
            <span>Programador e empresário</span>
        </div>

        <footer>
            <a href="#">
            <PencilLine size={20}/>
            <p>Editar seu perfil</p>
            </a>
        </footer>
    </aside>
   )
}


