import styles from './styles.module.scss';
import { X } from 'lucide-react';

export function ModalOrder() {
    return(
        <dialog className={styles.modalContainer}>
            <section className={styles.modalContent}>

                <button className={styles.modalClose}>
                    <X size={40} color='#C66300' />
                </button>

                <article className={styles.container}>
                    <h2>Detalhes do Pedido</h2>

                    <span className={styles.table}>
                        Mesa <b>36</b>
                    </span>

                    <section className={styles.itemOrder}>
                        <span>1 - <b>Pizza Catupiry</b></span>
                        <span className={styles.description}>Pizza de frango com catupiry, borda recheada</span>
                        <span className={styles.observation}>Sem cebola, sem bacon</span>
                    </section>
                    <section className={styles.itemOrder}>
                        <span>1 - <b>Pizza Catupiry</b></span>
                        <span className={styles.description}>Pizza de frango com catupiry, borda recheada</span>
                        <span className={styles.observation}>Sem cebola, sem bacon</span>
                    </section>
                    <section className={styles.itemOrder}>
                        <span>1 - <b>Pizza Catupiry</b></span>
                        <span className={styles.description}>Pizza de frango com catupiry, borda recheada</span>
                        <span className={styles.observation}>Sem cebola, sem bacon</span>
                    </section>

                    <button className={styles.buttonOrder}>
                        Concluir Pedido
                    </button>

                </article> 

            </section>
        </dialog>
    )
}