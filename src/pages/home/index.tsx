import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { SendHorizonal } from "lucide-react";

export function HomePage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Header />

      <section className="flex justify-between items-center">
        <div>
          <div className="font-title font-bold">
            <h2 className="text-5xl font-light text-zinc-600">
              Dra. Karolyne Pimentel
            </h2>
            <h1 className="text-8xl bg-clip-text text-transparent bg-gradient-to-r from-bege to-ciano">
              Clínica de Odontologia <br />& Estética
            </h1>
          </div>
          <div className="mt-5">
            <Button label={"Fale Conosco"} icon={SendHorizonal} />
          </div>
        </div>
        <div>
          <img className="ml-24" src="./girl.png" alt="" />
        </div>
      </section>
    </div>
  );
}
