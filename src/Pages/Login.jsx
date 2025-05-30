import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
  <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10">
    <h2 className="text-2xl font-semibold text-center mb-4">Login your account</h2>
    <div className="card-body">
      <form className="w-full space-y-4"> {/* Added w-full and spacing */}
        <div>
          <label className="label">Email</label>
          <input type="email" className="input input-bordered w-full" placeholder="Email" />
        </div>
        <div>
          <label className="label">Password</label>
          <input type="password" className="input input-bordered w-full" placeholder="Password" />
        </div>
        <div className="text-right">
          <a className="link link-hover text-sm">Forgot password?</a>
        </div>
        <button className="btn btn-neutral w-full">Login</button> {/* Full-width button */}
      </form>
      <p className="text-center font-semibold">Dont’t Have An Account ?  
        <Link to='/auth/register' className="text-red-500">Register</Link>
      </p>
    </div>
  </div>
</div>

    );
};

export default Login;