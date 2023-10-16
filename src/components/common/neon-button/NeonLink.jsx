import './styles/index.css';

export const NeonLink = ({ children, href = '/', mStyles }) => {
    return (
        <a href={href} className={`btn + ${mStyles}`}>
            <span className="btn__line btn__line_top"></span>
            <span className="btn__line btn__line_bottom"></span>
            <span className="btn__line btn__line_left"></span>
            <span className="btn__line btn__line_right"></span>
            {children}
        </a>
    )
}