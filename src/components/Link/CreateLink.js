import React from 'react'
import useFormValidation from '../Auth/useFormValidation'
import validateCreateLink from '../Auth/validateCreateLink'

const INITIAL_STATE = {
  description: '',
  url: ''
}

export default function CreateLink(props) {
  const { handleSubmit, handleChange, values, errors } = useFormValidation(
    INITIAL_STATE,
    validateCreateLink,
    handleCreateLink
  )

  function handleCreateLink() {
    console.log('Link created!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-column mt3">
      <input
        onChange={handleChange}
        value={values.description}
        name="description"
        placeholder="A description for your link"
        autoComplete="off"
        type="text"
        className={errors.description && 'error-input'}
      />
      {errors.description && <p className="error-text">{errors.description}</p>}
      <input
        onChange={handleChange}
        value={values.url}
        name="url"
        placeholder="The URL for the link"
        autoComplete="off"
        type="text"
        className={errors.url && 'error-input'}
      />
      {errors.url && <p className="error-text">{errors.url}</p>}
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  )
}
