import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full">
        <section className="pt-24 pb-32 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl text-zinc-50 font-semibold">
                Buttons with highlight effect
              </h2>
            </div>
            <div className="flex items-center gap-8">
              <button className="btn bg-[#B9D228] btn-highlight-[#D3F02D]">
                <span className="z-10 flex w-full items-center justify-center">
                  Button
                </span>
              </button>
              <button className="btn bg-gradient-to-t from-blue-500 to-blue-400 btn-highlight-[#32D8FD]">
                <span className="z-10 flex w-full items-center justify-center text-white">
                  Button
                </span>
              </button>
              <button className="btn bg-slate-200 hover:after:highlight-white">
                <span className="z-10 flex w-full items-center justify-center text-slate-800">
                  Button
                </span>
              </button>
              <button className="btn bg-gradient-to-t from-sky-600 to-sky-500 btn-highlight-[#32D8FD]">
                <span className="z-10 flex w-full items-center justify-center text-white">
                  Button
                </span>
              </button>
              <button className="btn bg-purple-500 btn-highlight-[#EE83FF]">
                <span className="z-10 flex w-full items-center justify-center text-white">
                  Button
                </span>
              </button>
            </div>
          </div>
        </section>

        <section className="pt-24 pb-32 bg-yellow-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <span className="flex h-32 w-32 bg-lime-400 overflow-hidden relative">
              1234
            </span>
          </div>
        </section>
      </main>
    </>
  )
}
