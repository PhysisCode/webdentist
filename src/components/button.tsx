import { LucideIcon } from "lucide-react";

interface ButtonProps {
  label: String;
  icon?: LucideIcon;
}

export function Button({ label, icon: Icon }: ButtonProps) {
  return (
    <button className="flex space-x-3 bg-gradient-to-r from-bege to-ciano p-5 rounded-full text-white text-lg items-center">
      <a href="https://api.whatsapp.com/send?phone=5511913542387&text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20tratamentos%20odontológicos.%20🦷">
        <p>{label}</p>
      </a>

      {Icon && <Icon />}
    </button>
  );
}
