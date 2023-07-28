import AboutFaq from "@/components/AboutFaq";
import Alinks from "@/components/Alinks";
import Container from "@/components/Container";
import { H1Heading } from "@/components/H1";
import React from "react";

const faqs = [
  {
    question: "Cuentame un poco sobre ti.",
    answer:
      "Bueno, para comenzar, mi nombre es Antonio Palacios, me describo como un amante y apasionado de la tecnologia. Soy egresado de la carrera de Ingeniería Industrial y actualmente laburo como independiente. Los ultimos sucesos en el mundo me ha llevado a buscar nuevas oportunidades, y como resultado de estas he podido conocer un grandioso universo. Te cuento un poco sobre esto, la libertad, la descentralización y la seguridad son pilares fundamentales para esta tecnología, ¿Te imaginas de que estoy hablando? Bueno, hablo de la Blockchain.",
  },
  {
    question: "Entonces, ¿Qué quieres decir con eso? ¿Que realmente haces?",
    answer:
      "¡Me encanta este tipo de preguntas! Soy Ingenierio Industrial de formación profesional, sin embargo, en mis ratos libres soy desarrollador web y como independiente, he sido bendecido con la oportunidad de explorar un universo emocionante como la Blockchain durante los ultimos cinco años. Comunmente, las personas lo relaciónan con las crytomonedas, y es compresible por los ultimos acontecimientos sobre Bitcoin y el mundo crypto, sin embargo, hay una tecnologia detrás de estas que buscan generar un gran impacto postivo en la sociedad.",
  },
  {
    question: "¿Qué te motivó a crear este blog?",
    answer:
      "El boom de las crytomonedas del 2021 llevó a muchas personas a introducirse en este facinante universo, no obstante, existen muchas barreras para mantenerse e ir a la dirección correcta. Una de ellas es la barrera del conocimiento, muchos interpretan que la blockchain solamente son cryptomonedas y que no hay nada mas que eso. Adicionalmente, al ser un mundo muy descentralizado se requiere tener al menos conocimientos básicos para poder sobrevivir en el viejo oeste. Ademas, muchas personas entran con la esperanza de obtener beneficios y al final pierden su dinero, o son estafados, por el mismo hecho de no estar informados correctamente. Y por este motivo, he decidido crear este blog, para poder compartir mis conocimiento y experiencias con el objetivo de ayudar a las personas a que puedan tomar mejores decisiones en el mundo descentralizado de la blockchain.",
  },
  {
    question:
      "¿De que te diferencias de otros blogs relacionados con la blockchain?",
    answer: "",
  },
];

const AboutPage = () => {
  return (
    <Container as="section" className="py-24">
      <H1Heading className="mb-4 animate-in slide-in-from-left duration-500 text-slate-200">
        Hey, Soy Antonio.
      </H1Heading>
      <h2 className="h0 font-bold animate-in slide-in-from-right duration-500 text-slate-200">
        Un gusto Conocerte.
      </h2>
      <div className="prose prose-lg mt-16 max-w-prose text-white animate-in slide-in-from-bottom duration-500 md:prose-2xl">
        <p className="lead font-medium text-slate-400 text-justify">
          Escribir una biografia acerca de mi mismo, me parece algo extraño. Por
          el cual, he decidido entrevistarme yo mismo, de esta manera puedo
          presentarme y compartir mis experiencias de una manera natural. Sigue
          leyendo abajo.
        </p>
        <AboutFaq faqs={faqs} />
        <hr className="my-10 w-10 border border-white" />
        <p className="text-slate-400 text-justify">
          Actualmente estoy trabajando en mi título profesional, desarrollando
          webs, y escribiendo blogs sobre la blockchain y el mundo crypto! Si
          deseas colaborar colaborar con el proyecto del blog, o por cualquier
          otra razón, me encantaría saber de ti!
        </p>
        <div className="flex flex-row space-x-4">
          <span>↳</span>
          <Alinks href="/" className="text-slate-100">
            Twitter
          </Alinks>
          <span>/</span>
          <Alinks href="/" className="text-slate-100">
            Email
          </Alinks>
          <span>/</span>
          <Alinks href="/" className="text-slate-100">
            Github
          </Alinks>
          <span>/</span>
          <Alinks
            href="/"
            className=" font-medium tracking-wide text-slate-100"
          >
            LinkedIn
          </Alinks>
        </div>
      </div>
    </Container>
  );
};

export default AboutPage;
