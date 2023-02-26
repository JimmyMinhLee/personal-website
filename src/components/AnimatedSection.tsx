import { motion } from "framer-motion";
type AnimatedSectionProps = {
  child: JSX.Element;
  delay: number;
};
const AnimatedSection = (props: AnimatedSectionProps) => {
  const { child, delay } = props;
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      {child}
    </motion.div>
  );
};
export default AnimatedSection;
