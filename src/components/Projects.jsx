import React from "react";
//motion
import { motion } from "framer-motion";
//varients
import { fadeIn } from "../Varients";
//image
import Img1 from "../assets/My_work_1.png";
import Img2 from "../assets/My_work_2.png";
const Projects = () => {
	return (
		<section className='section' id='projects'>
			<div className='container mx-auto'>
				<div className='flex flex-col lg:flex-row gap-x-10'>
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial='hidden'
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 '
					>
						{/* text */}
						<div>
							<h2 className='h2 leading-tight text-accent'>
								My Latest <br />
								work.
							</h2>
							<p className='max-w-sm mb-16 font-tertiary'>
								"Developed a Cristiano Ronaldo-themed e-commerce webpage and a
								dynamic to-do list application using HTML, CSS, and JavaScript.
								Both projects showcase interactive UI/UX elements and core web
								development skills, in first project enabling users to shop for
								CR7 merchandise and in second project manage tasks with features
								like adding, editing, and deleting."
							</p>
							<a href='https://www.linkedin.com/in/projjwal-mukherjee-324275296/recent-activity/all/'>
								<button className='btn btn-sm'>View all projects</button>
							</a>
						</div>
					</motion.div>
					<motion.div
						variants={fadeIn("left", 0.5)}
						initial='hidden'
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className='flex-1 flex flex-col gap-y-8'
					>
						{/* image */}
						<div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
							{/* overlay */}
							<div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
							{/* img */}
							<img
								className='group-hover:scale-125 transition-all duration-500'
								src={Img1}
								alt=''
							/>
							{/* pre-title */}
							<div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
								<span className='text-gradient'>Frontend development</span>
							</div>
							{/* title */}
							<div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
								<span className='text-3xl text-white'>CR7 Website</span>
							</div>
						</div>
						{/* image */}
						<div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
							{/* overlay */}
							<div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
							{/* img */}
							<img
								className='group-hover:scale-125 transition-all duration-500'
								src={Img2}
								alt=''
							/>
							{/* pre-title */}
							<div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
								<span className='text-gradient'>Frontend development</span>
							</div>
							{/* title */}
							<div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
								<span className='text-3xl text-white'>To-do List</span>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
