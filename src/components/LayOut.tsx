import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

interface LayOutProps {
    children: React.ReactNode
}

const LayOut = ({children}: LayOutProps) => {
    return (
        <>
        <Header />
            <div className="container mx-auto pt-24 min-h-[94vh]">
                {children}
            </div>

        <Footer />
        </>

    )
}
export default LayOut;