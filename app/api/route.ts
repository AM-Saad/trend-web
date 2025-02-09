import { NextResponse } from "next/server";
import { render } from '@react-email/render';

const sendgrid = require('@sendgrid/mail')

import { Email } from '../contactus/email';
sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);


export async function POST(request: Request) {

    const response = await request.json();
    const { name, email, message } = response;


    try {
        const emailHtml = render(Email({ name: name, email: email, message: message }));

        const options = {
            from: 'info@coformatique.com',
            to: 'info@coformatique.com',
            subject: 'Coformatique Contact Us Form',
            html: emailHtml,
            replyTo: email,
            text: `From: ${name} <${email}>\n\nMessage:\n${message}`

        };

        const response = await sendgrid.send(options);
        console.log(response);

        return NextResponse.json('Email sent');
    }
    catch (error) {
        console.log(error);
        return NextResponse.error();
    }

}