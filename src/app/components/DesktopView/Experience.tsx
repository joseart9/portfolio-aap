import { motion } from "framer-motion";

export default function Experience() {
    return (
        <section id="experience" className="min-h-screen w-full grid grid-cols-12 items-center px-2">
            <div className="flex justify-center w-full col-span-9 h-full items-center">
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">

                    {/* Grupo Garza Ponce */}
                    <motion.li
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="timeline-middle text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="italic text-default-600">1992 - 2016</time>
                            <div className="text-lg text-default-800 font-black">Grupo Garza Ponce</div>
                            <p className="text-default-600 font-semibold mb-4 leading-relaxed text-pretty">
                                Ascendí de auxiliar de residente a Director de Construcción, liderando la construcción de más de <span className="text-primary font-bold">70,000 viviendas unifamiliares</span> en Monterrey, Reynosa y Saltillo. Alcanzamos un promedio anual de <span className="text-primary font-bold">6,500 viviendas</span>, manteniendo estándares de calidad, tiempo y costos.
                            </p>
                            <p className="text-default-600 font-semibold mb-4 leading-relaxed text-pretty">
                                Supervisé hasta <span className="text-primary font-bold">25 proyectos simultáneamente</span> con un equipo de más de <span className="text-primary font-bold">200 ingenieros</span> y <span className="text-primary font-bold">3,000 empleados</span>.
                            </p>
                            <p className="text-default-600 font-semibold leading-relaxed text-pretty">
                                Logramos obtener los mejores puntajes en el indicador de calidad del INFONAVIT durante dos años consecutivos (2008 y 2009), superando a los principales competidores.
                            </p>
                        </div>
                        <hr />
                    </motion.li>

                    {/* Fincamex S.A. de C.V. */}
                    <motion.li
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="timeline-middle text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="italic text-default-600">2017 - 2018</time>
                            <div className="text-lg font-black text-default-800">Fincamex S.A. de C.V.</div>
                            <p className="text-default-600 font-semibold mb-4 leading-relaxed text-pretty">
                                Coordiné <span className="text-primary font-bold">dos proyectos de vivienda de interés social</span> en el municipio de Juárez, N.L., asegurando el cumplimiento de tiempos y estándares de calidad.
                            </p>
                            <p className="text-default-600 font-semibold leading-relaxed text-pretty">
                                Implementé estrategias de planificación y ejecución para garantizar la entrega oportuna de las viviendas y la satisfacción de los clientes.
                            </p>
                        </div>
                        <hr />
                    </motion.li>

                    {/* Coordinador de proyecto */}
                    <motion.li
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="timeline-middle text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="italic text-default-600">Octubre 2018 - Junio 2019</time>
                            <div className="text-lg font-black text-default-800">Coordinador de Proyecto</div>
                            <p className="text-default-600 font-semibold mb-4 leading-relaxed text-pretty">
                                Coordiné <span className="text-primary font-bold">dos proyectos de vivienda de interés social</span> en el municipio de Juárez, N.L., gestionando todos los aspectos del desarrollo desde la planeación hasta la entrega final.
                            </p>
                            <p className="text-default-600 font-semibold mb-4 leading-relaxed text-pretty">
                                Supervisé la ejecución de las obras para asegurar el cumplimiento de los estándares de calidad, tiempos de entrega y optimización de recursos, manteniendo un enfoque en la satisfacción del cliente.
                            </p>
                        </div>
                        <hr />
                    </motion.li>

                    {/* Constructora RADAP */}
                    <motion.li
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="timeline-middle text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="italic text-default-600">2018 - Presente</time>
                            <div className="text-lg text-default-800 font-black">Constructora RADAP S.A. de C.V.</div>
                            <p className="text-default-600 font-semibold mb-4 leading-relaxed text-pretty">
                                Fundé mi propia empresa, gestionando diversos proyectos inmobiliarios y comerciales para clientes privados en el área metropolitana de Monterrey.
                            </p>
                            <p className="text-default-600 font-semibold leading-relaxed text-pretty">
                                Implementé estrategias para optimizar tiempos y costos, manteniendo un enfoque constante en la calidad y satisfacción del cliente.
                            </p>
                        </div>
                        <hr />
                    </motion.li>

                    {/* Acre Promotora */}
                    <motion.li
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="timeline-middle text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="italic text-default-600">2020 - Presente</time>
                            <div className="text-lg font-black text-default-800">Acre Promotora S.A. de C.V.</div>
                            <p className="text-default-600 font-semibold mb-4 leading-relaxed text-pretty">
                                Como Director de Construcción, gestiono <span className="text-primary font-bold">5 proyectos</span> de edificación y urbanización en Monterrey, enfocados en el segmento de vivienda media residencial.
                            </p>
                            <p className="text-default-600 font-semibold leading-relaxed text-pretty">
                                Lidero equipos multidisciplinarios para garantizar la entrega puntual y dentro del presupuesto, priorizando la calidad y el cumplimiento de los objetivos estratégicos.
                            </p>
                        </div>
                        <hr />
                    </motion.li>
                </ul>
            </div>

            <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-row justify-center items-center h-full w-full col-span-3 text-end"
            >
                <h1 className="text-6xl font-bold text-primary/50">Experiencia Laboral</h1>
            </motion.div>
        </section>
    );
}
