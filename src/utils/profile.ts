import profileData from "../content/profile.json";

export interface PersonalData {
	firstName: string;
	lastName: string;
	title: string;
	email: string;
	phone: string;
	linkedin: string;
	portfolio: string;
	resume: string;
	state: string;
	location: {
		city: string;
		country: string;
	};
}

export interface Experience {
	jobTitle: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologiesUsed: string[];
}

export interface Project {
	name: string;
	description: string;
	url: string;
	image: string;
	technologies: string[];
}

export interface Education {
	institution: string;
	degree: string;
	fieldOfStudy: string | null;
	startDate: string;
	endDate: string;
	grade: string | null;
	description: string | null;
}

export interface Profile {
	uuid: string;
	personalData: PersonalData;
	experiences: Experience[];
	projects: Project[];
	researchWork: any[];
	achievements: any[];
	education: Education[];
	extractedKeywords: string[];
}

export function getProfile(): Profile {
	return profileData as Profile;
}

export function getPersonalData(): PersonalData {
	return profileData.personalData as PersonalData;
}

export function getExperiences(): Experience[] {
	return profileData.experiences as Experience[];
}

export function getProjects(): Project[] {
	return profileData.projects as Project[];
}

export function getEducation(): Education[] {
	return profileData.education as Education[];
}

export function getKeywords(): string[] {
	return profileData.extractedKeywords as string[];
}
