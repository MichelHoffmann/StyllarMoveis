import { Header } from "./components/Header";
import About from "../public/about.svg";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="w-full mb-60px bg-[url('../public/bg-about.svg')] bg-no-repeat bg-cover h-260px flex items-center">
          <img src={About} alt="" className="ml-10" />
        </section>
        <section className="w-full">
          <h1 className="font-light text-2xl text-center">
            Conheça nossa linha de moveis
          </h1>
          <article className="w-full flex flex-col gap-8 justify-center items-center">
            <div className="bg-gray-800 flex justify-center items-center w-335px h-169px">
              <h2 className="text-center font-medium text-2rem text-white">Quarto</h2>
            </div>
            <div className="bg-red flex justify-center items-center w-335px h-169px">
              <h2 className="text-center font-medium text-2rem text-white">Sala</h2>
            </div>
            <div className="bg-green-700 flex justify-center items-center w-335px h-169px">
              <h2 className="text-center font-medium text-2rem text-white">Cozinha</h2>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
