const AlumniSkills = ({ skills }: { skills: string[] }) => {
	return (
		<div className="mt-4">
			<p className="pointer-events-none mt-2 block truncate text-2xl font-medium text-gray-900">Skills</p>
			<p className="pointer-events-none mt-2 block text-xl font-medium text-gray-900">
				{skills.map((skill, index) => (
					<span
						key={index}
						className="mr-2"
					>
						{skill} |
					</span>
				))}
			</p>
		</div>
	)
}

export default AlumniSkills 
