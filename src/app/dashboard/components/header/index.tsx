"use client"

import Image from 'next/image';
import styles from './styles.module.scss';
import logoImg from '/public/logo.png'
import Link from 'next/link';
import { LogOutIcon } from 'lucide-react'
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function Header() {

    const router = useRouter();

    async function handleLogout() {
        deleteCookie("session", {path: "/"});

        toast.success("Logout efetuado com sucesso");

        router.replace("/");
    }

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/dashboard">
                        <Image
                            src={logoImg}
                            alt="Logo Fresco Pizzaria"
                            quality={100}
                        />
                </Link>

                <nav>
                    <Link href="/dashboard/category">
                        Categorias
                    </Link>
                    <Link href="/dashboard/product">
                        Produtos
                    </Link>

                    <form action={handleLogout}>
                        <button type='submit'>
                            <LogOutIcon size={24} color='#292827' />
                        </button>
                    </form>
                </nav>
            </div>
            
        </header>
    )
}