import Link from "next/link";
import {useRouter} from "next/router";

const LoginView = () => {
    const router = useRouter();

    const handleLogin = () => {
        router.push("/products");
    }

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={() => handleLogin()}>login</button>
            <p>
                belum punya akun? resgiter <Link href={"/auth/register"}>disini</Link>
            </p>
        </div>)
};
export default LoginView;