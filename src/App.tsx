// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Card from "./components/Card.tsx";


// import LayOut from "./components/LayOut.tsx";
// import CounterWithRef from "./components/CounterWithRef.tsx";
// import {useEffect} from "react";
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

import {BrowserRouter, Route, Routes} from "react-router";
import NameChanger from "./components/NameChanger.tsx";
import HomePage from "./pages/HomePage.tsx";
import Timer from "./components/Timer.tsx";
import RouterLayout from "./components/RouterLayout.tsx";

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

    // useEffect(() => {
    //     history.pushState({page: 1}, "", "/page")
    //     history.replaceState({page: 1}, "", "/page1");
    //
    //     window.onpopstate = (e) => {
    //         console.log(e.state);
    //     }
    // });


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

            {/*<LayOut>*/}
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

            {/*    <CounterWithRef />*/}


            {/*</LayOut>*/}

            <BrowserRouter>
                <Routes>

                    {/*<Route path="name-changer" element={<NameChanger />} />*/}
                    {/*<Route path="timer" element={<Timer />} />*/}

                    <Route element={<RouterLayout />} />
                         <Route index element = {<HomePage />} />
                {/*    Nested Routes */}
                    <Route path="examples?">
                        <Route path="name-changer" element={<NameChanger />} />
                        <Route path="timer" element={<Timer />} />
                    </Route>


                {/*    Dynamic Segments*/}
                {/*    <Route path="users/:userId" element={<UserPage />} />*/}

                {/*    <Route path="users">*/}
                {/*        <Route path=":userId">*/}
                {/*            <Route index element={<UserPage/>} />*/}
                {/*            <Route path="accounts" element={<UserAccountPage />} />*/}
                {/*        </Route>*/}
                {/*    </Route>*/}

                {/*/!*    Catch all files from file page*!/*/}
                {/*/!*    <Route path="files/*" element={<FilePage />} />*!/*/}


                </Routes>


            </BrowserRouter>


        </>
    )
}

export default App
