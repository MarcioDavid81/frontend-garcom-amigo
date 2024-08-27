import { OrderProps } from '@/lib/order.type';
import styles from './styles.module.scss';
import { RefreshCcw } from 'lucide-react';
import { ModalOrder } from '@/app/dashboard/components/modal';

interface Props {
    orders: OrderProps[];
}

export default function Orders({ orders }: Props) {

  return (
    <>
        <main className={styles.orderContainer}>
            <section className={styles.orderContent}>
                <h1>Últimos Pedidos</h1>
                <button>
                    <RefreshCcw size={24} color='#C66300' />
                </button>
            </section>

            <section className={styles.orderList}>
                {orders.map( order => (
                    <button
                        key={order.id}
                        className={styles.orderItem}
                    >
                        <div className={styles.orderTag}></div>
                        <span>Mesa {order.table}</span>
                    </button>
                ))}          
            </section>   
                    
        </main>

        <ModalOrder />
    </>
  )
}