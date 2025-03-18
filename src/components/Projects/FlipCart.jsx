import React from 'react';
import { motion } from 'framer-motion';
import ReactFlipCard from 'reactjs-flip-card';

const Project1 = ({ Text, Img, linkW, linkG }) => {
    const styles = {
        container: {
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            perspective: '1000px',
        },
        flipCardStyle: {
            display: 'grid',
            placeItems: 'center',
            width: '100%',
            height: '100%',
        },
        card: {
            width: '100%',
            height: '100%',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        },
        cardBack: {
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
            borderRadius: '16px',
        },
    };

    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut'
            }
        },
        hover: {
            y: -10,
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
            transition: { duration: 0.3 }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 }
        },
        tap: {
            scale: 0.95,
            transition: { duration: 0.2 }
        }
    };

    return (
        <motion.div
            className="grid w-full max-w-[600px] p-4 gap-4 h-[700px] min-h-[400px] m-auto"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
        >
            <motion.div
                className="flex justify-center items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <p className="text-lg font-jose-sans text-white-700 leading-relaxed">
                    {Text}
                </p>
            </motion.div>

            <div className="flex justify-center items-center w-full h-full">
                <ReactFlipCard
                    frontStyle={styles.card}
                    backStyle={styles.cardBack}
                    containerStyle={styles.container}
                    flipCardStyle={styles.flipCardStyle}
                    flipTrigger="onHover" // Changed to hover for better UX
                    frontComponent={
                        <img
                            style={{
                                width: '100%',
                                // height: '400px',
                                objectFit: 'cover',
                                transition: 'transform 0.3s ease'
                            }}
                            src={Img}
                            alt="Project preview"
                            className="hover:scale-105"
                        />
                    }
                    backComponent={
                        <motion.div
                            className="w-full h-full flex justify-center items-center gap-6 p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4 }}
                        >
                            {linkW &&
                                <motion.a
                                    href={linkW}
                                    target="_blank"
                                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    Visit Site
                                </motion.a>
                            }
                            {linkG && (
                                <motion.a
                                    href={linkG}
                                    target="_blank"
                                    className="p-3 bg-white rounded-full border-2 border-gray-200"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-gray-800"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                    </svg>
                                </motion.a>
                            )}
                        </motion.div>
                    }
                />
            </div>
        </motion.div>
    );
};

export default Project1;