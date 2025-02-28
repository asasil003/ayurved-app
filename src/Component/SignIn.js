import { Link } from "react-router-dom";
function SignIn(){
    return (
        <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Sign In to your account</h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                        Email address</label>
                        <div className="mt-2">
                            <input id="email" name="email" type="email"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900
                            outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus: outlin-2 
                            focus:-outline-offset-2 focus: outline-indigo-600 sm:text-sm/6"
                            required/>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                        Password</label>
                        <div className="text-sm">
                            <a href className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot Password</a>
                        </div>
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" type="password"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900
                            outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus: outlin-2 
                            focus:-outline-offset-2 focus: outline-indigo-600 sm:text-sm/6"
                            required/>
                        </div>
                    </div>

                    <div>
                        <Link to="/">
                        <button type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white 
                        shadow-xs hover:bg-indigo-500 focus-visible:outline-offset-2 fous-visible:outline-indigo-600">
                            Sign In</button>
                        </Link>
                    </div>

                    
                    <div>
                        <Link to="/SignUp">
                        <h2 className="text-center">Don't have an account?</h2>
                        <button type="submit"
                        className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm/6 font-semibold text-indigo-600 
                        shadow-xs hover:text-indigo-500 focus-visible:outline-offset-2 fous-visible:outline-indigo-600">
                            Sign Up</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default SignIn;