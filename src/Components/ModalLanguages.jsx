const languageSkills = [
{ lang: 'English', level: 'A2' },
{ lang: 'Ukranian', level: 'C2' },
{ lang: 'Russian', level: 'C2' }
];

const ModalLanguages = () => {
return (
<div className="flex gap-14">
    {languageSkills.map(skill => (
    <div key={skill.lang} className="flex flex-col items-center gap-2 mb-10">
        <div
            className="w-[120px] h-[120px] rounded-full border-2 border-purple-700 flex justify-center items-center text-gray-400 font-semibold">
            {skill.level}</div>
        <p className='text-gray-400'>{skill.lang}</p>
    </div>
    ))}
</div>
);
}

export default ModalLanguages;