import React from 'react'
import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
    Box
} from '@chakra-ui/react'

const steps = [
    { title: 'Student Info', description: 'Contact Info' },
    { title: 'Waiver', description: 'Waiver Information' },
    { title: 'Student Plan', description: 'Select a plan' },
]

const ChakraProgressBar = () => {
    const { activeStep, setActiveStep } = useSteps({
        index: 1,
        count: steps.length,
    })

    return (
        <Stepper
            index={activeStep}
            colorScheme='primary'
        >
            {steps.map((step, index) => (
                <Step key={index} onClick={() => setActiveStep(index)}>
                    <StepIndicator>
                        <StepStatus
                            complete={<StepIcon />}
                            incomplete={<StepNumber />}
                            active={<StepNumber />}
                        />
                    </StepIndicator>

                    <Box flexShrink='0'>
                        <StepTitle>{step.title}</StepTitle>
                        <StepDescription>{step.description}</StepDescription>
                    </Box>

                    <StepSeparator />
                </Step>
            ))}
        </Stepper>
    )
}

// render(<Example />)

export default ChakraProgressBar