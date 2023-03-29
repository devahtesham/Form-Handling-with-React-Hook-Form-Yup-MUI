
import { FormControl, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import ErrorMessage from './ErrorMessage'
import { addErrorIntoFields } from './utils/utils'

const SelectFields = ({label,control,name,errors}) => {
    const COUNTRIES = ["None","Country 01","Country 02","Country 03","Country 04","Country 05","Country 06"]
  return (
    <FormControl fullWidth sx={{mb:"1rem"}}>
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
            <TextField
                required
                select
                label={label}
                variant="outlined"
                {...addErrorIntoFields(errors[name])}
                {...field}
            >
                {
                    COUNTRIES.map((country,index)=> <MenuItem value={country} key={index}>{country}</MenuItem>)
                }
                
            </TextField>
        )}
      />
        {
            errors[name] ? <ErrorMessage message={errors[name].message} /> : null
        }
    </FormControl>
  )
}

export default SelectFields