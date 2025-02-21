'use client'

import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';



export default function ContactFormPage() {

    type ValidationErrors = {
        errors: boolean,
        firstName?: string,
        lastName?: string,
        email?: string,
        phoneNumber?: string,
        message?: string
    }

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState<ValidationErrors>({errors: false});

    function validateFirstName(firstName: string, valErrors: ValidationErrors) {
        if (!firstName.length) {
            valErrors.errors = true;
            valErrors.firstName = "First Name Required"
        }
      }

    function validateLastName(lastName: string, valErrors: ValidationErrors) {
        if (!lastName.length) {
            valErrors.errors = true;
            valErrors.lastName = "Last Name Required"
        }
      }
      
      function validateEmail(email: string, valErrors: ValidationErrors) {
        if (!email.length) {
            valErrors.errors = true;
            valErrors.email = "Email Required"
        } else {
            if (!/^[A-z0-9._!#$%&'*+\-\/=?^_`{|}~]+@[A-z0-9._!#$%&'*+\-\/=?^_`{|}~]+.[a-z]$/.test(email)) {
                valErrors.errors = true;
                valErrors.email = "Invalid Email"
            }
        }
      }
      
      function validatePhoneNumber(phoneNumber: string, valErrors: ValidationErrors) {
        if (!phoneNumber.length) {
            valErrors.errors = true;
            valErrors.phoneNumber = "Phone Number Required"
        } else {
            if (!/^[0-9]{10}$/.test(phoneNumber)) {
                valErrors.errors = true;
                valErrors.phoneNumber = "Invalid Phone Number"
            }
        }
      }
      
      function validateMessage(message: string, valErrors: ValidationErrors) {
        if (!message.length) {
            valErrors.errors = true;
            valErrors.message = "Message Required"
        } else {
            if (message.length > 300) {
                valErrors.errors = true;
                valErrors.phoneNumber = "No more than 300 Characters"
            }
        }
      }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        type SuccessResponse = { message: string };
        type ErrorResponse = { message: string };
        
        const valErrors: ValidationErrors = {errors: false};

        validateFirstName(firstName, valErrors);
        validateLastName(lastName, valErrors);
        validateEmail(email, valErrors);
        validatePhoneNumber(phoneNumber, valErrors);
        validateMessage(message, valErrors);

        if (valErrors.errors) {
            setErrors(valErrors);
            return;
        }

        const response = await fetch(`/api/contact`, {
            method: 'POST',
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                phoneNumber,
                message
            }),
            headers: {
                'Content-type': 'application/json'
            }
        });

        if (response.ok) {
            const successRes: SuccessResponse = await response.json();
            window.alert(successRes.message);
        } else {
            const errorRes: ErrorResponse = await response.json();
            window.alert(errorRes.message);
        }
    }


    return (
        <div className="relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                <svg
                    aria-hidden="true"
                    className="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                >
                    <defs>
                    <pattern
                        x="100%"
                        y={-1}
                        id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                        width={200}
                        height={200}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M130 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                    </defs>
                    <rect fill="white" width="100%" height="100%" strokeWidth={0} />
                    <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                    </svg>
                    <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
                </svg>
                </div>
                <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Get in touch
                </h2>
                <p className="mt-6 text-lg/8 text-gray-600">
                Connect with us!  We have a full staff ready and willing 
                to assist and get you plugged into out network.  Leave your
                information and a team member will be in contact soon.
                </p>
                <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
                <div className="flex gap-x-4">
                    <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                    </dt>
                    <dd>
                    {/* 545 Mavis Island */}
                    <br />
                    Miami, Florida 33231
                    </dd>
                </div>
                <div className="flex gap-x-4">
                    <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                    </dt>
                    <dd>
                    <a href="tel:+1 (555) 234-5678" className="hover:text-gray-900">
                        +1 (555) 234-5678
                    </a>
                    </dd>
                </div>
                <div className="flex gap-x-4">
                    <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                    </dt>
                    <dd>
                    <a href="mailto:info@grammerhub.com" className="hover:text-gray-900">
                        info@grammerhub.com
                    </a>
                    </dd>
                </div>
                </dl>
            </div>
            </div>
            <form onSubmit={handleSubmit} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                        First name
                        </label>
                        <div className="mt-2.5">
                        <input
                            id="first-name"
                            name="first-name"
                            type="text"
                            autoComplete="given-name"
                            onChange={(e)=>setFirstName(e.target.value)}
                            value={firstName}
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                        </div>
                        {errors.firstName && <p className="block text-sm/6 text-red-500">{errors.firstName}</p>}
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                        Last name
                        </label>
                        <div className="mt-2.5">
                        <input
                            id="last-name"
                            name="last-name"
                            type="text"
                            autoComplete="family-name"
                            onChange={(e)=>setLastName(e.target.value)}
                            value={lastName}
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                        </div>
                        {errors.lastName && <p className="block text-sm/6 text-red-500">{errors.lastName}</p>}
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                        Email
                        </label>
                        <div className="mt-2.5">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                        </div>
                        {errors.email && <p className="block text-sm/6 text-red-500">{errors.email}</p>}
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
                        Phone number
                        </label>
                        <div className="mt-2.5">
                        <input
                            id="phone-number"
                            name="phone-number"
                            type="tel"
                            autoComplete="tel"
                            onChange={(e)=>setPhoneNumber(e.target.value)}
                            value={phoneNumber}
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                        </div>
                        {errors.phoneNumber && <p className="block text-sm/6 text-red-500">{errors.phoneNumber}</p>}
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                        Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                onChange={(e)=>setMessage(e.target.value)}
                                value={message}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                        {errors.message && <p className="block text-sm/6 text-red-500">{errors.message}</p>}
                    </div>
                    </div>
                    <div className="mt-8 flex justify-end">
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Send message
                        </button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
}