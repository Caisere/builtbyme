import { ProjectType, StatsType } from "@/app/types"
import {EyeIcon, RocketIcon, UserIcon } from "lucide-react";

export const featuredProjects:ProjectType[] = [
  {
    id: 1,
    name: 'Project Alpha',
    description: 'An innovative platform for collaborative work.',
    link: 'https://example.com/project-alpha',
    tags: ['Collaboration', 'Productivity'],
    votes: 120,
    isFeatured: true,
  },
  {
    id: 2,
    name: 'DevTrack',
    description: 'A smart tool for tracking development progress and tasks.',
    link: 'https://example.com/devtrack',
    tags: ['Development', 'Task Management'],
    votes: 95,
    isFeatured: false,
  },
  {
    id: 3,
    name: 'DesignFlow',
    description: 'A seamless workflow tool for designers and creative teams.',
    link: 'https://example.com/designflow',
    tags: ['Design', 'Workflow'],
    votes: 150,
    isFeatured: true,
  },
  {
    id: 4,
    name: 'LaunchPad',
    description: 'A platform to showcase and launch new startup ideas.',
    link: 'https://example.com/launchpad',
    tags: ['Startup', 'Showcase'],
    votes: 80,
    isFeatured: true,
  },
  {
    id: 5,
    name: 'CodeSprint',
    description: 'A focused environment for developers to build and ship faster.',
    link: 'https://example.com/codesprint',
    tags: ['Coding', 'Productivity'],
    votes: 110,
    isFeatured: true,
  },
  {
    id: 6,
    name: 'IdeaNest',
    description: 'A hub where creators organize, refine, and grow their ideas.',
    link: 'https://example.com/ideanest',
    tags: ['Creativity', 'Ideas'],
    votes: 130,
    isFeatured: true,
  }
]


export const recentlyLaunchedProjects:ProjectType[] = [
  //   {
  //   id: 1,
  //   name: 'DesignFlow',
  //   description: 'A seamless workflow tool for designers and creative teams.',
  //   link: 'https://example.com/designflow',
  //   tags: ['Design', 'Workflow'],
  //   votes: 150,
  //   isFeatured: true,
  // },
  //   {
  //   id: 2,
  //   name: 'IdeaNest',
  //   description: 'A hub where creators organize, refine, and grow their ideas.',
  //   link: 'https://example.com/ideanest',
  //   tags: ['Creativity', 'Ideas'],
  //   votes: 130,
  //   isFeatured: true,
  // },
  //   {
  //   id: 3,
  //   name: 'Project Alpha',
  //   description: 'An innovative platform for collaborative work.',
  //   link: 'https://example.com/project-alpha',
  //   tags: ['Collaboration', 'Productivity'],
  //   votes: 120,
  //   isFeatured: true,
  // }
]





export const statsData: StatsType[] =[
  {
    icon: RocketIcon,
    value: "2.5K+",
    label: "Projects Shared"
  },
  {
    icon: UserIcon,
    value: "10K+",
    label: 'Active Creators',
    hasBorder: true
  },
  {
    icon: EyeIcon,
    value: '50K+',
    label: 'Monthly Visitors'
  }

]
