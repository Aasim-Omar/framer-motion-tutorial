const hoverButton = {
  visible: {
    scale: [1, 1.1, 1, 1.1, 1],
    transition: {delay: 1},
  },
  hover: {
    textShadow: "0 0 5px #fff",
    boxShadow: "0 0 10px #fff",
    transition: {duration: 0.7, yoyo: Infinity},
  },
};

const navigatePages = {
  hidden: {x: "100vw"},
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      duration: 0.5,
    },
  },
};

const listHover = {
  hover: {
    scale: 1.1,
    originX: 0,
    color: "#f8e112",
    transition: {type: "spring", stiffness: 300},
  },
};

const opacityEffect = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      when: "beforeChildren",
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const backDrop = {
  visible: {
    opacity: 1,
    transition: {duration: 1},
  },
  hidden: {opacity: 0},
  exit: {opacity: 0},
};

const modalEffect = {
  hidden: {y: -500},
  visible: {y: 0, transition: {duration: 1}},
  exit: {y: -500, transition: {duration: 0.5}},
};

const svgVariants = {
  hidden: {rotate: -180},
  visible: {rotate: 0, transition: {delay: 0.5, duration: 1}},
};

const pathVariants = {
  hidden: {pathLength: 0, opacity: 0},
  visible: {pathLength: 1, opacity: 1, transition: {duration: 1.5}},
};

const loaderVariants = {
  animationOne: {
    x : [ -20, 20 ],
    y : [ 0, -40 ],
    transition: {
      x: {yoyo: Infinity, duration: 0.50},
      y: {yoyo: Infinity, duration: 0.25}
    },
  },
  animationTwo: {
    x: [-20, 20],
    y: [0, 30],
    transition: {
      x: { yoyo: Infinity, duration: 0.50 },
      y: { yoyo: Infinity, duration: 0.25 }
    }
  }
}

const slideDown = {
  hidden: {y: -250},
  visible: {
    y: 0,
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 120,
    },
  },
};

export {
  hoverButton,
  navigatePages,
  listHover,
  opacityEffect,
  backDrop,
  modalEffect,
  svgVariants,
  pathVariants,
  slideDown,
  loaderVariants,
};
