// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Card from "./components/Card.tsx";


import LayOut from "./components/LayOut.tsx";
import CounterWithRef from "./components/CounterWithRef.tsx";
//import Timer from "./components/Timer.tsx";
//import WindowSize from "./components/WindowSize.tsx";
//import FocusInput from "./components/FocusInput.tsx";
//import PreviousValue from "./components/PreviousValue.tsx";
//import Timer from "./components/Timer.tsx";
//import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
//import NameChangerWithEffect from "./components/NameChangerWithEffect.tsx";
//import {useEffect} from "react";
// import {useEffect} from "react";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
//import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
//import Counter from "./components/Counter.tsx";
//import NameChanger from "./components/NameChanger.tsx";
//import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";

function App() {

    // useEffect(() => {
    //     const id: number = setInterval(() => console.log("tick"), 1000)
    //     return() => clearInterval(id);
    // }, []);
    //
    // useEffect(() => {
    //     let counter: number = 1;
    //     const id: number = setInterval(() => {
    //         console.log(counter++);
    //     }, 1000);
    //     return () => clearInterval(id);
    // }, []);


    return (
        <>
            {/*<ViteIntro />*/}
            {/*<ClassComponent />*/}
            {/*<FunctionalComponent />*/}
            {/*<ArrowFunctionalComponent />*/}
            {/*<ArrowFunctionalComponentWithProps title={"Is an Arrow Functional Component With Props"}/>*/}
            {/*<ArrowFunctionalComponentWithProps title={"Is an Arrow Functional Component With 2 Props"}/>*/}
            {/*<ArrowFunctionalComponentWithPropsType title={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}*/}
            {/*                                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>*/}

            {/*<Card title={"Card"}>*/}
            {/*    <ArrowFunctionalComponentWithPropsType title={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}*/}
            {/*                                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>*/}
            {/*</Card>*/}

            <LayOut>
                {/*<FunctionalComponentWithState />*/}
                {/*<ClassComponentWithState />*/}
                {/*<Counter />*/}
                {/*<NameChanger />*/}
                {/*<CounterWithMoreStates />*/}
                {/*<CounterWithMoreStates />*/}
                {/*<CounterWithCustomHook />*/}
                {/*<NameChangerWithEffect />*/}
               {/*<Timer />*/}

                {/*<WindowSize />*/}
                {/*<FocusInput />*/}

                {/*<PreviousValue />*/}

                <CounterWithRef />


            </LayOut>

        </>
    )
}

export default App
