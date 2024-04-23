export type animation = 'fallFromAbove1' | 'fallFromAbove2';

interface ISkills {
  name: string;
  animation: animation;
}

const SKILLS: ISkills[] = [
  { name: 'HTML', animation: 'fallFromAbove1' },
  { name: 'CSS', animation: 'fallFromAbove2' },
  { name: 'SCSS', animation: 'fallFromAbove2' },
  { name: 'JSS', animation: 'fallFromAbove2' },
  { name: 'Bootstrap', animation: 'fallFromAbove2' },
  { name: 'Ant-Design', animation: 'fallFromAbove2' },
  { name: 'JavaScript', animation: 'fallFromAbove2' },
  { name: 'TypeScript', animation: 'fallFromAbove2' },
  { name: 'React', animation: 'fallFromAbove2' },
  { name: 'Redux / Toolkit', animation: 'fallFromAbove2' },
  { name: 'Next.js', animation: 'fallFromAbove2' },
  { name: 'OOP', animation: 'fallFromAbove2' },
  { name: 'Git', animation: 'fallFromAbove2' },
  { name: 'SQL', animation: 'fallFromAbove2' },
  { name: 'MySQL', animation: 'fallFromAbove2' },
  { name: 'MongoDB', animation: 'fallFromAbove2' },
  { name: 'Adobe Photoshop', animation: 'fallFromAbove2' },
  { name: 'CorelDraw', animation: 'fallFromAbove2' },
  { name: 'Figma', animation: 'fallFromAbove2' },
  { name: 'Autocad', animation: 'fallFromAbove2' },
];

export default SKILLS;
