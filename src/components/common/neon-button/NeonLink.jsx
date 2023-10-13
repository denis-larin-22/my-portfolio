import './styles/index.css';

export const NeonLink = ({ children, href = '/' }) => {
    return (
        <a href={href} class="btn">
            <span class="btn__line btn__line_top"></span>
            <span class="btn__line btn__line_bottom"></span>
            <span class="btn__line btn__line_left"></span>
            <span class="btn__line btn__line_right"></span>
            {children}
        </a>
    )
}