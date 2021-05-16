import Image from 'next/image'

import S from '../styles/pages/home.module.scss'

export default function Home() {
  return (
    <>
      <iframe
        src="https://www.youtube.com/embed/30pntcz3wh0?autoplay=1&loop=1&&playlist=30pntcz3wh0&controls=0&mute=1"
        title="Garrafa Vazia Birinaite Apocalipse"
        className={S.iframe}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      <div className={`container pb-5 ${S.homeWrapper}`}>
        <div className="row pt-5">
          <div className="col-lg-6 text-center">
            <Image
              src="/logo.png"
              alt="Logo da banda Garrafa Vazia"
              width={300}
              height={224}
            />
            <h1 className="my-4">
              **** SAIUUUUU! ****
            </h1>
            <Image
                src="/birinaite-apocalipse.png"
                alt="Logo da banda Garrafa Vazia"
                width={491}
                height={88}
              />
            <p className={`lh-1 ${S.intro}`}>
              Novo CD do Garrafa Vazia...
            </p>
            <h2 className="">11 músicas...</h2>
            <p className={`lh-1 mb-4 ${S.intro}`}>
              Nosso melhor trampo para você bailar por toda naite.
            </p>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0 text-center">
            <Image
                src="/garrafa-vaziabirinaite-apocalipse.jpg"
                alt="Logo da banda Garrafa Vazia"
                width={700}
                height={700}
                className="border border-danger border-5 rounded"
              />
          </div>
          <div className="col-12 d-flex justify-content-center my-5">
            <a
              href="https://api.whatsapp.com/send?phone=5519996447845&text=Eu%20quero%20o%20CD%20do%20Birinaite%20Apocalipse!"
              className={`btn btn-danger px-5 py-3 ${S.buyButton}`}
              target="_blank"
            >
                PEÇA AGORA O SEU CD
            </a>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-8">
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/RORc27-8ge8?controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="border border-danger border-5 rounded" />
          </div>
          <div className="col-md-4 mt-4 mt-md-0 text-center">
            <ul className="list-unstyled text-danger bg-light p-5 border border-danger border-5 rounded">
              <li className="">AUTONOMIA</li>
              <li className="">AOS IDIOTAS</li>
              <li className="">FORGA CEREBRAL</li>
              <li className="">STREETS OF CACHAÇA</li>
              <li className="">VIDA PROGRAMADA</li>
              <li className="">HIPÓCRITA</li>
              <li className="">INSUBORDINAÇÃO</li>
              <li className="">CAIXA DE FÓRFI</li>
              <li className="">PUNK DO MATO</li>
              <li className="">BIRINAITE APOCALIPSE</li>
              <li className="">CORAÇÃO ENVENENADO</li>
            </ul>
          </div>
          <div className="col-12 mt-4">
            <h1>Lasca o play</h1>
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/30pntcz3wh0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
        </div>
      </div>
    </>
  )
}
