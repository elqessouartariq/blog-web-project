import LargeButton from '../components/shared/LargeButton';
const Login = () => {
	return (
		<>
			<div className="flex justify-center items-center h-screen">
				<form className="w-full max-w-[23rem]">
					<h1 className="font-heading text-3xl text-primaryBlack font-bold mb-3">
						Welcome back!
					</h1>
					<p className="font-primary text-primaryBlack font-normal text-base mb-3">
						Sign in to get the most out of nuntium.
					</p>
					<div className="mb-3">
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
					<LargeButton text="Login" />
				</form>
			</div>
		</>
	);
};

export default Login;
