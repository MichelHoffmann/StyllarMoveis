import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import About from "../public/about.svg";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="w-full h-260px mb-4 bg-[url('../public/bg-about.svg')] bg-no-repeat bg-cover flex flex-col justify-center gap-5 sm:h-400px md:flex-row md:items-center md:justify-between lg:h-600px md:px-14 lg:px-20">
          <img src={About} alt="" className="ml-10 w-213px md:ml-0 lg:w-64" />
          <p className="ml-10 text-white font-light lg:text-1.5rem">
            A sua loja de móveis planejados
          </p>
        </section>
        <section className="w-full pb-60px">
          <h1 className="font-light text-1.5rem text-center mb-30px">
            Conheça nossa linha
            <br /> de moveis
          </h1>
          <article className="w-full flex flex-col gap-8 justify-center items-center lg:flex-row">
            <div className="bg-[url('../public/quarto.svg')] flex justify-center items-center w-300px h-169px rounded-[30px]">
              <h2 className="text-center font-medium text-2rem text-white">
                Quarto
              </h2>
            </div>
            <div className="bg-[url('../public/sala.svg')] flex justify-center items-center w-300px h-169px rounded-[30px]">
              <h2 className="text-center font-medium text-2rem text-white">
                Sala
              </h2>
            </div>
            <div className="bg-[url('../public/cozinha.svg')] flex justify-center items-center w-300px h-169px rounded-[30px]">
              <h2 className="text-center font-medium text-2rem text-white">
                Cozinha
              </h2>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
