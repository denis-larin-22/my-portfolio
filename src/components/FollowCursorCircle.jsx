import { motion } from "framer-motion";

export const FollowCursorCircle = ({ x, y }) => {
    return (
        <motion.div
            className="cursor-circle bg-light-green"
            style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                position: 'fixed',
                pointerEvents: 'none',
                zIndex: 9999,
                left: x - 25,
                top: y - 25,
            }}

        />
    );
};