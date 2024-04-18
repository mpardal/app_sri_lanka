import { Head } from '@inertiajs/react'
import { Button } from '../../@/components/ui/button'

export default function Home(props: { version: number }) {
  return (
    <>
      <Head title="Homepage" />

      <div className="container">
        <div className="title">AdonisJS {props.version} x Inertia x React</div>
        <div className="my-5">
          <Button>
            <a href="https://docs.adonisjs.com/guides/inertia">Bonjour</a>
          </Button>
        </div>
        <span className="text-white">
          Learn more about AdonisJS and Inertia.js by visiting the{' '}
          <a href="https://docs.adonisjs.com/guides/inertia">AdonisJS documentation</a>.
        </span>
      </div>
    </>
  )
}
