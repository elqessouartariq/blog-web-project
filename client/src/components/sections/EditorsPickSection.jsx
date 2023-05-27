import PropTypes from 'prop-types';

const EditorsPickSection = ({ children }) => {
	return (
		<section className="mt-10 flex-col justify-center lg:mx-32">
			<div className="w-full mb-16">
				<div className="flex items-center justify-center h-full">
					<div className="text-center flex flex-col items-center">
						<h1 className="text-5xl font-bold font-primary">
							Editor Pick
						</h1>
						<span className="mt-2">
							<img src="/src/assets/line.svg" />
						</span>
					</div>
				</div>
			</div>
			{children}
		</section>
	);
};

EditorsPickSection.propTypes = {
	children: PropTypes.node.isRequired,
};

export default EditorsPickSection;
