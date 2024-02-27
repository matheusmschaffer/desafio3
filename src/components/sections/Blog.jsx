import styles from './Blog.module.css'
import Post from '../elements/Post.jsx'

function Blog() {
    return (
        <div id="blog" className={styles.blog}>
            <h3>Blog</h3>
            <section>
                <Post title='Notícia 1' date='03 Fev 2024' subject='Assunto da notícia' description='Noticia baseada em fatos reais e verídicos ah hahhahahahahhah hah hah ha hah ahah haha' />
                <Post title='Notícia 1' date='03 Fev 2024' subject='Assunto da notícia' description='Noticia baseada em fatos reais e verídicos ah hahhahahahahhah hah hah ha hah ahah haha' />
            </section>
        </div>
    )
} export default Blog