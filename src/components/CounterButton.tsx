
type ButtonProps = {
    onClick: () => void;
    disabled?: boolean;
    label: string
    addClasses?: string;

}


const CounterButton = ({onClick, disabled = false, label, addClasses = "bg-cf-dark-gray"}: ButtonProps) => {


    return (
        <>
            <button
                onClick={onClick}
                disabled={disabled}
                className={`text-white py-2 px-4 ` + addClasses}
            >
                {label}
            </button>

        </>
    )


}
export default CounterButton;