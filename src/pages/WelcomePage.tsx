import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import img from "../assets/CVs.png"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


export function WelcomePage() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col-reverse items-center justify-between text-xl p-5 m-20 md:flex-row md:text-5xl">
      <div className="text-white  flex flex-col items-center gap-5">
        <h1>{t('cvMaker')}</h1>
        <h1>{t('buildCV')}</h1>
        <Link to="/build"> <Button className="text-black" variant="outline">{t('getStarted')}<ArrowRight className="animate-pulse" /></Button> </Link>
      </div>
      <img className="w-[600px] h-auto animate-fade-up animate-once animate-delay-100 animate-ease-in md:w-[800px]" src={img} />
    </div>
  )
}

