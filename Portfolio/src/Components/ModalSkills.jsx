import ProgressBar from 'react-progressbar';

const ProgrammingSkills = [
  { lang: 'HTML', progress: 90 },
  { lang: 'CSS', progress: 80 },
  { lang: 'JavaScript', progress: 50 },
  { lang: 'React', progress: 40 },
  { lang: 'Tailwind CSS', progress: 50 }
];

const ModalSkills = () => {
  return (
    <div className='mb-3'>
      {ProgrammingSkills.map(skill => (
        <div key={skill.lang}>
          <div className="flex justify-between mb-2 text-gray-400">
            <p>{skill.lang}</p>
            <p>{`${skill.progress}%`}</p>
          </div>
          <ProgressBar
            completed={skill.progress}
            height="5px"
            className="bg-gray-400 mb-1"
            color="#7e22ce"
          />
        </div>
      ))}
    </div>
  );
};

export default ModalSkills;
