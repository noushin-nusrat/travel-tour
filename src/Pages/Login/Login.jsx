import NavTwo from "../../Shared/NavTwo";
import { useContext } from "react";
import { AuthContext } from "../../Services/AuthProvider";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "animate.css"; // Import animate.css for animations

function Login() {
  const {
    register,
    formState: { errors },
  } = useForm();

  const { signIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const username = e.target.username.value; // Extract username
    signIn(email, password, username) // Pass username to signIn function
      .then((res) => console.log(res.user))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavTwo />

      <form
        onSubmit={handleLogin}
        className="max-w-md mx-auto p-6 shadow-md rounded-xl bg-white animate__animated animate__fadeInDown" // Add animate.css classes
      >
        <h2 className="text-2xl font-bold py-2 text-center">Login</h2>
        <div className="mb-5">
          <input
            type="text"
            name="username" // Set input name to "username"
            id="floating_username"
            className="block w-full py-2.5 px-4 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-amber-600"
            placeholder="User Name" // Placeholder for user name
            required
          />
        </div>
        <div className="mb-5">
          <input
            type="email"
            name="email"
            id="floating_email"
            className="block w-full py-2.5 px-4 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-amber-600"
            placeholder="Email address"
            required
          />
        </div>
        <div className="mb-5">
          <input
            type="password"
            name="password"
            id="floating_password"
            className="block w-full py-2.5 px-4 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-amber-600"
            placeholder="Password"
            required
          />
        </div>
        <button className="btn bg-amber-400 hover:bg-amber-300 duration-150 w-full py-2.5 rounded-md text-white font-semibold">
          Log In
        </button>
        <p className="text-center pt-2">
          Don't have an Account?{" "}
          <Link to="/register" className="text-amber-500">
            Create Account
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
