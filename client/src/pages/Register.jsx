import { useState } from 'react';
import LargeButton from '../components/shared/LargeButton';
import axiosInstance from '../utils/axiosConfig';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [username, setUsername] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axiosInstance.post('/users/register', {
				name,
				email,
				password,
				confirmPassword,
				username,
				about: 'about',
			});

			navigate('/login');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex justify-center items-center h-screen">
			<div className="w-full max-w-sm">
				<h1 className="font-heading text-3xl text-primaryBlack font-bold mb-3 text-center">
					Create New Account!
				</h1>
				<p className="font-primary text-primaryBlack font-normal text-base mb-3 text-center">
					Register now to unlock the full potential of nuntium.
				</p>
				<div className="mb-3">
					<label htmlFor="name" className="font-primary font-medium">
						Full Name
					</label>
					<div className="relative">
						<img
							src="/src/assets/icons/userAvatar.svg"
							alt="Image description"
							className="absolute left-3 top-3 w-5 h-5"
						/>
						<input
							type="name"
							name="name"
							id="name"
							placeholder="Full Name"
							className="pl-12 py-3 rounded-lg bg-[#F8F8F8] font-primary text-primaryGray outline-none w-full font-normal text-base"
							onInput={(e) => setName(e.target.value)}
						/>
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="email" className="font-primary font-medium">
						Email
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
							placeholder="Email"
							className="pl-12 py-3 rounded-lg bg-[#F8F8F8] font-primary text-primaryGray outline-none w-full font-normal text-base"
							onInput={(e) => setEmail(e.target.value)}
						/>
					</div>
				</div>
				<div className="mb-3">
					<label
						htmlFor="username"
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
							type="text"
							id="username"
							placeholder="Username"
							className="pl-12 py-3 rounded-lg bg-[#F8F8F8] font-primary text-primaryGray outline-none w-full font-normal text-base"
							onInput={(e) => setUsername(e.target.value)}
						/>
					</div>
				</div>
				<div className="mb-3">
					<label
						htmlFor="password"
						className="font-primary font-medium"
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
				<div className="mb-3">
					<label
						htmlFor="password"
						className="font-primary font-medium"
					>
						Confirm Password
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
							placeholder="Confirm Password"
							className="pl-12 py-3 rounded-lg bg-[#F8F8F8] font-primary text-primaryGray outline-none w-full font-normal text-base"
							onInput={(e) => setConfirmPassword(e.target.value)}
						/>
					</div>
				</div>
				<div className="flex justify-end mb-4">
					<div className="font-primary text-xs text-primaryGray font-normal">
						<Link to="/login">Already have an account?</Link>
					</div>
				</div>
				<LargeButton text="Register" onClick={handleSubmit} />
			</div>
		</div>
	);
};

export default Register;
