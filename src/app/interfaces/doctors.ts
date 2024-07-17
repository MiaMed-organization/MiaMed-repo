export interface Doctors {
    id?: string;
    name?: string;
    image?: string;
    availability?: string;
    title?:string;
    field?: string;
    icon?:string;
    location?: string;
    languages?: string;
    minPrice?: number;
    department?: string;
    maxPrice?:number;
    rating?: number;
    email?: string;
    feedback?: number;
    recommended?: number;
    services?: string;
    clinicImages: string[];
}
