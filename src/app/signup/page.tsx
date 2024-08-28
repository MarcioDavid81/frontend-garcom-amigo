import Image from "next/image"
import Link from "next/link"
import logoImg from "/public/logo.png"
import styles from "../page.module.scss"
import { api } from '@/services/api';
import { redirect } from "next/navigation";
import { toast } from "sonner";


export default function Signup() {

  async function handleRegister(formData: FormData) {

    "use server"

    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')

    if (name === "" || email === "" || password === "") {
      toast.error('Preencha todos os campos!');
      return;
    }

    try {
      await api.post('/users', {
        name,
        email,
        password
      })
    }catch(err) {
      console.log(err)
    }
    redirect('/')
  }

  return (
    <>

      <div className={styles.containerCenter}>
        <Image
          src={logoImg}
          alt="Logo"
        />

        <section className={styles.login}>
            <h1>Crie sua conta</h1>
            <form action={handleRegister}>
                <input
                type="text"
                placeholder="Nome"
                name='name'
                required
                className={styles.input}
                />
                <input
                type="email"
                placeholder="E-mail"
                name='email'
                required
                className={styles.input}
                />
                <input
                type="password"
                placeholder="******"
                name='password'
                required
                className={styles.input}
                />
                <button 
                type="submit"
                className={styles.button}
                >
                Cadastrar
                </button>
            </form>

            <Link href="/" className={styles.text}>
                Já possui uma conta? Faça login!
            </Link>
        </section>
      </div>
    
    </>
  )
}
