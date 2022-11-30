import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Book from './ui/Book';
import {books} from '../data'

const Featured = () => {
    
        books.filter((book) => book.rating === 5).slice(0,4)
        function getFiveStarBooks () {}
    return (
        <div>
            <section id="features">

                <div className="container">
                    <div className="row">
                        <div className="section__title">
                            <h2 className="section__title">
                                Featured <span className="purple">Books</span>
                            </h2>
                            <div className="books">
                                {books
                                .filter((book) => book.rating === 5)
                                .slice(0,4)
                                .map((book) => (
                                    <Book book = {book} key={book.id} /> 
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </div>
    );
}

export default Featured;
