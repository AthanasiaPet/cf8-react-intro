import {useState} from "react";

const Counter = () => {

    const [count, Setcount] = useState(0);

    const increaseCount = () => {
        Setcount(count + 1);
    }

    const decreaseCount = () => {
        if (count > 0) {
            Setcount(count - 1);
        }

    }

    const resetCount = () => {
        Setcount(0);
    }





    return (
        <>
            <h1 className={"text-center my-12"}>Count is <strong>{count}</strong></h1>
            <div className="text-center space-x-4">
                <button onClick={increaseCount}
                        className="bg-cf-dark-gray text-white py-2 px-4">
                    Increase
                </button>

                <button onClick={decreaseCount}
                        disabled={count === 0}
                        className="bg-cf-dark-gray disabled:bg-cf-gray text-white py-2 px-4">
                    Decrease
                </button>

                <button onClick={resetCount}
                        disabled={count === 0}
                        className="bg-cf-dark-gray disabled:bg-cf-gray text-white py-2 px-4">
                    Reset
                </button>
            </div>
        </>
    )
}

export default Counter;