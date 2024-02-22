import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div>
        <img src={hero} className="w-full max-h-[100%] object-cover" />
    </div>
  )
}

export default Hero