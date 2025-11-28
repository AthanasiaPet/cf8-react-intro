// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Card from "./components/Card.tsx";


import LayOut from "./components/LayOut.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
//import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
//import Counter from "./components/Counter.tsx";
import NameChanger from "./components/NameChanger.tsx";

function App() {


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
                <NameChanger />
            </LayOut>

        </>
    )
}

export default App
