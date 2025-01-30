

export default function Home() {
  const mainText = "Playground for different UI techniques"
  const textDesc = "This project is a testing ground for me and you to learn more about different techniques and styles in UI design. Locked in🔒🔒"
  return (
    <main>
    <div>
    <h1 className="h-[30vh] text-[3vw] flex justify-center items-center md:font-bold ">{mainText}</h1>
    <p className="h-[10vh] flex justify-center pr-20 pl-20 items-center text-[5vw] font-bold md:h-[10vh] md:flex md:justify-center md:pr-85 md:pl-85 md:items-center md:text-[2vw] md:font-bold">{textDesc} </p>
   
    </div>
    <div className="flex gap-5 pt-20 md:flex-row flex-col w-full justify-center">
    <button className="flex justify-center items-center w-80 h-20  rounded-md border-2 border-double underline underline-offset-2 ">
      <p className="">
        See more
      </p>
    </button>
    </div>
    


    </main>
  );
}
