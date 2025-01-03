import './global.css';
import { Post } from './components/Post';
import { Header } from './components/Header';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

const posts = [
  { 
    id: 1,
    author: {
      avatarUrl: 'https://scontent.fcgh12-1.fna.fbcdn.net/v/t39.30808-6/468509795_18034737254460454_5511852720142945318_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGLfWPizxUheRVHMdib4JkJgtN1qX69DziC03Wpfr0POIL4wn_shpzgi1i0KhiMyvVRbFGe3DgoQaMoQkz1Ktm7&_nc_ohc=8g8BscGu0LQQ7kNvgHDRI_2&_nc_zt=23&_nc_ht=scontent.fcgh12-1.fna&_nc_gid=Au-BiohjcXD-nkV4wnsLlxu&oh=00_AYDjFHXdVNKIxtFLryg6X3Amg46V7TKKA0KNCgBy4-lq5w&oe=676F9F82',
      name: 'Kauane Lopes',
      role: 'Psicogata',
    },
    content: [
      { type: 'paragrafo', content: 'Oiie gente, acabei de subir mais um projeto para meu portifolio.' },
      { type: 'paragrafo', content: 'É um projeto diferenciado que simula o funcionamento de um feed de rede social' },
      { type: 'link', content: <a href="https://www.instagram.com/desakauane/">Marque sua consulta, não perca mais tempo</a> },
    ],
    publishedAt: new Date('2024-12-22T20:30:00'),
  },
  { 
    id: 2,
    author: {
      avatarUrl: 'https://scontent.fcgh38-1.fna.fbcdn.net/v/t39.30808-6/449985909_3547899038854657_2163213507142242128_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEnphyDcXD60xMrOA3HNZzFnMlAaHhV-1-cyUBoeFX7Xw1w-UZaKahntpqV9koIrv4RxvXdOgFbxWm_emQtRfLX&_nc_ohc=5pL5DxRfOIYQ7kNvgF9FnWN&_nc_zt=23&_nc_ht=scontent.fcgh38-1.fna&_nc_gid=AD5g67Rk-jQxb0FhX0Bzhmv&oh=00_AYBBguBt3P-GACv6ZPM4V4SDZ6704iD17sbrYDBg5h_mEw&oe=676FB08D',
      name: 'Potato Grower',
      role: 'Traficante de cannabis',
    },
    content: [
      { type: 'paragrafo', content: 'Oiie gente, acabei de subir mais um projeto para meu portifolio.' },
      { type: 'paragrafo', content: 'Novos produtos para você diversificar' },
      { type: 'link', content: <a href="https://www.instagram.com/desakauane/">Aproveite a promoção de fim de ano para comprar a sua cota</a> },
    ],
    publishedAt: new Date('2024-12-25T00:12:00'),
  },
];

const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
};

export default App;
