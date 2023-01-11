import { motion, AnimatePresence } from "framer-motion"

interface Props {
  isOpen: boolean
}

export function MobileNav({ isOpen }: Props) {
  if (!isOpen) {
    return null
  }

  return (
    <div>
      <AnimatePresence>
        <motion.ul
          initial={{ height: 0, overflow: "hidden" }}
          animate={{ height: "auto" }}
          exit={{ height: 0, overflow: "hidden" }}
          className="menu"
        >
          <motion.li whileHover={{ scale: 1.1 }}>
            Menu item 1
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            Menu item 2
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            Menu item 3
          </motion.li>
        </motion.ul>
      </AnimatePresence>
    </div>
  )
}
