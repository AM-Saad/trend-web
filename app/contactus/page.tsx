'use client';
import Button from '@/components/shared/Button'
import Skills from '@/components/shared/Skills';
import React, { useState, useEffect } from 'react'


const Page = () => {
    const [projectCountUp, setProjectCountUp] = useState<number>(0)
    const [yearCountUp, setYearCountUp] = useState<number>(0)
    const [sending, setSending] = useState<boolean>(false)
    const [sent, setSent] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    useEffect(() => {


        const yearsinterval = setInterval(() => {
            setYearCountUp(yearCountUp => yearCountUp + 1)
        }, 100);

        if (yearCountUp === 14) clearInterval(yearsinterval)
        return () => {
            clearInterval(yearsinterval)
        }

    }, [yearCountUp]);

    useEffect(() => {
        const projectsinterval = setInterval(() => {
            setProjectCountUp(projectCountUp => projectCountUp + 1)
        }, 10);
        if (projectCountUp === 100) clearInterval(projectsinterval)
        return () =>
            clearInterval(projectsinterval)
    }, [projectCountUp])


    const send_email = async (e: any) => {
        e.preventDefault();
        const { email, name, message } = e.target.elements;
        if (!email.value || !name.value || !message.value) {
            setError('Please fill in all fields')
            return
        }
        setError('')
        setSent(false)
        try {
            setSending(true)
            const response = await fetch('/api', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email.value, name: name.value, message: message.value })
            })
            setSending(false)

            if (response.status !== 200) {
                setError('We could not send your message at this time please try again later')
                return
            }
            setSent(true)

        } catch (error: any) {
            setError('We could not send your message at this time please try again later')
            setSending(false)
            setSent(false)


        }

        setTimeout(() => {
            setSent(false)
            setError('')
        }, 8000);
    }


    return <div>
        <h2 className='title'>Contact us</h2>
        <p className='text-paragraph tracking-wide my-5 md:w-3/5'>
            We&apos;d love to hear from you and we love discussing potential projects, intriguing ideas, and opportunities to be part of your plans.<br />
            Complete the form below with your details and we&apos;ll get back to you within one business day.
        </p>
        <div className='flex gap-10 flex-col md:flex-row overflow-hidden'>
            <form className='flex flex-col gap-5 md:w-3/5' onSubmit={send_email}>
                {(!sending && sent) && <div className='bg-green-100 text-green-700 p-2 rounded-md'>
                    Thank you for contacting us, we will get back to you shortly
                </div>}
                {(!sending && error) && <div className='bg-red-100 text-red-700 p-2 rounded-md'>{error}</div>}
                <div className='flex flex-col'>
                    <textarea name="message" id="message" className='border border-gray-300 p-2 mt-2 rounded placeholder-slate-400' placeholder='I need something' />
                </div>
                <div className='flex flex-col md:flex-row md:gap-7'>
                    <div className='flex flex-col w-full md:w-1/2'>
                        <input type="text" name="name" id="name" className='border border-gray-300 p-2 mt-2 rounded placeholder-slate-400' placeholder='Write down your name' />
                    </div>
                    <div className='flex flex-col w-full md:w-1/2'>
                        <input type="email" name="email" id="email" className='border border-gray-300 p-2 mt-2 rounded placeholder-slate-400' placeholder='Write down your email' />
                    </div>
                </div>
                <Button title="Submit" loading={sending} type='submit' style={'bg-gradient-radial text-white'} />
            </form>
            <div className='flex flex-col overflow-x-scroll no-scrollbar md:w-2/5'>
                <div className='flex gap-10 mb-5 text-paragraph'>
                    <div>
                        <span className='block text-5xl'>{yearCountUp} </span> <span className='text-sm'> years in business</span>
                    </div>
                    <div>
                        <span className='block text-5xl'>{projectCountUp}+ </span> <span className='text-sm'> projects</span>
                    </div>
                </div>
                <Skills />
            </div>
        </div>
    </div>
}

export default Page
