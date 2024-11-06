export default function Button({className, text, action}) {
    // async function handle() {
    //     action()
    // }
    return <button  className={` px-5 ${className}`}>{text}</button>
}