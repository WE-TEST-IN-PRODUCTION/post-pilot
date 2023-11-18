'use client'

export default function ApiPage() {

    const handleButton = async () => {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/auth', {
            cache: "no-store"
        })
        const url = await res.text()

        // OPEN NEW TAB
        window.open(url, '_blank')
    }

    const handleTextMessage = async () => {
        console.log('Sending message...')

        await fetch(process.env.NEXT_PUBLIC_API_URL + '/post/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'Este mensaje fue enviado a través de la API de LinkedIn',
                scheduleDateTime: 'NOW'
            })
        })

        const futureDateTime = new Date()
        futureDateTime.setMinutes(futureDateTime.getMinutes() + 5)

        await fetch(process.env.NEXT_PUBLIC_API_URL + '/post/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'Este mensaje fue enviado a través de la API de LinkedIn 5 minutos después de forma automática',
                scheduleDateTime: futureDateTime
            })
        })
    }

    return (
        <>
            <h1>TESTING CONNECTION</h1>
            <button onClick={handleButton}>LOGIN</button>
            <br />
            <button onClick={handleTextMessage}>SEND TEST MESSAGE</button>
        </>
    )
}