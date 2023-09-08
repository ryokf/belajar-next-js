import Navbar from "../Navbar"

interface AppShellProps {
    children: React.ReactNode
}

const AppShell = ({children}: AppShellProps) => {
    return(
        <main>
            <Navbar/>
            {children}
        </main>
    )
}

export default AppShell