import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import ErrorMessage from './ErrorMessage'
import { addErrorIntoFields } from './utils/utils'

const CheckBoxComp = ({label,name,control,errors}) => {
  return (
<>
   <FormGroup>
        <Controller
            name={name}
            control={control}
            render={({ field }) => <FormControlLabel {...field} control={<Checkbox />} label={label} required {...addErrorIntoFields(errors[name])} />}
      />
        {
            errors[name] ? <ErrorMessage message={errors[name].message} /> : null
        }
    </FormGroup>
    
    </>
  )
}

export default CheckBoxComp