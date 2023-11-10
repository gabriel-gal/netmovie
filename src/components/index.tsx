import Header from "@/components/Header";
import Carrossel from "./Main/Carrossel";


export default function PageHome() {
    return (
        <div className="h-screen"
            style={{ display: 'grid', gridTemplateRows: '64px 1fr' }}>

            <Header />

            <main className="w-full h-screen bg-cor-fundo mt-16"
                style={{ display: 'grid', gridTemplateRows: '26.5rem 1fr' }}>

                <Carrossel />

            </main>
        </div>
    )
}