import styles from './main.module.css';
import Image from "next/image";
import Link from "next/link";

export default function Main() {
  return (
    <div className={styles.container}>
        <div className={styles.cardGrid}>
            <div className={styles.gridItemWrapper}>
                <Image className={styles.star} width={20} height={20} src="/icons/star.svg" alt="buildspace"/>
                <div className={styles.gridItem}>
                    <Image className={styles.itemLogo} width={60} height={60} src="/images/buildspace.webp" alt="buildspace"/>
                    <div className={styles.right}>
                        <div className={styles.rightTitle}>Buildspace</div>
                        <div className={styles.rightItemWrapper}>
                            <Link href="https://buildspace.so/" target="_blank" className={styles.rightItem} alt="Website">
                                <Image className={styles.rightItemIcon} src="/icons/website.svg" width={16} height={16}/>
                                <span>Website</span>
                            </Link>
                            <Link href="https://twitter.com/_buildspace" target="_blank" className={styles.rightItem} alt="Twitter">
                                <Image className={styles.rightItemIcon} src="/icons/twitter.svg" width={16} height={16}/>
                                <span>Twitter</span>
                            </Link>
                            <Link href="https://discord.com/invite/buildspace" target="_blank" className={styles.rightItem} alt="Discord">
                                <Image className={styles.rightItemIcon} src="/icons/discord.svg" width={16} height={16}/>
                                <span>Discord</span>
                            </Link>
                            <Link href="https://discord.com/invite/buildspace" target="_blank" className={styles.rightItem} alt="Medium">
                                <Image className={styles.rightItemIcon} src="/icons/medium.svg" width={16} height={16}/>
                                <span>Medium</span>
                            </Link>
                            <Link href="https://discord.com/invite/buildspace" target="_blank" className={styles.rightItem} alt="Mirror">
                                <Image className={styles.rightItemIcon} src="/icons/mirror.png" width={16} height={16}/>
                                <span>Mirror</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
