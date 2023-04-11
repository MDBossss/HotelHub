import React from 'react'

interface Props{
    steps: {label?:string}[],
    currentStep: number,
    onStepClick?: (index:number) => void
}

const Stepper = ({steps,currentStep,onStepClick}:Props) => {


  const handleClick = (index:number) => {
    if(onStepClick){
      onStepClick(index);
    }
  }

  return (
    <div className="stepper">
        {steps?.map((step,index) => {
          if(index !== steps.length - 1){
            return (
              <React.Fragment key={`fragment-${index}`}>
                <div 
                  key={`step-${index}`} 
                  className={`step ${index+1 <= currentStep ? "step-done" : ""}`} 
                  onClick={() => handleClick(index+1)}
                >{index+1}</div>
                
                <div 
                  key={`connector-${index}`} 
                  className="connector"
                ></div>
              </React.Fragment>
            )
          }
          else{
            return (
              <div 
                key={`step-${index}`} 
                className={`step ${index+1 <= currentStep ? "step-done" : ""}`}
                onClick={() => handleClick(index+1)}
              >{index+1}</div>
            )
          }
        })}
    </div>
  )
}

export default Stepper