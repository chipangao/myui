"use client";
import React, { FormEvent, PropsWithChildren } from "react";
import styles from "./page.module.css";
import { getContext } from "../../components/Context/Index";
import { Children } from "react";
import { Button, Input } from "@/components/UI";
// import { useRouter } from 'next/navigation'

export default function LoginPage() {
  // const router = useRouter()
  const { setTheme2, theme, setTheme } = getContext();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // event.preventDefault()
    // const formData = new FormData(event.currentTarget)
    // const email = formData.get('email')
    // const password = formData.get('password')
    // const response = await fetch('/api', {
    //   method: 'POST',
    // })
    // console.log(response)
  }

  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input label="Username" />
        <Input label="Password" password />
        <Button>Submit</Button>
      </form>
      {/* <button 
      onClick={()=>{
        if(document.documentElement.getAttribute('data-theme')==='dark'){
          document.documentElement.setAttribute('data-theme', '');
          localStorage.setItem('theme','')
        }else{
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme','dark')
        }
      }}>
        button
      </button> */}
    </div>
  );
}
