import React from 'react';
import ControlledCarousel from './Carousel/Carousel';
import styles from './Home.module.scss';

function Home() {
    return <div className={styles.home}>
        <h1>Who we are</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at libero sit amet velit congue eleifend. Nam et magna ac lorem pellentesque vehicula non sit amet odio. Ut facilisis nisl sit amet mattis pharetra. Donec vel arcu purus. Vestibulum quis venenatis nulla. Maecenas interdum sapien non cursus dictum. Nunc accumsan nibh in arcu luctus ornare. Aliquam rhoncus elit felis, ac tristique lorem posuere varius. Nam euismod enim non nunc condimentum, quis pellentesque metus iaculis. Phasellus vitae lectus a lacus ultrices pellentesque sed ut urna. Nulla facilisi. Suspendisse facilisis scelerisque ante, id sollicitudin mauris tincidunt ac. Cras et aliquet sapien. Suspendisse quam justo, posuere mollis turpis eget, volutpat tristique orci. Phasellus dapibus elit ac lectus vestibulum condimentum. Nunc accumsan iaculis magna nec efficitur. Sed pellentesque, enim sed maximus malesuada, ex velit dignissim enim, sit amet volutpat nisi quam in metus. Proin in ligula semper, dignissim mauris ac, finibus ex. Integer id magna sollicitudin, vulputate nisi sed, tristique nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim, diam id rhoncus cursus, purus eros ultrices metus, et aliquet mauris sapien ut sapien. Quisque et mi at nunc accumsan commodo.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at libero sit amet velit congue eleifend. Nam et magna ac lorem pellentesque vehicula non sit amet odio. Ut facilisis nisl sit amet mattis pharetra. Donec vel arcu purus. Vestibulum quis venenatis nulla. Maecenas interdum sapien non cursus dictum. Nunc accumsan nibh in arcu luctus ornare. Aliquam rhoncus elit felis, ac tristique lorem posuere varius. Nam euismod enim non nunc condimentum, quis pellentesque metus iaculis. Phasellus vitae lectus a lacus ultrices pellentesque sed ut urna. Nulla facilisi. Suspendisse facilisis scelerisque ante, id sollicitudin mauris tincidunt ac. Cras et aliquet sapien. Suspendisse quam justo, posuere mollis turpis eget, volutpat tristique orci.</p>
        <div className={styles.caroselWrapper}>
            <ControlledCarousel />
        </div>
    </div>
}

export default Home;