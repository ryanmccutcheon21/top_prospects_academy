import { PhoneNumberFormatter } from "@/types";


export const formatPhoneNumber: PhoneNumberFormatter = {
    formatPhoneNumber(phoneNumber: string): string {
        const numericPhoneNumber = phoneNumber.replace(/\D/g, '')

        if (numericPhoneNumber.length >= 10) {
            return `${numericPhoneNumber.substring(0, 3)}-${numericPhoneNumber.substring(3, 6)}-${numericPhoneNumber.substring(6)}`
        } else {
            return numericPhoneNumber
        }
    },
}



export const formatDate = (dob: string) => {
    // Parse the input date as UTC to avoid time zone issues
    const date = new Date(dob + "T00:00:00Z")
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const day: number = date.getUTCDate()
    const month = months[date.getUTCMonth()]
    const year = date.getUTCFullYear()

    const suffix = (day: number) => {
        if (day >= 11 && day <= 13) {
            return 'th'
        }
        switch (day % 10) {
            case 1:
                return 'st'
            case 2:
                return 'nd'
            case 3:
                return 'rd'
            default:
                return 'th'
        }
    };

    return `${month} ${day}${suffix(day)}, ${year}`
}
