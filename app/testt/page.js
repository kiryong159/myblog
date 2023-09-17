"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function Tesett() {
  const myVars = {
    start: { scale: 1 },
    end: {
      scale: 1.5,
      rotateZ: "360deg",
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1,
        type: "spring",
      },
    },
  };

  const strokeVars = {
    start: { pathLength: 0, fill: "rgba(255,255,255,0)" },
    end: { pathLength: 1, fill: "rgba(112, 161, 255,1.0)" },
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
      />
    </svg>
  );
}

/*         variants={myVars}
        initial="start" */

/*         <motion.div
        className="w-10 h-10 bg-black rounded-md flex justify-center items-center"
        drag="x"
        style={{
          x,
          rotateZ: scaleValue,
        }}
        dragConstraints={bigBox}
        dragElastic={0.2}
      ></motion.div> */

{
  /*
   */
}

/*   useMotionValueEvent(x, "change", (latest) => {
    console.log("x changed to", latest);
  }); */

/*   const scaleValue = useTransform(x, [-418, 418], [-360, 360]);
  const bgValue = useTransform(
    x,
    [-418, 0, 418],
    [
      "rgba(123, 237, 159,1.0)",
      "rgba(236, 204, 104,1.0)",
      "rgba(255, 107, 129,1.0)",
    ]
  ); */

/*  <div className="px-72 whitespace-pre-line m-auto">


 <article>
   <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
     rhoncus quam.
   </p>
   <p>
     Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
     imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
     Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut felis
     blandit, at iaculis odio ultrices. Nulla facilisi. Vestibulum cursus
     ipsum tellus, eu tincidunt neque tincidunt a.
   </p>
   <h2>Sub-header</h2>
   <p>
     In eget sodales arcu, consectetur efficitur metus. Duis efficitur
     tincidunt odio, sit amet laoreet massa fringilla eu.
   </p>
   <p>
     Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
     Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
     Proin sit amet lacus mollis, semper massa ut, rutrum mi.
   </p>
   <p>Sed sem nisi, luctus consequat ligula in, congue sodales nisl.</p>
   <p>
     Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
     leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
   </p>
   <h2>Sub-header</h2>
   <p>
     Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
     aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
     sem, sit amet tempor nulla. Quisque fermentum felis faucibus,
     vehicula metus ac, interdum nibh. Curabitur vitae convallis ligula.
     Integer ac enim vel felis pharetra laoreet. Interdum et malesuada
     fames ac ante ipsum primis in faucibus. Pellentesque hendrerit ac
     augue quis pretium.
   </p>
   <p>
     Morbi ut scelerisque nibh. Integer auctor, massa non dictum
     tristique, elit metus efficitur elit, ac pretium sapien nisl nec
     ante. In et ex ultricies, mollis mi in, euismod dolor.
   </p>
   <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
   <p>
     Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
     Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
     Proin sit amet lacus mollis, semper massa ut, rutrum mi.
   </p>
   <p>Sed sem nisi, luctus consequat ligula in, congue sodales nisl.</p>
   <p>
     Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
     leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
   </p>
   <h2>Sub-header</h2>
   <p>
     Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
     aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
     sem, sit amet tempor nulla. Quisque fermentum felis faucibus,
     vehicula metus ac, interdum nibh. Curabitur vitae convallis ligula.
     Integer ac enim vel felis pharetra laoreet. Interdum et malesuada
     fames ac ante ipsum primis in faucibus. Pellentesque hendrerit ac
     augue quis pretium.
   </p>
   <p>
     Morbi ut scelerisque nibh. Integer auctor, massa non dictum
     tristique, elit metus efficitur elit, ac pretium sapien nisl nec
     ante. In et ex ultricies, mollis mi in, euismod dolor.
   </p>
   <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
 </article>
</div> */
