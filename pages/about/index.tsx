import React from 'react'
import Router from 'next/router'
import {MainLayout} from './../components/MainLayout'

export default function About({title}) {
    const linkClickHandler = () =>{
        Router.push('/')
    }
    return(
        <MainLayout>
            <h1>About Page</h1>
            <h1>{title.title}</h1>
            <button onClick={() =>Router.push('/posts')}>Go to posts</button>
            <button onClick={linkClickHandler}>Go back to home</button>
        </MainLayout>
    )
}

About.getInitialProps = async () =>{
    const response = await fetch('http://localhost:4200/about')
    const data = await response.json()
    return {
        title: data
    }
}