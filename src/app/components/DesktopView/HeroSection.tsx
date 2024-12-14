import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/react";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import useLang from "@/hooks/useLang";
import { motion } from "framer-motion";


export default function HeroSection({ hrefJump }: { hrefJump?: any }) {
    const { lang, changeLang } = useLang("es");
    return (
        <section id="inicio" className="min-h-screen w-full justify-center flex-grow flex flex-col">
            <div>

                <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0 }}
                    viewport={{ once: true }}
                    alt="imagen"
                    src="/avatarImg.webp"
                    className="float-right w-80 h-80 ml-24 rounded-full object-cover transition-transform duration-300 hover:scale-110"
                    style={{
                        shapeOutside: "circle(50%)",
                    }}
                />

                <section >
                    <h1 className="text-5xl font-bold leading-snug mb-4 w-full">
                        <motion.span
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >Arturo Arguelles Perez</motion.span>
                        <motion.span
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            viewport={{ once: true }}
                        >,<span className="text-primary font-black"> Ingeniero Civil</span> con mas de <span className="text-primary font-black">24 años</span> de experiencia.</motion.span>
                    </h1>
                </section>

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col">
                    <h3 className="text-default-700 text-xl mr-10">
                        Especializado en la construcción de desarrollos habitacionales en serie, con un enfoque integral en la satisfacción del cliente, excelencia operativa y la más alta calidad en cada proyecto
                    </h3>

                    <section className="flex flex-row gap-4 mt-6">
                        <a href="https://www.linkedin.com/in/arturo-arguelles-perez-83450313a/">
                            <span color="primary" className="w-11 h-11">
                                <FaLinkedinIn className="w-10 h-10 text-primary" />
                            </span>
                        </a>
                    </section>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 2 }}
                        viewport={{ once: true }}
                    >
                        <Button href="#about" as={Link} isIconOnly variant="light" color="primary" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce animate-infinite">
                            <IoIosArrowDown className="text-primary size-12" />
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
