export default function setFileToParseOnState(file, fileName) {
  return {
    type: 'SET_FILE_TO_PARSE_ON_STATE',
    payload: {
      file, fileName
    }
  }
}
