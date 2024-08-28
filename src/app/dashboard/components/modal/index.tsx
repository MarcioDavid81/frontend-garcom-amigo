"use client"

import { use } from 'react';
import styles from './styles.module.scss';
import { X } from 'lucide-react';
import { OrderContext } from '@/providers/order';
import { calculateTotalOrder } from '@/lib/helper';

export function ModalOrder() {

    const { onRequestClose, order, finishOrder } = use(OrderContext)

    async function handleFinishOrder() {
        await finishOrder(order[0].order.id)
    }

    return(
        <dialog className={styles.modalContainer}>
            <section className={styles.modalContent}>

                <button
                    className={styles.modalClose}
                    onClick={onRequestClose}
                >
                    <X size={40} color='#C66300' />
                </button>

                <article className={styles.container}>
                    <h2>Detalhes do Pedido</h2>

                    <span className={styles.table}>
                        Mesa <b>{order[0].order.table}</b>
                    </span>

                    {order[0].order?.name &&(
                        <span className={styles.name}>
                            Cliente: <b>{order[0].order.name}</b>
                        </span>
                    )}

                    {order.map(item => (
                        <section className={styles.itemOrder} key={item.id}>
                        <span>
                            Qtd.: {item.amount} - <b>{item.product.name}</b> - R$ {parseFloat(item.product.price) * item.amount}
                        </span>
                        <span className={styles.description}>{item.product.description}</span>
                        <span className={styles.observation}>{item.observation}</span>
                    </section>
                    ))}

                    <span className={styles.total}>
                        Total: R$ {calculateTotalOrder(order)}
                    </span>

                    <button
                        className={styles.buttonOrder}
                        onClick={handleFinishOrder}
                    >
                        Concluir Pedido
                    </button>

                </article> 

            </section>
        </dialog>
    )
}