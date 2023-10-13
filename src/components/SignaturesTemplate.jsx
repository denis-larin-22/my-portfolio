export const SignaturesTemplate = (props) => {
    const { mStyles, signature1, signature2 } = props;
    const signatureStyles = 'font-aurore text-signatures text-grey-sign';

    const printSignature = (value) => {
        if (value === null) return false;
        return true;
    }

    return (
        <div className={`${mStyles || null}`}>
            {printSignature(signature1) && <p className={signatureStyles}>{`< ${signature1} >`}</p>}
            {props.children}
            {printSignature(signature2) && <p className={signatureStyles}>{`</ ${signature2 || signature1} >`}</p>}
        </div>
    )
} 