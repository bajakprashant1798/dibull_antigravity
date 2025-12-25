import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    className?: string;
}

export const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }: FadeInProps) => {
    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...directions[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1], delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerContainer = ({ children, className = '', delay = 0 }: { children: ReactNode, className?: string, delay?: number }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.1,
                        delayChildren: delay,
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
