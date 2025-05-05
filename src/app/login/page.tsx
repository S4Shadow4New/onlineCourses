"use client"
import React from 'react'
import { Button } from '@/components/ui/button'

import {zodResolver} from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {z} from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { signIn} from '@/lib/services/auth-service'


const formSchema = z.object({
    email: z.string().email('Email invalide'),
    password: z.string().min(6,{
      message: "Le mot de passe doit contenir au moins 6 caractères."
    })
  }) 
  
  const formFields = [
    { name: "email", label: "Email", type: "email", placeholder: "email@example.com" },
    { name: "password", label: "Mot de passe", type: "password", placeholder: "•••••••." },
  ];

const Login = ()=>{
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      email: "",
      password: ""
    }
  })
    
    const onSubmit = async (values: z.infer<typeof formSchema>)=>{
      const {email, password} = values
      try{
        await signIn(email, password)
        console.log("Utilisateur connecté avec succes!")
      } catch(e){
        console.error(`Echec de l'envoie des informations: ${e}`)
      }
    }
    return(
        <div className='min-h-screen flex items-center justify-center'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/2 space-y-8">
            <div>
            {formFields.map((fieldData) => (
              <FormField
                key={fieldData.name}
                control={form.control}
                name={fieldData.name as keyof z.infer<typeof formSchema>}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">{fieldData.label}</FormLabel>
                    <FormControl>
                      <Input
                        type={fieldData.type}
                        className="h-12 w-full text-base px-4"
                        placeholder={fieldData.placeholder}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            </div>
            <div>
  
            <Button variant="outline" type="submit" className="h-12 w-full text-base">Se connecter</Button>
            </div>
  
          </form>
        </Form>
      </div>
    )
}

export default Login