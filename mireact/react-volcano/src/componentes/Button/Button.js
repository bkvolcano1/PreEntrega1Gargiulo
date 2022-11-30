const Button = (props) =>{
    return <button onClick={props.func} style={{color: props.colortext}}>{props.text}</button>
}
export default Button