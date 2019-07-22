import React from 'react'
import InputMask from 'react-input-mask'
import { Input } from 'antd'

const CustomInput = props => (
  <InputMask
    {...props}
    disabled={false}
  >
    {inputProps => <Input {...inputProps} />}
  </InputMask>
)

export default CustomInput
