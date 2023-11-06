import React from "react"

export interface NavLink {
    text: string
    link: string
}

export interface PhoneNumberFormatter {
    formatPhoneNumber(phoneNumber: string): string
}

export interface MapProps {
    address: string
    center: {
        lat: number
        lng: number
    }
    zoom: number
}

export interface ProgressBarProps {
    step: number
    setStep: (newStep: number) => void
}

export interface StudentInfoFormProps {
    formData: {
        fullName: string
        dob: string
        gradeLevel: string
        streetAddress: string
        city: string
        zipCode: string
        parentFullName: string
        parentEmail: string
        parentPhone: string
        studentPlan: string
        studentType: string
        service: string[]
        topProspectsInterest: string
        waiverAgreement: string
    }
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}


export interface WaiverDialogProps {
    close: () => void
    isOpen: boolean
}

export interface EnrollButtonProps {
    step: number
    setStep: (step: number) => void
}

export interface WaiverFormProps {
    formData: {
        fullName: string
        dob: string
        gradeLevel: string
        streetAddress: string
        city: string
        zipCode: string
        parentFullName: string
        parentEmail: string
        parentPhone: string
        studentPlan: string
        studentType: string
        service: string[]
        topProspectsInterest: string
        waiverAgreement: string
    }
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}


export interface StudentPlanFormProps {
    formData: {
        studentPlan: string
    }
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export interface AcademyCostInfo {
    studentType: string
    daysPerWeek: number
    cost: string
    financedDownPayment: string
    financedMonthlyPayment: string
    trainingTime: string
}

export interface AsideInformation {
    asideInformation: string[]
}