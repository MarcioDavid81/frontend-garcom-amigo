import styles from './styles.module.scss';
import { RefreshCcw } from 'lucide-react';


export default function Orders() {

  return (
        <main className={styles.orderContainer}>
            <section className={styles.orderContent}>
                <h1>Últimos Pedidos</h1>
                <button>
                    <RefreshCcw size={24} color='#C66300' />
                </button>
            </section>

            <section className={styles.orderList}>
                <button
                    className={styles.orderItem}
                >
                    <div className={styles.orderTag}></div>
                    <span>Mesa 10</span>
                </button>
                <button
                    className={styles.orderItem}
                >
                    <div className={styles.orderTag}></div>
                    <span>Mesa 11</span>
                </button>
                <button
                    className={styles.orderItem}
                >
                    <div className={styles.orderTag}></div>
                    <span>Mesa 12</span>
                </button>           
            </section>   
                    
        </main>
  )
}