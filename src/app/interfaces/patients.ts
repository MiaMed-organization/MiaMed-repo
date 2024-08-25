export interface Patients {
    id?: string;
    appointmentId?: string;
    name?: string;
    image?: string;
    appointmentDate?: string;
    appointmentTime?: string;
    location?: string;
    patientId?: string;
    totalFee?: number;
    paidDate?: string;
    email?: string;
    phoneNumber?: string;
    callingType?: string;
    visitType?: string;
    bookingFee?:number;
    appointmentType?: string;
    clinicLocation?: string;
    rating?: number; 
    comment?: string; 
    commentDate?: string; 
    isRecommend?: boolean; 
    consultingFee?: { type: string; price: number };
    paymentMethod?: { type: string; lastDigits: number ;bank :string};
}
