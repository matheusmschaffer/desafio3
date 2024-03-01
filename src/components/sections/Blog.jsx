import styles from './Blog.module.css'
import Post from '../elements/Post.jsx'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Blog() {
    return (
        <div id="blog" className={styles.blog}>
            <h3>Blog</h3>
            <section>
                <Carousel fade={true} slide={false} pause="hover" data-bs-theme="dark">
                    <Carousel.Item>
                        <Post title='Google lança Gemma, uma IA de código aberto baseada no Gemini' date='21/02/2024 às 11:44' subject='2 min de leitura' description='O Google anunciou nesta quarta-feira (21) o lançamento de um novo modelo de linguagem de inteligência artificial (IA). A novidade se chama Gemma, uma plataforma de código aberto voltada para empresas e pesquisadores interessados em explorar o tema e criar as próprias IAs.' link="https://www.tecmundo.com.br/software/280113-google-lanca-gemma-ia-codigo-aberto-baseada-gemini.htm" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Post title='Confira as 5 linguagens mais populares do mundo' date='07/02/2024 às 08:00' subject='Veja para que servem Java, Shell e Python, que ficaram nas primeiras posições dos rankings internacional e brasileiro' description='O Brasil terá déficit de 530 mil profissionais de tecnologia até 2025.' link="https://exame.com/bussola/gosta-de-programacao-confira-as-5-linguagens-mais-populares-do-mundo/" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Post title='Notícia 3' date='03 Fev 2024' subject='Assunto da notícia' description='Noticia baseada em fatos reais e verídicos ah hahhahahahahhah hah hah ha hah ahah haha' />
                    </Carousel.Item>
                </Carousel>
            </section>
        </div>
    )
} export default Blog