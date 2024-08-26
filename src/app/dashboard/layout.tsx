import Header from "./components/header";

export default function DashboarLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
        </>
    )

}