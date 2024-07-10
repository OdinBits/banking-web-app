"use client"

import { z } from "zod";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { signInThunk, signUpThunk } from "@/lib";
import { setSignIn } from "@/lib/features/sign-in/signInSlice";

const formDetails = [
    {
        name: 'firstName',
        label: 'First Name',
        placeholder: 'Enter your first name',
        type: 'text',
    },
    {
        name: 'lastName',
        label: 'Last Name',
        placeholder: 'Enter your last name',
        type: 'text',
    },
    {
        name: 'address',
        label: 'Address',
        placeholder: 'Specific address',
        type: 'text',
    },
    {
        name: 'city',
        label: 'City',
        placeholder: 'Enter city here',
        type: 'text',
    },
    {
        name: 'state',
        label: 'State',
        placeholder: 'ex: NY',
        type: 'text',
    },
    {
        name: 'postalCode',
        label: 'Postal Code',
        placeholder: 'ex: 11101',
        type: 'text',
    },
    {
        name: 'dateOfBirth',
        label: 'Date of Birth',
        placeholder: 'yyyy-mm-dd',
        type: 'text',
    },
    {
        name: 'email',
        label: 'Email',
        placeholder: 'Enter your email here',
        type: 'text',
    }
    ,
    {
        name: 'password',
        label: 'Password',
        placeholder: 'Enter your password here',
        type: 'password',
    }
]

const AuthForm = ({ type }: { type: string }) => {

    const [user, setUser] = React.useState(null);

    const dispatch = useAppDispatch();

    const router = useRouter();

    const signInLoading = useAppSelector((state) => state.signIn.signInLoading);

    console.log('signIn prop', signInLoading)

    const formSchema = authFormSchema(type);


    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof formSchema>) => {

        dispatch(setSignIn(true));

        try {

            if(type === 'sign-up') {
                dispatch(signUpThunk(values))
            }

            if(type === 'sign-in') {
                dispatch(signInThunk({email:values.email,password:values.password}));
                router.push('/')
            }
        }
        catch ( error)
        {
            console.error(error);
        }
        finally {
            dispatch(setSignIn(false))
        }
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <section className="auth-form ">
            <header className="flex flex-col gap-5 md:gap-8">
                <Link
                    href='/'
                    className='cursor-pointer items-center gap-1 flex'
                >
                    <Image
                        src={'/icons/logo.svg'}
                        alt='Horizon logo'
                        width={34}
                        height={34}
                    />
                    <h1 className='text-26 font-ibm-plex-serif text-black-1'>Horizon</h1>
                </Link>

                <div className="flex flex-col gap-1 md:gap-3">
                    <h1>
                        {user ? 'Link Account' : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
                        <p className="text-16 font-normal text-gray-600">
                            {user ? 'Link your account to get started' : 'Please enter your details'}
                        </p>
                    </h1>
                </div>
            </header>
            {user ? (
                <div className="flex flex-col gap-4">
                    {/* Plaid Link*/}
                </div>
            ) : (
                <>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                            {type === 'sign-up' && (
                                <>
                                    <div className="flex gap-4">
                                        <CustomInput
                                            form={form}
                                            name='firstName'
                                            label='First Name'
                                            placeholder='Enter first name'
                                            type='text'
                                        />
                                        <CustomInput
                                            form={form}
                                            name='lastName'
                                            label='Last Name'
                                            placeholder='Enter last name'
                                            type='text'
                                        />
                                    </div>
                                    <CustomInput
                                        form={form}
                                        name='address'
                                        label='Address'
                                        placeholder='Specific Address'
                                        type='text'
                                    />
                                    <div className="flex gap-4">
                                        <CustomInput
                                            form={form}
                                            name='state'
                                            label='State'
                                            placeholder='Example: NY'
                                            type='text'
                                        />
                                        <CustomInput
                                            form={form}
                                            name='postalCode'
                                            label='Postal Code'
                                            placeholder='Example: 11101'
                                            type='text'
                                        />
                                    </div>
                                    <div className="flex gap-4">
                                        <CustomInput
                                            form={form}
                                            name='dateOfBirth'
                                            label='Date Of Birth'
                                            placeholder='YYYY-MM-DD'
                                            type='text'
                                        />
                                        <CustomInput
                                            form={form}
                                            name='ssn'
                                            label='SSN'
                                            placeholder='Example: 1234'
                                            type='text'
                                        />
                                    </div>
                                    {formDetails.map((item) => (
                                        (item.label === 'Email' || item.label === 'Password') && (
                                            <CustomInput
                                                key={`sign-in-${item.label}`}
                                                form={form}
                                                name={item.name}
                                                label={item.label}
                                                placeholder={item.placeholder}
                                                type={item.type}
                                            />
                                        )
                                    ))}
                                </>
                            )}

                            {type === 'sign-in' && (
                                formDetails.map((item) => (
                                    (item.label === 'Email' || item.label === 'Password') && (
                                        <CustomInput
                                            key={`sign-in-${item.label}`}
                                            form={form}
                                            name={item.name}
                                            label={item.label}
                                            placeholder={item.placeholder}
                                            type={item.type}

                                        />
                                    )
                                ))
                            )}

                            <div className="flex flex-col gap-4">
                                <Button className="form-btn " type="submit" disabled={signInLoading}>
                                    {signInLoading ? (
                                        <>
                                            <Loader2 size={20}
                                                className='animate-spin' /> &nbsp;
                                            Loading...
                                        </>
                                    ) : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
                                </Button>
                            </div>
                        </form>
                    </Form>

                    <footer className="flex justify-center gap-1">
                        <p className="text-14 font-normal text-gray-600">
                            {type === 'sign-in'
                                ? "Don't have an account ?"
                                : "Already have an account ?"}
                        </p>
                        <Link className='form-link' href={type === 'sign-in' ? '/sign-up' : '/sign-in'}>
                            {type === 'sign-in' ? 'sign-up' : 'Sign-in'}
                        </Link>
                    </footer>
                </>
            )}
        </section>
    )
}

export default AuthForm;