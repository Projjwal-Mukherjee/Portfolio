import React from "react";
//icons
import { BsArrowUpRight } from "react-icons/bs";
//motion
import { motion } from "framer-motion";
//varients
import { fadeIn } from "../Varients";
//link
import { Link } from "react-scroll";
//services data
const services = [
	{
		name: "Frontend Development",
		description:
			"Building interactive and responsive web experiences with modern frontend technologies like HTML, CSS, JavaScript, React, and Tailwind CSS.",
		link: "Learn more",
	},
	{
		name: "Backend Development",
		description:
			"Powering robust and scalable server-side solutions with technologies like Java Servlet, JDBC, MySQL, MongoDB, and Next.js.",
		link: "Learn more",
	},
];

const Sevices = () => {
	return (
		<section className='section' id='services'>
			<div className='contaner mx-auto'>
				<div className='flex flex-col lg:flex-row'>
					{/* text*/}
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial='hidden'
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className='flex-1  mb-12 lg:mb-0 '
					>
						<h2 className='h2 text-accent mb-6'>What I Do.</h2>
						<h3 className='h3 max-w-[455px] mb-16'>
							I'm a Freelance Full-Stack Developer with over 3 years of
							experience.
						</h3>
						<a href='https://www.linkedin.com/in/projjwal-mukherjee-324275296/recent-activity/all/'>
							<button className='btn btn-sm'>See my work</button>
						</a>
					</motion.div>
					{/* services */}
					<motion.div
						variants={fadeIn("left", 0.5)}
						initial='hidden'
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className='flex-1'
					>
						{/* service list */}
						<div>
							{services.map((service, index) => {
								//destructure service
								const { name, description, link } = service;
								return (
									<div
										className='border-b border-white/20 h-[146px] mb-[38px] flex'
										key={index}
									>
										<div className='max-w-[476px]'>
											<h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
												{name}
											</h4>
											<p className='font-secondary leading-tight'>
												{description}
											</p>
										</div>
										<div className='flex flex-col flex-1 items-end'>
											<Link
												to='projects'
												smooth={true}
												className='cursor-pointer  flex items-center justify-center btn w-9 h-9 mb-[42px] '
											>
												<BsArrowUpRight />
											</Link>
											<Link
												to='projects'
												smooth={true}
												className='cursor-pointer w[60px] h[60px] flex items-center justify-center text-gradient text-sm'
											>
												{link}
											</Link>
										</div>
									</div>
								);
							})}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Sevices;
