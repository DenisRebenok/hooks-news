export default function validateCreateLink({ description, url }) {
  let errors = {}

  // Description Errors
  if (!description) {
    errors.description = 'Description required'
  } else if (description.length < 10) {
    errors.description = 'Description must be at least 10 characters'
  }

  // Url Errors
  if (!url) {
    errors.url = 'URL required'
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(url)) {
    errors.url = 'URL must be valid'
  }

  return errors
}
