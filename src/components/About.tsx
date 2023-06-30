import React from 'react'
import { motion } from "framer-motion";

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
        </h3>
        <motion.img 
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            viewport={{ once: true }}
            src="https://i.ibb.co/T8yLscK/33-6-52-38-27-28-20220523-171155-1.jpg"
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />
    
            <div className="space-x-10 px-10 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a{" "}
                    <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
                    background
                </h4>
                <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio possimus nobis qui tempore error animi veniam dolores neque debitis eius porro, temporibus voluptas illum fugit recusandae hic eos nostrum? Earum necessitatibus qui dicta ipsam impedit nam ab harum? Unde ut, dicta sit aspernatur earum quo, exercitationem ducimus repudiandae officiis aperiam fugit. Blanditiis dolorum maiores tenetur aliquid qui labore recusandae ratione, ab necessitatibus laborum quas eius architecto autem esse ducimus eos ea mollitia odit quae quisquam. Modi fugit commodi dolor vero delectus voluptatem iusto, nemo veritatis distinctio quod, quia numquam aliquid voluptas, rerum repellendus minus excepturi itaque molestiae dolore ea eum neque doloremque repellat impedit!</p>
            </div>
    </motion.div>
  )
}