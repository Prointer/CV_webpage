// Placeholder Icon for sample data - replace with actual SVGs or react-icons
export const PlaceholderSkillIcon: React.FC<{ bgColor?: string, icon?:React.ReactNode }> = ({
	bgColor = "bg-brand",
	icon = "S",
}) => (
	<div
		className={`w-full h-full ${bgColor} rounded-md flex items-center justify-center text-white font-bold text-xl p-1`}
	>
		{icon}
	</div>
);