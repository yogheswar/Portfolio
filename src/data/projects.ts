export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  image?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'alumni-management',
    number: '01',
    title: 'Alumni Management System',
    category: 'Web Development',
    description: 'A web application built to bridge the gap between alumni and students. It enables professional networking, mentorship opportunities, and facilitates college department updates.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/Vaishnav-188/INFRA-INNOVATORS.git'
  },
  {
    id: 'dementia-screening',
    number: '02',
    title: 'Dementia Screening System',
    category: 'AI & Healthcare',
    description: 'A diagnostic screening application powered by machine learning that analyzes speech patterns and basic cognitive responses to identify early indicators of dementia.',
    technologies: ['Python', 'Flask', 'Machine Learning', 'HTML/CSS'],
    github: 'https://github.com/yasinmass/demintia-screening-system.git'
  },
  {
    id: 'aws-webserver-backups',
    number: '03',
    title: 'Automated AWS Web Server Backups',
    category: 'AWS Cloud',
    description: 'Deployed an Apache web server on EC2 with automated daily snapshot creation and pruning. The solution leverages AWS Lambda functions, IAM roles, and CloudWatch events.',
    technologies: ['EC2', 'Lambda', 'CloudWatch', 'Python', 'IAM'],
    github: 'https://github.com/yogheswar/Web-Server-with-automated-backups-.git'
  },
  {
    id: 'three-tier-infra',
    number: '04',
    title: 'Three-Tier Cloud Infrastructure',
    category: 'Cloud Infrastructure',
    description: 'Designed and launched a secure production-grade AWS VPC three-tier infrastructure. Segregated resources into public web layers, private application layers, and database subnets.',
    technologies: ['VPC', 'RDS', 'Route 53', 'Security Groups'],
    github: 'https://github.com/yogheswar/Three-Tier-Infra.git'
  }
];
