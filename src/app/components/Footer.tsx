import { FaWhatsapp } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer footer-center bg-base text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover text-primary font-semibold" href="#inicio">Inicio</a>
                <a className="link link-hover text-primary font-semibold" href="#about">Sobre Mí</a>
                <a className="link link-hover text-primary font-semibold" href="#experience">Experiencia</a>
                {/* <a className="link link-hover text-primary font-semibold" href="#projects">Proyectos</a> */}
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://wa.me/528119111384" target="_blank" rel="noreferrer">
                        <FaWhatsapp className="fill-current size-8 text-primary/60" />
                    </a>
                    <a href="https://www.linkedin.com/in/arturo-arguelles-perez-83450313a/" target="_blank" rel="noreferrer">
                        <RiLinkedinFill className="fill-current size-8 text-primary/60" />
                    </a>
                </div>
            </nav>
            <a href="https://www.instagram.com/araf.innovations/">
                <p className="text-center text-primary/60 text-md font-semibold">
                    Powered by Araf Innovations.
                </p>
            </a>
        </footer>
    )
}