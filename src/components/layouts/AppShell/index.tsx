import { useRouter } from "next/router";
import Navbar from "../Navbar"

interface AppShellProps {
    children: React.ReactNode
}

const disableNavbar = ["/auth/login", "/auth/register"];

const AppShell = ({children}: AppShellProps) => {

    const router = useRouter()

    return(
        <main>
            {!disableNavbar.includes(router.pathname) && <Navbar/>}
            {children}
        </main>
    )
}

export default AppShell