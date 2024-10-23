import { Instagram } from "lucide-react";

export function Header(){
    return(
        <header className="fixed top-0 left-0 right-0 mx-28 mt-5 items-center flex z-30 justify-between">
        <div><img className="w-20" src="./logo_karol.png" alt="" /></div>
        <div className="flex space-x-5"><button>Iniciar</button><button>Procedimentos</button><button>Sobre</button></div>
        <div className="flex space-x-5"><button><Instagram className="text-black w-8 h-8"/></button><button><img className="w-8" src="./whatsapp.svg" alt="" /></button></div>
      </header>
    )
}