import { Box, Button, Step, StepLabel, Stepper, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { prev, skip } from "../redux/wizard"

export default function Wizard({ titles: [{ allowSkip = false, label = '', element = (<></>) }], allMostDone = false, onDone = () => { } }) {
    const activeStep = useSelector(s => s.wizard.step), skippeds = useSelector(s => s.wizard.skip), dispatch = useDispatch()
    const isStepSkipped = v => skippeds.containt(v)
    return <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
            {titles.map((v, i) => {
                const stepProps = {}, labelProps = {}
                if (v.allowSkip) labelProps.optional = <Typography variant='caption'>Optional</Typography>
                if (isStepSkipped(i)) stepProps.completed = false
                return <Step key={v.label} {...stepProps}>
                    <StepLabel {...labelProps}>{v.label}</StepLabel>
                </Step>
            })}
        </Stepper>
        <>
            {titles[activeStep].element}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button color="inherit" disabled={activeStep === 0 && 0 === skippeds.length} onClick={() => dispatch(prev())} sx={{ mr: 1 }}>Back</Button>
                <Box sx={{ flex: '1 1 auto' }} />
                {titles[activeStep].allowSkip && <Button color="inherit" onClick={() => dispatch(skip())} sx={{ mr: 1 }}>Skip</Button>}
                <Button>{activeStep === titles.length - 1 ? 'Finish' : 'Next'}</Button>
            </Box>
        </>
    </Box>
}