import classes from "./ErrorModal.module.css";

function ErrorModal (props) {

    return (
        <>
            <div className={classes.backDrop} onClick={props.onCancle}></div>
            <div className={classes.modal}>
                <header>
                    {props.title}
                </header>
                <div>
                    {props.message}
                </div>
                <button type="button" onClick={props.onCancle}>
                    Okay
                </button>
            </div>
        </>
    );
}

export default ErrorModal;