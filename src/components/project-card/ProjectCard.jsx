import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = () => {
    return (
        <>
            <div className={styles.container}>

                <div className={styles.imageContainer}>
                    <img src="https://giffiles.alphacoders.com/136/136740.gif" />
                </div>

                <div className={styles.textContainer}>
                    <div>
                        <p><span className="font-bold">Technologies/Tools:</span> React, Tailwind CSS, HTML, Figma</p>
                        <p>Description</p>
                    </div>
                    <button className="primaryButton">Click Me</button>
            </div>
                </div>

        </>
    )
}

export default ProjectCard;