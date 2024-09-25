import React from "react";
//countup
import CountUp from "react-countup";
//intersection observer hook
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//varient
import { fadeIn } from "../Varients";
//link
import { Link } from "react-scroll";
const AboutUs = () => {
	const [ref, inView] = useInView({ threshold: 0.5 });
	return (
		<section className='section' id='about' ref={ref}>
			<div className='container mx-auto items-center'>
				<div className='flex flex-col lg:gap-x-20 lg:gap-y-0  '>
					{/* image */}
					{/* <div className='flex-1  '>img</div> */}
					{/* text */}
					<div className='flex-1 '>
						<motion.h2
							variants={fadeIn("right", 0.3)}
							initial='hidden'
							whileInView={"show"}
							viewport={{ once: false, amount: 0.3 }}
							className='h2 text-accent'
						>
							About me.
						</motion.h2>
						<motion.h3
							variants={fadeIn("right", 0.3)}
							initial='hidden'
							whileInView={"show"}
							viewport={{ once: false, amount: 0.3 }}
							className='h3 mb-4'
						>
							I'm a Freelance Full-Stack Developer with over 3 years of
							experience.
						</motion.h3>
						<motion.p
							variants={fadeIn("in", 0.9)}
							initial='hidden'
							whileInView={"show"}
							viewport={{ once: false, amount: 0.3 }}
							className='mb-6'
						>
							I'm Passionate about continuous learning in my computer science
							journey. Exploring both front-end and back-end web technologies,
							and always pushing beyond limits to grow and learn something new.
						</motion.p>
						{/* stats */}
						<motion.div
							variants={fadeIn("left", 0.3)}
							initial='hidden'
							whileInView={"show"}
							viewport={{ once: false, amount: 0.3 }}
							className='flex gap-x-6 lg:gap-x-10 mb-12'
						>
							<div>
								<div className='font-tertiary text-[40px] text-gradient mb-2'>
									{inView ? <CountUp start={100} end={3} duration={5} /> : null}
								</div>
								<div className='font-primary text-md tracking-[2px]'>
									Years of Experience
									<br />
									<h2 className='text-xl'>in Web Development</h2>
								</div>
							</div>
							<div>
								<div className='font-tertiary text-[40px] text-gradient mb-2'>
									{inView ? (
										<CountUp start={100} end={15} duration={5} />
									) : null}
								</div>
								<div className='font-primary text-md tracking-[2px]'>
									Projects
									<br />
									<h2 className='text-xl'>Completed</h2>
								</div>
							</div>
							<div>
								<div className='font-tertiary text-[40px] text-gradient mb-2'>
									{inView ? <CountUp start={100} end={9} duration={3} /> : null}
									-
									{inView ? (
										<CountUp start={100} end={12} duration={5} />
									) : null}
								</div>
								<div className='font-primary text-md tracking-[2px]'>
									Satisfied
									<br />
									Clients
								</div>
							</div>
						</motion.div>
						<motion.div
							variants={fadeIn("up", 0.3)}
							initial='hidden'
							whileInView={"show"}
							viewport={{ once: false, amount: 0.3 }}
							className='flex gap-x-8 items-center'
						>
							<Link
								to='contact'
								smooth={true}
								className='cursor-pointer  flex items-center justify-center  '
							>
								<button className='btn btn-lg'>Contact me</button>
							</Link>
							<a href='#' className='text-gradient'>
								My Portfolio
							</a>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
