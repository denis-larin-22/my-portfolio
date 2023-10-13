import './styles/index.css';

export const WordAnimate = ({ word, delay = false }) => {
    return (
        <svg className='svg-word'>
            <text className={delay ? 'text text_delay' : 'text'} x="0%" y="75%" >
                {word}
            </text>
        </svg>
    )
}