import { useEffect, useReducer } from 'react'
import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA';


function Presentation() {
    const initialState = {
        text: '',
        loop: 0,
        isDeleting: false,
        delta: Math.floor(Math.random() * 300 - 150 + 1) + 150
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'setText':
                return { ...state, text: action.payload };
            case 'setLoop':
                return { ...state, loop: action.payload };
            case 'setIsDeleting':
                return { ...state, isDeleting: action.payload };
            case 'setDelta':
                return { ...state, delta: action.payload };
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    const { text, loop, isDeleting, delta } = state;

    const toRotate = ['Matheus Schaffer!!!', 'Desenvolvedor full stack!!!', 'Product Manager!!!'];
    const min = 150;
    const max = 300;

    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, delta)
        return () => { clearInterval(ticker) }
    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        dispatch({ type: 'setText', payload: updatedText });

        if (!isDeleting) { dispatch({ type: 'setDelta', payload: Math.floor(Math.random() * max - min + 1) + min }) }

        if (!isDeleting && updatedText === fullText) {
            dispatch({ type: 'setIsDeleting', payload: true });
            dispatch({ type: 'setDelta', payload: 100 });
        } else if (isDeleting && updatedText === '') {
            dispatch({ type: 'setIsDeleting', payload: false });
            dispatch({ type: 'setDelta', payload: Math.floor(Math.random() * max - min + 1) + min });
            dispatch({ type: 'setLoop', payload: loop + 1 });
        }

    }

    return (
        <div className={styles.presentation}>
            <h1>Olá, eu sou {state.text}</h1>
            <p>
                Sou um resolvedor de problemas nato, apaixonado por soluções práticas e inovadoras.<br />
                Como analista de sistemas, busco resolver as barreiras que impedem os clientes e<br />
                usuários de terem sucesso na utilização de nossos produtos. Fidelizar e criar novas<br />
                oportunidades de negócio são os meus motivadores diários, estes refletem em receitas<br />
                diretas e indiretas para os negócios.
            </p>
            <ButtonA link='../components/downloads/CV-Matheus.docx' text="Download resumo" />
        </div>
    )
} export default Presentation