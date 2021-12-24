import React, { Component } from 'react'
import Card from './Card'

export class CardSection extends Component {
    render() {
        return (
            <div className='container'>
                <h1 className='text-center mt-5 sectionCardText'>Card Section</h1>
                <div className="row ">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        )
    }
}

export default CardSection
