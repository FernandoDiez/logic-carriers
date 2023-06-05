'use client'
import { useState } from 'react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const [formValues, setFormValues] = useState(
    {
      username: 'leiva',
      password: 'logic'
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
    const response = await fetch(`http://carriers.logic.com/api/login?username=${formValues.username}&password=${formValues.password}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })

    const result = await response.json()
    if (result.data.length > 0) {
      router.push('https://gesprin.es')
    }
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