export interface IExperienceSection {
    title: string;
    experiences: IExperience[];
}

export interface IExperience {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    details: string[];
    skills: string[];
}


export interface IProject{
    name: string;
    description: string;
    longDescription: string[];
    skills: string[];
    thumbnail: string;
    githubUrl?: string;
    liveUrl?: string;
    route: string;
}

export interface IProjectSection{
    projects: IProject[];
}

export interface IProjectDetails {
    project: IProject;
    isReverse: boolean;
}
