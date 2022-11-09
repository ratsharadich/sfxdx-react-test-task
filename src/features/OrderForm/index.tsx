import React, { FC, useCallback, useRef, useState } from 'react'
import { getOrders } from 'src/shared'

import { InputsBlock, Output, SubmitButton } from './ui'

/** Форма заполнения для публикации order */
export const OrderForm: FC = () => {
  const [isSubmitButtonActive, setSubmitButtonActive] =
    useState<boolean>(false)

  const handleChangeSubmitButtonActive = useCallback((status: boolean) => {
    setSubmitButtonActive(status)
  }, [])

  const outputRef = useRef<HTMLOutputElement>(null)

  const handleFormInput = useCallback(() => {
    if (outputRef.current != null) {
      console.log(outputRef.current)
      outputRef.current.value = '123'
    }
  }, [])

  const handleFormSubmit = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    if (outputRef.current != null) {
      console.log(outputRef.current)
      outputRef.current.value = '123'
    }
  }, [])

  return (
    <form
      name="orderForm"
      action={getOrders}
      method="GET"
      className="flex flex-col gap-y-[2.5rem] z-10"
      onInput={handleFormInput}
    >
      <div className="grid md:grid-cols-[5fr_3fr] max-md:grid-cols-1 gap-x-[1.25rem] gap-y-2">
        <InputsBlock onChange={handleChangeSubmitButtonActive} />

        <Output innerRef={outputRef} />
      </div>

      <SubmitButton onClick={handleFormSubmit} active={isSubmitButtonActive} />
    </form>
  )
}
