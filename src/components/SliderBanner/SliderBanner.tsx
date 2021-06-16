import { Swiper, SwiperSlide } from 'swiper/react';
import styles from "./styles.module.scss";
import Link from 'next/link'


export default function SliderBanner() {
    return (
        <Swiper navigation={true} className={styles.mySwiper}>
            <SwiperSlide><img src="./americaDoNorte.png" alt="americaDoNorte"/>
                <Link href='/continent/1'>
                    <div className={styles.content}>
                        <h1>America do Norte</h1>
                        <h3>Conheça a Estatua da Liberdade</h3>
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide><img src="./americaDoSul.png" alt="americaDoSul" />
                <Link href='/continent/2'>
                    <div className={styles.content}>
                        <h1>America do Sul</h1>
                        <h3>Já visitou o Rio de Janeiro?</h3>
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide><img src="./asia.png" alt="asia" />
            <Link href='/continent/3'>
                <div className={styles.content}>
                    <h1>Asia</h1>
                    <h3>A melhor culinaria!</h3>
                </div>
            </Link>
            </SwiperSlide>
            <SwiperSlide><img src="./africa.png" alt="africa" />
                <Link href='/continent/4'>
                    <div className={styles.content}>
                        <h1>Africa</h1>
                        <h3>Vamos para um safari ?</h3>
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide><img src="./europe.png" alt="europe" />
                <Link href='/continent/5'>
                    <div className={styles.content}>
                        <h1>Europa</h1>
                        <h3>O continente mais antigo.</h3>
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide><img src="./oceania.png" alt="oceania" />
                <Link href='/continent/6'>
                    <div className={styles.content}>
                        <h1>Oceania</h1>
                        <h3>Conheça nossa praias!</h3>
                    </div>
                </Link>
            </SwiperSlide>
        </Swiper>
    )
}
