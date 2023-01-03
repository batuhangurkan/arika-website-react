import type { NextPage } from 'next'

import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

import getStatusService, {
  IGetStatusElements,
} from '../services/getStatusService'

type StatusElementProps = { content: string; error?: 'warning' | 'error' }

const Home: NextPage<{ data: IGetStatusElements }> = ({ data }) => {
  const getStatusState = () => {
    const operational = data.filter(
      ({ status }) => status === 'Operational'
    ).length

    if (operational === data.length) return 'allOperational'

    if (operational === 0) return 'noneOperational'

    return 'notAllOperational'
  }

  const statusElement = ({ content, error }: StatusElementProps) => {
    return (
      <div className={styles.status} data-error={error}>
        <p>{content}</p>
      </div>
    )
  }

  const faviconFolder = () => {
    if (data.length === 0) return 'error'

    const statusState = getStatusState()

    if (statusState === 'allOperational') return 'check'
    else return 'warning'
  }

  return (
    <>
    <div className={styles.container}>
      <Head>
      <meta http-equiv="refresh" content="60; URL=/status"></meta>
        <title>Arika | Servis Durumları</title>
        <meta name="description" content="See the status of Arika services" />
        <meta
          name="theme-color"
          content={
            data.length === 0
              ? '#bf1a2f'
              : getStatusState() !== 'allOperational'
              ? '#dbab09'
              : '#28a745'
          }
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`/${faviconFolder()}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/${faviconFolder()}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/${faviconFolder()}/favicon-16x16.png`}
        />
        <link rel="icon" href={`/${faviconFolder()}/favicon.ico`} />
      </Head>

      <main className={styles.main}>
        <h1
          className={styles.title}
          data-error={
            data.length === 0 ? 'error' : getStatusState() !== 'allOperational'
          }
        >
        <Link href="/">Arika Servis Durumları</Link>
        </h1>
        <p className={styles.description}>
        <i className="mr-1.5 fa-solid fa-circle-exclamation mt-5"></i>Arika'nın tüm servis durumlarını görüntüleyebilirsiniz. Sistem otomatik olarak çalışır ve her 60 saniyede yenilenir.
        </p>

        {(() => {
          if (data.length === 0)
            return statusElement({
              error: 'error',
              content:
                'Arika servis durumlarını görüntülerken bir kaç sorun oluştu. Bunun için üzgünüz. API ile iletişim kurulamadı.',
            })

          const statusState = getStatusState()

          if (statusState === 'allOperational')
            return statusElement({ content: 'Tüm Servisler Çalışıyor.' })

          if (statusState === 'noneOperational')
            return statusElement({
              content: 'Hiçbir hizmet çalışmıyor :(',
              error: 'warning',
            })

          return statusElement({
            content: 'Bazı Hizmetler Kesintiye Uğramış.',
            error: 'warning',
          })
        })()}

        <div className={styles.grid}>
          {data.map(({ name, status }) => (
            <div
              key={name}
              data-error={status !== 'Operational'}
              className={styles.card}
            >
              <h2>{name}</h2>

              <p>{status}</p>
            </div>
          ))}
        </div>
        <div className="mt-7">
            <div className="w-full h-1 my-3 bg-zinc-500/0 rounded-xl mt-10">
                <div className="w-full hover:bg-zinc-500/5 px-4 my-2 hover:px-4 rounded-lg transition-all duration-200 cursor-pointer border border-white/5 py-5 flex justify-between items-center">
                <div className="flex gap-x-4">
                    <i className="flex items-center bg-violet-500/10 rounded-lg text-xl w-12 h-12 text-violet-600 px-3 py-2 fal fa-arrow-left"></i>
                    <div className="text-left mr-3">
                        <p className="text-lg text-violet-200"><a href="/">Geri dön</a></p>
                        <p className="text-sm text-white/50"><a href="/">Yönlendirilmeden önce geldiğiniz sayfaya geri dönün.</a></p>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
      </main>
    </div>
    </>
  )
}

export async function getServerSideProps() {
  try {
    const elements = await getStatusService()

    return {
      props: { data: elements },
    }
  } catch (err) {
    return { props: { data: [] } }
  }
}

export default Home