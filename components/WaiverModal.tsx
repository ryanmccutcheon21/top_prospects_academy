'use client'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
} from '@chakra-ui/react';
import '@fontsource/open-sans';

const WaiverModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button
                onClick={onOpen}
                className='bg-primary1 font-button-text font-extrabold mt-5 mb-2 px-3 py-1 hover:opacity-80 rounded-md'
                fontSize='5xl'
                fontWeight='extrabold'
                sx={{ fontSize: '0.75rem' }}
                colorScheme='primary'
                _hover={{ opacity: '80%' }}
                fontStyle={{ fontFamily: 'Open Sans' }}
                textColor='black'
            >
                Terms &amp; Conditions
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent className='max-w-[50%] mx-auto bg-white text-black px-5 mt-28 py-2'>
                    <ModalHeader>Terms &amp; Conditions</ModalHeader>
                    {/* <ModalCloseButton className='ml-auto bg-primary1 p-2 rounded-lg hover:opacity-80' /> */}
                    <ModalBody
                        overflowY="auto"
                        maxHeight="60vh"
                        className='my-5'
                    >
                        I hereby acknowledge and agree that the use of Top Prospects Practice Facility ("Facility"), including but not limited to the use of Facility, equipment, and/or the batting cages (hereinafter "Activity) has inherent risks. In consideration of the services provided by Top Prospects Practice Facility/Top Prospects Academy and its members, officers, agents, consultants, trainers, contracted and non-contracted employees and all persons or entities acting in any capacity on their behalf (hereinafter referred to collectively as "Top Prospects") <br />
                        1. I acknowledge and fully understand that the above mentioned Participant(s) will be engaging in activities that may involve risk of serious or permanent injury or death which might result not only from the Participant's own actions, inactions, or negligence, but from the actions, inactions, or negligence of others, the conditions of the premises, or the inherent danger of batting cages. Further, I acknowledge that there may be other risks not known or not reasonably foreseeable at this time, including but are not limited to: latent or apparent defects in Top Prospects equipment or facilities; the act of other members or Top Prospects; the Participant's physical condition; the failure to follow the applicable rules; and the provision of emergency treatment or services. <br />
                        2. I expressly agree and promise to accept full responsibility for, and to assume all the risks associated, with this Activity. My child’s participation in this Activity is purely voluntary and I elect, in spite of the risks, to allow him/her to Participate. I assume all the foregoing risks and accept personal responsibility for any damages that result from any injury or property damage. <br />
                        3 I agree to indemnify, defend and hold harmless the Facility from any loss, damage, or injury which may result from the Participant's use of, or any activities at the Facility. I further agree to release, acquit, waive, and discharge the Facility of any form, and covenant not to sue the Facility for, any and all actions, claims demands, or cause of action, of any nature, arising from or related to any damage, loss, or injury incurred on or to the Participant as a result of the Activity, or the use of or activities at, the Facility. This release of liability and indemnity applies to the Participant, the undersigned, if different from the Participant, as well as any of their personal representatives, assigns, heirs, or next of kin. The release of liability and indemnity applies equally to losses, damages, or injuries caused or alleged to be caused: (a) solely by the negligence of the Facility; or (b) in part by the negligence of the Facility. <br />
                        4. I hereby certify that I have adequate insurance to cover any injury or damage the Participant may cause or suffer while participating in the Activity or, alternatively, I agree to be personally liable for such injury or damage. I further certify that the Participant has no medical or physical conditions, which could interfere with his/her safety in this Activity and that I am willing to assume all the risk that may be created, directly or indirectly, by such known or unknown condition. <br />
                        5. I hereby certify that I am at least 18 years old, or the parent/legal guardian of the Participant under the age of 18 and agree that the Participant will wear a batting helmet at all times while in the batting cages and that I have read the posted Policies &amp; Rules for Facilities use and will adhere to them. I hereby provide the Facility permission to administer basic first aid and I authorize the Facility to contact 911 or other emergency personnel, as needed. <br />
                        6. I agree to supervise any children that are under the age of 18 years old and are either placed under my supervision at the time or are with me but may just be spectators and understand that they are my responsibility. <br />
                        7. I do hereby give the Facility, its assigns, licensees, and legal representatives the irrevocable right to use photographs or video in all forms and media and in all manners, including composite, for advertising or marketing for publication or any other lawful purposes, and I waive any right to inspect or approve the finished product, including written copy, internet, etc., which may be created in connection therewith." <br />
                        "By signing this Waiver of Liability and Release, I acknowledge that if anyone is hurt, or property is damaged as part of, or in conjunction with, this Activity a court of law may find me to have waived my right to maintain a lawsuit against the Facility for any claim from which I have released it herein. <br /><br />
                        I ATTEST THAT I AM THE LEGAL GUARDIAN OF THE ABOVE MENTIONED STUDENT. I HAVE HAD SUFFICIENT OPPORTUNITY TO READ THE ENTIRE DOCUMENT. I HAVE READ AND UNDERSTAND IT AND AGREE TO BE BOUND BY ITS TERMS. I UNDERSTAND THAT I MAY REQUEST A PRINTED DOCUMENT TO SIGN.  TYPING MY NAME  BELOW WILL BE CONSIDERED MY OFFICIAL LEGAL SIGNATURE
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            colorScheme='primary'
                            color='black'
                            className='bg-primary1 hover:opacity-80 text-black font-button-text  py-1 px-3 rounded-lg'
                            fontStyle={{ fontFamily: 'Open Sans' }}
                            mr={3}
                            onClick={onClose}
                        >
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default WaiverModal;
