export interface SkillCategory {
  category: string;
  technologies: string[];
}

export const PORTFOLIO_DATA = {
  name: 'Yogheswar',
  label: 'CLOUD / DEVOPS / FULL-STACK',
  headline: "Hi, I'm\nYogheswar",
  supportingStatement: "Building reliable software and learning to engineer for the cloud.",
  description: "I'm an Information Technology undergraduate focused on building clean web applications, designing reliable cloud infrastructure, and automating deployment workflows on AWS.",
  profileImage: '/images/profile.png',
  stats: [
    { number: '4+', label: 'Projects Build' },
    { number: '8+', label: 'Hackathons & Events' },
    { number: 'AWS', label: 'Cloud Focused' }
  ],
  bio: "I am Yogheswar, an Information Technology undergraduate at KGISL Institute of Technology with a strong interest in building scalable software solutions and cloud-native applications. I enjoy developing full-stack web applications while exploring cloud computing, DevOps, containerization, and system design to create reliable and efficient systems. I actively participate in hackathons and hands-on projects, continuously learning modern technologies such as AWS, Docker, Git, Linux, Django, React, and MySQL. My goal is to contribute to impactful software products by combining problem-solving, automation, and continuous learning.",
  education: {
    institution: 'KGISL Institute of Technology',
    degree: 'Bachelor of Information Technology',
    expectedGraduation: '2028',
    careerGoal: 'To excel as a Cloud & DevOps Engineer, deploying scalable, secure architectures on AWS and automating operational workflows for production systems.',
  },
  skills: [
    {
      category: 'Frontend Development',
      technologies: ['React.js', 'HTML5 & CSS3', 'Tailwind CSS']
    },
    {
      category: 'Backend & Database',
      technologies: ['Python (Django)', 'PHP', 'MySQL', 'MongoDB']
    },
    {
      category: 'Cloud & DevOps',
      technologies: ['Amazon Web Services', 'Infrastructure as Code (CloudFormation)', 'Docker Containerization', 'Linux System Administration']
    },
    {
      category: 'Tools & Frameworks',
      technologies: ['Git & GitHub', 'AWS EC2 VMs', 'AI Assisted Development']
    }
  ] as SkillCategory[],
  contact: {
    email: 'yogheswarthangapandian@gmail.com',
    phone: '+91 9994463950',
    location: 'Coimbatore, India',
    github: 'https://github.com/yogheswar'
  }
};
