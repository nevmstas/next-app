import React from 'react'
import Router from 'next/router'
import {MainLayout} from './../components/MainLayout'

export default function About() {
    const linkClickHandler = () =>{
        Router.push('/')
    }
    return(
        <MainLayout>
            <h1>About Page</h1>
            <button onClick={() =>Router.push('/posts')}>Go to posts</button>
            <button onClick={linkClickHandler}>Go back to home</button>
        </MainLayout>
    )
}