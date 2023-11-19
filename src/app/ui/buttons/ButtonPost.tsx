'use client';

import { FC } from "react";

// Definición de las propiedades que puede recibir el componente
export interface ButtonPostProps {
    children: React.ReactNode; // Contenido del botón
    message: string; // Mensaje que se enviará a través de la API
    className?: string; // Clases CSS opcionales para el botón
    timeIntervalInMinutes?: number; // Intervalo de tiempo en minutos para programar el mensaje en el futuro
    dateTime?: Date; // Fecha y hora específicas para programar el mensaje en el futuro
    disabled?: boolean; // Estado del botón (habilitado o deshabilitado)
    closeModal: () => void; // Función para cerrar el modal
}

// Definición del componente funcional ButtonPost
export const ButtonPost: FC<ButtonPostProps> = ({
    children,
    message,
    className,
    timeIntervalInMinutes,
    dateTime,
    disabled = false,
    closeModal
}) => {

    // Función que se ejecuta al hacer clic en el botón
    const handleClick = async () => {
        // Variable para almacenar la fecha y hora programada
        let scheduleDateTime: Date | string;

        // Determinar la fecha y hora programada en base a las propiedades recibidas
        if (!timeIntervalInMinutes && !dateTime) {
            scheduleDateTime = 'NOW'; // Si no se proporciona tiempo ni fecha, programar para ahora
        }
        else if (timeIntervalInMinutes) {
            const futureDateTime = new Date();
            futureDateTime.setMinutes(futureDateTime.getMinutes() + timeIntervalInMinutes);
            scheduleDateTime = futureDateTime; // Si se proporciona un intervalo de tiempo, programar para ese tiempo en el futuro
        }
        else if (dateTime) {
            scheduleDateTime = dateTime; // Si se proporciona una fecha y hora específicas, programar para ese momento en el futuro
        } else {
            scheduleDateTime = 'NOW'; // En cualquier otro caso, programar para ahora
        }

        // Realizar una solicitud POST a la API para enviar el mensaje
        fetch(process.env.NEXT_PUBLIC_API_URL + '/post/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message,
                scheduleDateTime
            })
        });

        // Si se proporciona una función para cerrar el modal, ejecutarla
        closeModal()
    }

    // Renderizar el componente de botón con las propiedades recibidas
    return (
        <button className={className || ""} onClick={handleClick} disabled={disabled}>
            {children}
        </button>
    );
}

