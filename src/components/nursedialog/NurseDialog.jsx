import React from 'react'
import "./nursedialog.css"
import CheckSession from '../../helpers/CheckSession'

const NurseDialog = () => {
  const {lab_name,lab_id,access_token} = CheckSession()
  return (
    <div>
      <h2>Nurse Dialog</h2>
    </div>
  )
}

export default NurseDialog
