import Link from 'next/link'
import s from './../styles/error.module.scss'
import { MainLayout } from './components/MainLayout'
export default function ErrorPage(){
    return(
        <MainLayout>
            <h1 className={s.error}>Error 404</h1>
            <p>Please<Link href={'/'}><a> go back </a></Link>to safety</p>
        </MainLayout>
    )
}