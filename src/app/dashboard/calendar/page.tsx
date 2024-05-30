'use client'
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react";
export default function CalendarPage() {

    const [date, setDate] = useState<Date | undefined>(new Date())
    const [mutipleDate, setMultipleDate] = useState<Date[] | undefined>([])

    const smallDate = date?.toLocaleDateString('es-Es', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        
    })

    return (
        <div className="flex-col sm:flex sm:flex-row sm:flex-wrap gap-4">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled= { (date) => date.getDay() === 0 || date.getDay() === 6 }
            />
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled= { (date) => date > new Date()  }
            />
            <Calendar
                mode="multiple"
                selected={mutipleDate}
                onSelect={setMultipleDate}
                className="rounded-md border"
            />
            <div>
                <h1 className=" text-3xl">Informacion</h1>
                <div className="border-b">
                    <p>Fecha: {smallDate}</p>
                    <p>{mutipleDate?.map( (date) => date.toLocaleDateString()).join(', ')}</p>
                </div>

            </div>
        </div>

    );
}