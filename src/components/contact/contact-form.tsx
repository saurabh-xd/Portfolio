"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Briefcase, UserPlus, HelpCircle, Code, MessageSquare, Loader, Loader2 } from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { 
  Select, 
  SelectTrigger, 
  SelectValue, 
  SelectContent, 
  SelectItem 
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"


import { useState } from "react"
import { Send } from "lucide-react"
import { toast } from "sonner"
import { Textarea } from "../ui/textarea"


const formSchema = z.object({
  username: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
  contact: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(/^[0-9+\-\s()]*$/, "Please enter a valid phone number"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 500 characters"),
  subject: z.string().min(1, "Please select a subject"),
  
})

const Contactform = () => {

  const [isSubmitting, setIsSubmitting] = useState(false)


    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      contact: "",
      message: "",
      subject: ""
    },
  })


 async function onSubmit(values: z.infer<typeof formSchema>) {
    
    setIsSubmitting(true);

 
    try {
      const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await res.json();

     if (res.ok) {
      toast.success("Message sent successfully!");
      form.reset();
    } else {
      toast.error(data.error || "Something went wrong.");
    }

    } catch (error) {
       toast.error("Failed to send message.");
    }finally{
      setIsSubmitting(false);
    }
  }


  return (

    <div>
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium">Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} 
                disabled={isSubmitting}
                className="md:h-16 h-12 px-3 md:placeholder:text-base text-sm"
                />
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="email@example.com" {...field}
                className="md:h-16 h-12 px-3 md:placeholder:text-base text-sm"
                disabled={isSubmitting} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium">Phone </FormLabel>
              <FormControl>
                <Input type="tel" placeholder="Phone No" {...field} 
                className="md:h-16 h-12 px-3 md:placeholder:text-base text-sm"
                disabled={isSubmitting}/>
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel  className="text-sm font-medium">Interested in</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}  >
              <FormControl>
                 <SelectTrigger className="w-full md:h-16 h-12 px-3 md:text-base text-sm " >
            <SelectValue placeholder="Select a subject " />
          </SelectTrigger>
              </FormControl>
             <SelectContent >

          <SelectItem value="freelance">
           <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-primary" />
              Freelance Project
            </div>
            </SelectItem>
          <SelectItem value="hiring">
            <div className="flex items-center gap-2">
              <UserPlus className="w-4 h-4 text-green-600" />
              Hiring / Job Opportunity
            </div>
            </SelectItem>
          <SelectItem value="collaboration">
             <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-blue-500" />
              Collaboration
            </div>
            </SelectItem>
          
          <SelectItem value="other">
             <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-gray-500" />
              Other
            </div>
            </SelectItem>

        </SelectContent>
            </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium">Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Type your message here." id="message" 
                className="md:min-h-40 min-h-30 resize-none md:placeholder:text-base text-sm pt-2"
                disabled={isSubmitting} {...field}/>
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />

      
      
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
            <Loader2 className="animate-spin "/>
            Sending...
            </>
          ) : (
            <>
            <Send/>
          Send Message
            </>
          )
          
          }
          
          </Button>
      </form>
    </Form>

    </div>
  )
}

export default Contactform    