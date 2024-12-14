import { motion } from "framer-motion";

export default function Aboutme() {
    return (
        <section id="about" className="flex h-screen w-full">
            <section className="grid grid-cols-12 gap-8 w-full h-full items-center justify-center">

                <motion.h1
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}

                    className="col-span-4 text-6xl font-black text-primary/50">
                    Sobre mí
                </motion.h1>

                <div className="col-span-8 flex flex-col items-center h-full justify-center">
                    <motion.p
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}

                        className="text-2xl text-pretty pr-8 text-default-800 font-semibold mb-6 leading-inherit">
                        Soy un <span className="text-primary font-bold">Ingeniero Civil</span> con más de <span className="text-primary font-bold">24 años de experiencia</span> en la construcción de vivienda en serie. Durante mi trayectoria, he liderado la edificación de más de <span className="text-primary font-bold">70,000 viviendas unifamiliares</span> en la zona noreste de México, demostrando excelencia operativa y compromiso con la calidad.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        viewport={{ once: true }}

                        className="text-2xl text-pretty pr-8 text-default-800 font-semibold leading-inherit">
                        Me especializo en <span className="text-primary font-bold">mejorar la calidad del producto</span>, optimizar tiempos de producción y reducir costos. Además, me motiva brindar una <span className="text-primary font-bold">atención al cliente excepcional</span>, asegurándome de superar las expectativas en cada proyecto.
                    </motion.p>
                </div>
            </section>
        </section>
    );
}
