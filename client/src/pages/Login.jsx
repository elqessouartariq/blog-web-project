import { useState } from 'react';
import LargeButton from '../components/shared/LargeButton';
import axiosInstance from '../utils/axiosConfig';
import { Link } from 'react-router-dom';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axiosInstance.post('/users/signin', {
				email,
				password,
			});

			window.localStorage.setItem('authToken', response.data.token);
			window.localStorage.setItem(
				'authUser',
				JSON.stringify(response.data.user)
			);

			window.location.href = '/';
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className="flex justify-center items-center h-screen">
				<div className="w-full max-w-[23rem] ">
					<h1 className="font-heading text-3xl text-primaryBlack font-bold mb-3 text-center">
						Welcome back!
					</h1>
					<p className="font-primary text-primaryBlack font-normal text-base mb-3 text-center">
						Sign in to get the most out of nuntium.
					</p>
					<div className="my-3 font-primary flex justify-end text-sm text-blue-600 font-normal">
						<Link to="/register">Don't have an account?</Link>
					</div>
					<div className="mb-3 ">
						<label
							htmlFor="email"
							className="font-primary font-medium"
						>
							Username
						</label>
						<div className="relative">
							<img
								src="/src/assets/icons/userAvatar.svg"
								alt="Image description"
								className="absolute left-3 top-3 w-5 h-5"
							/>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Username"
								className="pl-12 py-3 rounded-lg bg-[#F8F8F8] font-primary text-primaryGray outline-none w-full font-normal text-base"
								onInput={(e) => setEmail(e.target.value)}
							/>
						</div>
					</div>
					<div className="mb-3">
						<label
							htmlFor="password"
							className="font-primary font-medium "
						>
							Password
						</label>
						<div className="relative">
							<img
								src="/src/assets/icons/key.svg"
								alt="Image description"
								className="absolute left-3 top-4 w-5 h-5"
							/>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Password"
								className="pl-12 py-3 rounded-lg bg-[#F8F8F8] font-primary text-primaryGray outline-none w-full font-normal text-base"
								onInput={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>
					<div className="flex justify-between items-center mb-4">
						<div className="flex items-center">
							<input
								type="checkbox"
								name="rememberme"
								id="rememberme"
								className="w-3 h-3"
							/>
							<label
								htmlFor="rememberme"
								className="pl-3 font-primary text-xs text-primaryGray font-normal select-none"
							>
								Remember me
							</label>
						</div>
						<div className="font-primary text-xs text-primaryGray font-normal">
							<a href="#">Forgot Password?</a>
						</div>
					</div>
					<LargeButton text="Login" onClick={handleSubmit} />
				</div>
			</div>
		</>
	);
};

export default Login;
