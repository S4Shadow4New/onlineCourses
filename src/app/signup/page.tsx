"use client"
import React from 'react'
import { Button } from '@/components/ui/button'

import {zodResolver} from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {z} from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { signUp } from '@/lib/services/auth-service'
/* import { useRouter } from 'next/navigation' */

export const formSchema = z.object({
  username: z.string().min(3,{
    message: "Le nom de l'utilisateur doit contenir au moins 3 caractères",
  }).max(50),
  email: z.string().email('Email invalide'),
  password: z.string().min(6,{
    message: "Le mot de passe doit contenir au moins 6 caractères."
  })
}) 

const formFields = [
  { name: "username", label: "Username", type: "text", placeholder: "username" },
  { name: "prénom", label: "prénom", type: "text", placeholder: "prénom" },
/*   { name: "Etablissement", label: "Etablissement", type: "text", placeholder: "Etablissement" }, */
  { name: "email", label: "Email", type: "email", placeholder: "email@example.com" },
  { name: "password", label: "Mot de passe", type: "password", placeholder: "••••••••" },
];



const Signup = () => {

/*   const router = useRouter() */

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      username: "",
      email: "",
      password: ""
    }
  })

    
    const onSubmit = async (values: z.infer<typeof formSchema>)=>{
      const {username, email, password} = values
      try{
        await signUp(email, password,username)
        console.log("Utilisateur inscrit avec succes!")
      } catch(e){
        console.error(`Echec de l'envoie des informations: ${e}`)
      }
    }
  return (
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

          <Button type="submit" className="h-12 w-full text-base">S&apos;inscrire</Button>
          </div>

        </form>
      </Form>
{/*       <p>Déjà inscrit? Connectez vous</p>
      <Button onClick={()=> router.push("/login")}>Se connecter</Button> */}
    </div>

    )
}

export default Signup