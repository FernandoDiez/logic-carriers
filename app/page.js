'use client'
import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [formValues, setFormValues] = useState(
    {
      userName: '',
      password: ''
    }
  )


  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    const newValues = { ...formValues, [name]: value }
    setFormValues(newValues)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // const JSONdata = JSON.stringify(formValues)
    const response = await fetch('http://carriers.logistics.com/api/login', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
      // body: JSONdata
    })

    const result = await response.json()
    console.log(result)
  }

  return (
    <main className={styles.main}>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="userName" id="userName" value={formValues.username} onChange={handleChange} />
          <input type="password" name="password" id="password" vaue={formValues.password} onChange={handleChange} autoComplete='off' />
          <input type="submit" vaue="submit" />
        </form>
      </div>
    </main>
  )
}