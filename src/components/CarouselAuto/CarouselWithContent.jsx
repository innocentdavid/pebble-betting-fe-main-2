import { Carousel, Typography, Button } from "@material-tailwind/react";
import carousel1 from "/images/Carousel.svg";
import carousel2 from "/images/Dale.svg";
import Baby from "/images/baby.svg"; 


export default function CarouselWithContent() {
  return (
    <Carousel 
    autoplay= "true"
    autoplayDelay= {5000}
    loop={true}
    transition={{ duration: 1.5 }}
    navigation=""
    prevArrow=""
    nextArrow=""
    className="rounded-xl gap-4">
      <div className="relative h-auto w-full">
        <img
          // src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        src={carousel1}
          alt="image 1"
          className="h-auto w-full object-cover"
        />
        <div className="absolute inset-0 grid h-auto w-full place-items-center bg-black/40">
          <div className="w-full   h-auto text-[#DFFE00CC] text-[10px] md:text-[16px]
               uppercase flex flex-col md:items-start md:justify-center font-chakra 
                px-4 lg:pl-10">
          <div className="bg-[#D9D9D926] w-[150px] max-w-[300px] md:w-full px-1 md:py-2">
            <Typography
              // variant=""
              // color="white"
              className="text-[12px] md:text-[16px] font-chakra font-[500]"
            >
              SIGN IN AND WATCH CK
            </Typography>
            <Typography
              // variant=""
              // color="white"
              className="text-[12px] md:text-[16px] font-chakra  font-[500]"
            >
              REEDEEM HIMSELF
            </Typography>
            <img src={Baby} alt="Baby" className="mt-2 w-[27px] h-[22px]"/>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-auto w-full">
        <img
          // src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        src={carousel2}
          alt="image 1"
          className="h-auto w-full object-cover"
        />
        <div className="absolute inset-0 grid h-auto w-full place-items-center   bg-black/40">
          <div className="w-full   h-auto text-[#DFFE00CC] text-[10px] md:text-[16px]
               uppercase flex flex-col md:items-start md:justify-center font-chakra 
                px-4 lg:pl-10">
          <div className="bg-[#D9D9D926] w-[150px] max-w-[400px] md:w-full px-1 md:py-2">
            <Typography
              // variant=""
              // color="white"
              className="text-[10px] md:text-[16px] font-chakra  md:font-[600]"
            >
              Enjoy world of Live stream betting
            </Typography>
            <Typography
              // variant=""
              // color="white"
              className="text-[8px] md:text-[12px] md:mt-2 text-[#FFFFFF] font-chakra font-[500] md:font-[600]"
            >
              Your favorite Marble awaits you
            </Typography>
            <img src={Baby} alt="Baby" className="md:mt-2 w-[27px] h-[22px]"/>
            </div>
          </div>
        </div>
      </div>
    
      {/* <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div> */}
    </Carousel>
  );
}