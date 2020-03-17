import React from 'react'

export const Body = () => {
    return (
        <div>
            <div class="slidershow middle">
                <div class="slides">
                    <input type="radio" name="r" id="r1" checked />
                    <input type="radio" name="r" id="r2" />
                    <input type="radio" name="r" id="r3" />
                    <input type="radio" name="r" id="r4" />
                    <input type="radio" name="r" id="r5" />
                    <div class="slide">
                        <img src="wolverine.jpg" alt="Wolverine" />
                    </div>
                    <div class="slide s1">
                        <img src="spiderman.jpg" alt="Spiderman" />
                    </div>
                    <div class="slide">
                        <img src="ironman.jpg" alt="Iron man" />
                    </div>
                    <div class="slide">
                        <img src="black-panther.jpg" alt="Black Panther" />
                    </div>
                    <div class="slide">
                        <img src="black-widow.jpg" alt="Black Widow" />
                    </div>
                </div>
                <div class="navigation">
                    <label for="r1" class="bar"></label>
                    <label for="r2" class="bar"></label>
                    <label for="r3" class="bar"></label>
                    <label for="r4" class="bar"></label>
                    <label for="r5" class="bar"></label>
                </div>

            </div>

            <div  className="search-box">
                <input className="search-txt" type="text" name="" placeholder="Type to search" />
                <a className="search-btn" href="#">
                    <i className="fas fa-search"></i>
                </a>
            </div>

            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>




        </div>

        
    )
}

