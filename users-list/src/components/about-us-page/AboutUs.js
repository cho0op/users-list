import styles from './AboutUs.module.css';

const AboutUs = () => {
    return (
        <div className={styles.wrapper}>
            <AboutUsContent />
        </div>
    )
}

const AboutUsContent = () => {
    return (
        <div className={styles.content}>
            <div className={styles.title}>
                About us
            </div>
            <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida erat quis libero commodo congue. Suspendisse dictum ante ut dui vestibulum eleifend sit amet eu nisi. Etiam lectus risus, convallis vel libero in, ornare condimentum neque. Morbi id molestie dolor, a tincidunt mauris. Morbi id venenatis nisi. Praesent hendrerit lorem lectus, sit amet facilisis lacus vestibulum sed. Fusce sed dolor et eros consectetur tincidunt non quis erat. Curabitur maximus ante in purus accumsan, vel ultricies eros pretium. Nam luctus dolor turpis, at vulputate erat posuere non. Curabitur id ornare justo, vel suscipit lectus. Aliquam euismod purus in enim commodo, vel efficitur orci maximus. Integer non nunc quis est imperdiet elementum. Quisque sed turpis luctus, convallis tellus sit amet, tempus urna. Sed pharetra rhoncus dui eget pellentesque. Donec laoreet leo eu purus ullamcorper, sed sodales augue sodales. Proin eu ipsum vel mi pulvinar pretium et quis ex.
            </div>
        </div>
    )
}

export default AboutUs