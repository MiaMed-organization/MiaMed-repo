export interface Doctors {
    id?: string;
    name?: string;
    image?: string;
    availability?: string;
    title?: string;
    field?: string;
    icon?: string;
    consultationFee?:number;
    location?: string;
    hospital?: string; 
    languages?: string[];
    minPrice?: number;
    department?: string;
    maxPrice?: number;
    availableDay?: string;
    availableTime?: string; 
    rating?: number;
    email?: string;
    bio?:string;
    experience?: number;
    consultation?: { type: string; icon: string }[];
    feedback?: number;
    recommended?: number;
    services?: string[]; 
    bookedAppointment?: number; 
    clinicImages: string[];
    practiceExperience?: {  
        img: string[];
        hospital: string[];
        timePeriod: string[];
        total: string[];
        experiencedIn: string[];
    }[];
}
