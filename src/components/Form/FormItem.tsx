// libs
import React from 'react'
import {
  Controller,
  useForm,
  ControllerRenderProps,
  FieldValues,
  ControllerFieldState,
  UseFormStateReturn
} from 'react-hook-form'

interface ControllerProps {
  field: ControllerRenderProps<FieldValues, any>
  fieldState: ControllerFieldState
  formState: UseFormStateReturn<FieldValues>
}

type ItemProps = {
  fieldName: any
  children: (props: ControllerProps) => JSX.Element
}

const FormItem: React.FC<ItemProps> = (props: ItemProps) => {
  const { control } = useForm()

  const { fieldName, children } = props

  return <Controller control={control} name={fieldName} render={children} />
}

export default FormItem
