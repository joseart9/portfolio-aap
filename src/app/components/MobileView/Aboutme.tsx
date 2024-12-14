import { motion } from "framer-motion";

export default function Aboutme() {
    return (
        <section id="about" className="flex min-h-screen h-screen w-full">
            <section className="flex flex-col w-full h-full justify-center">
                <motion.h1
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}

                    className="col-span-4 text-5xl font-black text-primary/50 mb-14">
                    Sobre mí
                </motion.h1>
                <div className="relative w-full max-w-4xl pr-7">
                    <motion.img
                        alt="imagen"
                        src="avatarImg.webp"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="float-left w-36 h-36 rounded-full object-cover mr-6 mb-6"
                        style={{
                            shapeOutside: "circle(50%)",
                            clipPath: "circle(50%)",
                        }}
                    />

                    <motion.p
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-xl text-pretty text-default-800 font-semibold mb-6 leading-inherit">
                        Soy un <span className="text-primary font-bold">Ingeniero Civil</span> con más de <span className="text-primary font-bold">24 años de experiencia</span> en la construcción de vivienda en serie. Durante mi trayectoria, he liderado la edificación de más de <span className="text-primary font-bold">70,000 viviendas unifamiliares</span> en la zona noreste de México, demostrando excelencia operativa y compromiso con la calidad.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="text-xl text-pretty text-default-800 font-semibold leading-inherit">
                        Me especializo en <span className="text-primary font-bold">mejorar la calidad del producto</span>, optimizar tiempos de producción y reducir costos. Además, me motiva brindar una <span className="text-primary font-bold">atención al cliente excepcional</span>, asegurándome de superar las expectativas en cada proyecto.
                    </motion.p>
                </div>
            </section>
        </section>
    )
}