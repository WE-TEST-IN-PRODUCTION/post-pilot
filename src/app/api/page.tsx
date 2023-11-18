'use client'

export default function ApiPage(){

    const handleButton = async () => {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/auth')
        const url = await res.text()

        // OPEN NEW TAB
        window.open(url, '_blank')
    }

    return (
        <>
            <h1>TESTING CONNECTION</h1>
            <button onClick={handleButton}>LOGIN</button>
        </>
    )
}