export interface OpportunityModel {
    id: string;
    name: string;
    author: string;
    post_date: Date;
    description: string;
    requirements: string;
    tags: string[];
    link: string;
    location: string;
    duration: string;
    salary: string;
    application_deadline: Date;
    application_link: string;
    contact: string;
}