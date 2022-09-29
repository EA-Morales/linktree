import "./styles/App.css";

import portfolio from "@/assets/img/portfolio.png";
import github from "@/assets/img/github.png";
import linkedin from "@/assets/img/linkedin.png";
import background from "@/assets/img/background.jpg";
import avatar from "@/assets/img/avatar.jpg";

function App() {
	return (
		<div
			className='flex h-screen items-center justify-center bg-cover bg-center'
			style={{ backgroundImage: `url(${background})` }}>
			<div className='mt-10 flex h-5/6 w-2/3 min-w-[300px] max-w-sm flex-col items-center rounded-2xl'>
				<div className='flex w-full flex-col items-center'>
					<figure
						className='h-24 w-24 rounded-full border-2 border-gray-800 bg-cover bg-center p-5'
						style={{ backgroundImage: `url(${avatar})` }}
					/>
					<h1 className='text-primary my-2 text-center text-2xl'>@L3GOL4S</h1>
					<h2 className='text-center text-xl text-white'>FrontEnd Developer</h2>
					<div className='mt-10 flex w-full max-w-md flex-col items-center gap-3 md:max-w-md'>
						<a
							className='flex w-full items-center justify-center gap-4 rounded-3xl bg-white/10 py-2 px-4 shadow-sm backdrop-blur-sm duration-500 hover:scale-110 hover:transition hover:delay-75'
							href='https://agustinmorales-portfolio.vercel.app'
							rel='noreferrer'
							target={"_blank"}>
							<img alt='' className='mr-auto h-4' src={portfolio} />

							<p className='mr-auto text-center text-xl text-white'>
								Portfolio
							</p>
						</a>
						<a
							className='flex w-full items-center justify-center gap-4 rounded-3xl bg-white/10 py-2 px-4 shadow-sm backdrop-blur-sm duration-500 hover:scale-110 hover:transition hover:delay-75'
							href='https://github.com/EA-Morales'
							rel='noreferrer'
							target={"_blank"}>
							<img alt='' className='mr-auto h-7' src={github} />
							<p className='mr-auto text-center text-xl text-white'>Github</p>
						</a>
						<a
							className='flex w-full items-center justify-center gap-4 rounded-3xl bg-white/10 py-2 px-4 shadow-sm backdrop-blur-sm duration-500 hover:scale-110 hover:transition hover:delay-75'
							href='https://www.linkedin.com/in/eduardo-agustin-morales'
							rel='noreferrer'
							target={"_blank"}>
							<img alt='' className='mr-auto h-7' src={linkedin} />
							<p className='mr-auto text-center text-xl text-white'>Linkedin</p>
						</a>
					</div>
				</div>
			</div>
			<footer className='text-primary absolute bottom-0 left-0 h-min w-full bg-white/10 py-2 text-center text-sm font-bold backdrop-blur-sm'>
				Made with love ❤️ Agustin Morales
			</footer>
		</div>
	);
}

export default App;
