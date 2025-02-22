import React from 'react';
import { motion } from 'framer-motion';

function PostItem({ text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="post-item"
    >
      {text}
    </motion.div>
  );
}

export default PostItem;