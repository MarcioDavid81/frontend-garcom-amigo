import styles from './styles.module.scss'
import { Button } from '@/app/dashboard/components/button'
import { getCookieServer } from '@/lib/cookieServer';
import { api } from '@/services/api';
import { redirect } from 'next/navigation';

export default function Category() {

    async function handleRegisterCategory(formData: FormData) {
        "use server"
        
        const name = formData.get('name');

        if (name === "") {
            return;
        }

        const data = {
            name: name
        }

        const token = getCookieServer();

        await api.post('/category', data, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })

        .catch((err) => {
            console.log(err);
            return;
        })

        redirect('/dashboard')

    }

    return (
        <main className={styles.categoryContainer}>
            <h1>Nova Categoria</h1>

            <form
                className={styles.categoryForm}
                action={handleRegisterCategory}
            >
                <input
                    type="text"
                    name='name'
                    placeholder='Nome da categoria, ex: Pizza'
                    required
                    className={styles.categoryInput}
                />
                <Button name='Cadastrar' />
            </form>
        </main>
    );
}