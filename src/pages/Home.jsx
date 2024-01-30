import {About, Landing, Services} from "./sections"

const Home = () => {
  return (
    <div className="min-h-full min-w-full ">
        <section className="w-full min-h-[90vh] bg-bg-6a bg-fixed bg-cover bg-no-repeat bg-center">
          <Landing />
        </section>
        <section className="padding">
          <Services />
        </section>
        <section className="padding">
          <About />
        </section>
    </div>
  )
}

export default Home