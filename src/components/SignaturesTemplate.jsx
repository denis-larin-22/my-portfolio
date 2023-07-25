export const SignaturesTemplate = (props) => {
    const { mStyles, signature1, signature2 } = props;
    const signatureStyle = 'font-aurore text-signatures text-grey-sign';

    const printSignature = (value) => {
        if (value === null) return false;
        return true;
    }

    return (
        <div className={`${mStyles}`}>
            {printSignature(signature1) && <p className={signatureStyle}>{`< ${signature1} >`}</p>}
            {props.children}
            {/* {console.log(signature2)} */}
            {printSignature(signature2) && <p className={signatureStyle}>{`</ ${signature2 || signature1} >`}</p>}
        </div>
    )
} 