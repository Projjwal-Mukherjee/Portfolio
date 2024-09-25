//images
import Image from "../assets/DSC_0262-ai-brush-removebg-442kph9m-3.png";
//icons
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//varients
import { fadeIn } from "../Varients";
//link
import { Link } from "react-scroll";
const Banner = () => {
	return (
		<section
			className='min-h-[85vh] lg:min-h-[78vh] flex items-center'
			id='home'
		>
			<div className='container mx-auto'>
				<div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
					{/* image */}
					<motion.div
						variants={fadeIn("down", 0.5)}
						initial='hidden'
						whileInView={"show"}
						className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[480px] '
					>
						<img src={Image} alt='' />
					</motion.div>
					{/* text */}
					<div className='flex-1 text-center font-secondary lg:text-left'>
						<motion.h1
							variants={fadeIn("up", 0.3)}
							initial='hidden'
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className='text-[35px] font-bold leading-[0.8] lg:text-[100px]'
						>
							PROJJWAL <span>MUKHERJEE</span>
						</motion.h1>
						<motion.div
							variants={fadeIn("up", 0.4)}
							initial='hidden'
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className='mb-6 text-[25px] lg:text-[55px] font-secondary font-semibold uppercase leading-[1]'
						>
							<span className='text-white mr-4'>I am a</span>
							<TypeAnimation
								sequence={["Developer..", 2000, "Programmer..", 2000]}
								speed={50}
								className='text-accent'
								wrapper='span'
								repeat={Infinity}
							/>
						</motion.div>
						<motion.p
							variants={fadeIn("up", 0.5)}
							initial='hidden'
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className='mb-8 max-w-lg mx-auto lg:mx-0'
						>
							To seek a challenging career opportunity in a forward-thinking
							organization where I can apply my knowledge, enhance my skills,
							and contribute to both personal and organizational success.
						</motion.p>
						<motion.div
							variants={fadeIn("up", 0.6)}
							initial='hidden'
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
						>
							<Link to='contact' smooth={true}>
								<button className='btn btn-lg'>Contact me</button>
							</Link>

							<a href='#' className='text-gradient btn-link'>
								My Portfolio
							</a>
							{/* socials */}
							<div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
								<a href='https://www.linkedin.com/in/projjwal-mukherjee-324275296/'>
									<FaLinkedin />
								</a>
								<a href='https://www.instagram.com/__silent___guy__/'>
									<FaInstagram />
								</a>
								<a href='https://www.facebook.com/share/XKbp3Wvn88wpaqDw/?mibextid=qi2Omg'>
									<FaFacebook />
								</a>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Banner;
