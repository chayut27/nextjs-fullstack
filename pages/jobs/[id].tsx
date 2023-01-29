import { JobsType } from '@/types/jobs'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'


function Profile() {
    const [data, setData] = useState<JobsType>({} as JobsType)
    const router = useRouter()
    const { id } = router.query
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        if (id) fetch('http://localhost:3000/api/jobs/' + id)
            .then((res) => res.json())
            .then((data) => {
                setData(data[0])
                setLoading(false)
            })
    }, [id])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.detail}</p>
        </div>
    )
}

export default Profile
