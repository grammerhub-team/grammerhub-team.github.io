import AlumniCardList from "../_components/alumni/AlumniCardList"
const data = [
	{
		_id: "1",
		image: "/images/w_prof_img.jpeg",
		first: "Jane",
		last: "Doe",
		title: "Software Engineer",
		about: `
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		`,
		skills: ["Javascript", "Typescript", "React", "Express", "MongoDB", "Material Ui"],
		portfolioLink: "https://dbibien.dev",
	},
	{
		_id: "2",
		image: "/images/m_prof_img.jpeg",
		first: "John",
		last: "Doey",
		title: "Software Engineer",
		about: `
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		`,
		skills: ["Javascript", "Typescript", "React", "Express", "MongoDB", "Material Ui"],
		portfolioLink: "https://dbibien.dev",
	},
	{
		_id: "3",
		image: "/images/w_prof_img.jpeg",
		first: "Alicia Junior",
		last: "The Third",
		title: "Software Engineer",
		about: `
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		`,
		skills: ["Javascript", "Typescript", "React", "Express", "MongoDB", "Material Ui"],
		portfolioLink: "https://dbibien.dev",
	},
]

const Alumni = () => {
	return (
		<div className='container mx-auto max-w-7xl  px-4 py-12'>
			<h2 className='text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>Grammers Alumni</h2>

			<AlumniCardList data={data} />
		</div>
	)
}

export default Alumni
