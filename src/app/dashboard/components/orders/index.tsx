"use client"

import { use } from 'react';
import { OrderProps } from '@/lib/order.type';
import styles from './styles.module.scss';
import { RefreshCcw } from 'lucide-react';
import { ModalOrder } from '@/app/dashboard/components/modal';
import { OrderContext } from '@/providers/order';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface Props {
    orders: OrderProps[];
}

export default function Orders({ orders }: Props) {

    const { isOpen, onRequestOpen } = use(OrderContext)
    const router = useRouter()

    async function handleDetailOrder(order_id: string) {
        await onRequestOpen(order_id)
    }

    function handleRefresh() {
        router.refresh();
        toast.success('Pedidos atualizados com sucesso!')
    }

  return (
    <>
        <main className={styles.orderContainer}>
            <section className={styles.orderContent}>
                <h1>Últimos Pedidos</h1>
                <button onClick={handleRefresh}>
                    <RefreshCcw size={24} color='#C66300' />
                </button>
            </section>

            <section className={styles.orderList}>

                {orders.length === 0 && (
                    <span className={styles.emptyItem}>Nenhum pedido aberto no momento...</span>
                )}

                {orders.map( order => (
                    <button
                        key={order.id}
                        className={styles.orderItem}
                        onClick={() => handleDetailOrder(order.id)}
                    >
                        <div className={styles.orderTag}></div>
                        <span>Mesa {order.table}</span>
                    </button>
                ))}          
            </section>   
                    
        </main>

        {isOpen && <ModalOrder />}
    </>
  )
}